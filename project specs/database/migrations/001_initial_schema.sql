-- THE FOUNDERS | PostgreSQL baseline v1.1
-- Development baseline. Review DECISIONS_AND_OPEN_ITEMS.md before production.
-- PostgreSQL 15+ recommended. Currency: KES.
CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TYPE organisation_kind AS ENUM ('PARENT','VENTURE');
CREATE TYPE organisation_status AS ENUM ('PLANNED','SETUP','ACTIVE','SUSPENDED','CLOSED');
CREATE TYPE member_status AS ENUM ('APPLICANT','ACTIVE','SUSPENDED','EXITED');
CREATE TYPE role_code AS ENUM ('CHAIRPERSON','SECRETARY','TREASURER','SUPERVISOR','ASSOCIATE_PARTNER','SYSTEM_ADMIN');
CREATE TYPE account_class AS ENUM ('ASSET','LIABILITY','EQUITY','REVENUE','EXPENSE');
CREATE TYPE journal_status AS ENUM ('DRAFT','POSTED','REVERSED');
CREATE TYPE contribution_kind AS ENUM ('CHAMA','MEMBER_INVESTMENT','WELFARE','VENTURE_CAPITAL','GROUP_INVESTMENT');
CREATE TYPE loan_status AS ENUM ('PENDING','APPROVED','DISBURSED','PARTIALLY_REPAID','REPAID','DEFAULTED','CANCELLED');
CREATE TYPE transaction_status AS ENUM ('DRAFT','PENDING_APPROVAL','APPROVED','REJECTED','POSTED','VOIDED');
CREATE TYPE stock_movement_kind AS ENUM ('RECEIPT','ISSUE','SALE','DAMAGE','LOSS','ADJUSTMENT','TRANSFER_IN','TRANSFER_OUT');

CREATE TABLE organisations (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    parent_organisation_id uuid REFERENCES organisations(id),
    code varchar(30) NOT NULL UNIQUE,
    legal_name varchar(200) NOT NULL,
    trading_name varchar(200),
    kind organisation_kind NOT NULL,
    status organisation_status NOT NULL DEFAULT 'PLANNED',
    country_code char(2) NOT NULL DEFAULT 'KE',
    base_currency char(3) NOT NULL DEFAULT 'KES',
    registered_address text,
    operational_address text,
    setup_date date,
    launch_date date,
    closed_at timestamptz,
    created_at timestamptz NOT NULL DEFAULT now(),
    updated_at timestamptz NOT NULL DEFAULT now(),
    CHECK ((kind = 'PARENT' AND parent_organisation_id IS NULL) OR
           (kind = 'VENTURE' AND parent_organisation_id IS NOT NULL))
);

CREATE TABLE members (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    member_number varchar(30) UNIQUE,
    full_name varchar(200) NOT NULL,
    email varchar(254),
    phone varchar(30),
    status member_status NOT NULL DEFAULT 'APPLICANT',
    joined_on date,
    exited_on date,
    is_original_founder boolean NOT NULL DEFAULT false,
    created_at timestamptz NOT NULL DEFAULT now(),
    CHECK (exited_on IS NULL OR joined_on IS NULL OR exited_on >= joined_on)
);

CREATE TABLE users (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    member_id uuid UNIQUE REFERENCES members(id),
    email varchar(254) NOT NULL UNIQUE,
    password_hash text,
    is_active boolean NOT NULL DEFAULT true,
    last_login_at timestamptz,
    created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE role_assignments (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    member_id uuid NOT NULL REFERENCES members(id),
    organisation_id uuid NOT NULL REFERENCES organisations(id),
    role role_code NOT NULL,
    valid_from date NOT NULL DEFAULT CURRENT_DATE,
    valid_to date,
    assigned_by uuid REFERENCES members(id),
    CHECK (valid_to IS NULL OR valid_to >= valid_from)
);

-- Founding interests are equal units. 9.1% is the agreed display convention;
-- 11 x 9.1% = 100.1% is not used as the calculation basis.
CREATE TABLE founding_interests (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    member_id uuid NOT NULL UNIQUE REFERENCES members(id),
    parent_organisation_id uuid NOT NULL REFERENCES organisations(id),
    ownership_units integer NOT NULL DEFAULT 1 CHECK (ownership_units > 0),
    display_percentage numeric(5,2) NOT NULL DEFAULT 9.10 CHECK (display_percentage = 9.10),
    effective_from date NOT NULL,
    effective_to date,
    created_at timestamptz NOT NULL DEFAULT now(),
    CHECK (effective_to IS NULL OR effective_to >= effective_from)
);

CREATE TABLE venture_profiles (
    organisation_id uuid PRIMARY KEY REFERENCES organisations(id),
    project_code varchar(30) UNIQUE,
    annexure_reference varchar(100),
    approved_by uuid REFERENCES members(id),
    approved_at timestamptz,
    primary_venue text,
    business_description text,
    capital_injection_date date,
    commercial_launch_date date,
    life_stage varchar(20) NOT NULL DEFAULT 'EARLY'
        CHECK (life_stage IN ('EARLY','GROWTH','MATURE')),
    created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE venture_ownership (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    venture_organisation_id uuid NOT NULL REFERENCES organisations(id),
    owner_organisation_id uuid NOT NULL REFERENCES organisations(id),
    ownership_percentage numeric(7,4) NOT NULL CHECK (ownership_percentage >= 0 AND ownership_percentage <= 100),
    effective_from date NOT NULL,
    effective_to date,
    legal_basis text,
    CHECK (effective_to IS NULL OR effective_to >= effective_from)
);

CREATE TABLE capital_allocations (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    venture_organisation_id uuid NOT NULL REFERENCES organisations(id),
    category varchar(50) NOT NULL CHECK (category IN
      ('REAL_ESTATE','FACILITY_EQUIPMENT','TOOLS_LOGISTICS','COMPLIANCE_BRANDING',
       'COMMUNICATIONS','WORKING_CAPITAL','UNALLOCATED_RESERVE','OTHER')),
    description text NOT NULL,
    budgeted_amount numeric(18,2) NOT NULL DEFAULT 0 CHECK (budgeted_amount >= 0),
    actual_amount numeric(18,2) NOT NULL DEFAULT 0 CHECK (actual_amount >= 0),
    allocated_on date,
    created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE bank_accounts (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    organisation_id uuid NOT NULL REFERENCES organisations(id),
    bank_name varchar(120) NOT NULL,
    account_name varchar(200) NOT NULL,
    account_number_masked varchar(40),
    currency char(3) NOT NULL DEFAULT 'KES',
    is_active boolean NOT NULL DEFAULT true,
    opened_on date,
    closed_on date,
    created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE bank_signatories (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    bank_account_id uuid NOT NULL REFERENCES bank_accounts(id),
    member_id uuid NOT NULL REFERENCES members(id),
    valid_from date NOT NULL,
    valid_to date,
    CHECK (valid_to IS NULL OR valid_to >= valid_from),
    UNIQUE (bank_account_id, member_id, valid_from)
);

CREATE TABLE contribution_types (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    code varchar(40) NOT NULL UNIQUE,
    name varchar(100) NOT NULL,
    kind contribution_kind NOT NULL,
    is_refundable boolean NOT NULL DEFAULT false,
    is_active boolean NOT NULL DEFAULT true
);

CREATE TABLE contributions (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    member_id uuid REFERENCES members(id),
    organisation_id uuid NOT NULL REFERENCES organisations(id),
    contribution_type_id uuid NOT NULL REFERENCES contribution_types(id),
    amount numeric(18,2) NOT NULL CHECK (amount > 0),
    contribution_date date NOT NULL,
    reference varchar(100),
    notes text,
    recorded_by uuid REFERENCES members(id),
    created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE investment_projects (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    organisation_id uuid NOT NULL REFERENCES organisations(id),
    name varchar(200) NOT NULL,
    description text,
    approved_on date,
    target_amount numeric(18,2),
    status varchar(30) NOT NULL DEFAULT 'PROPOSED'
);

CREATE TABLE member_investments (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    investment_project_id uuid NOT NULL REFERENCES investment_projects(id),
    member_id uuid NOT NULL REFERENCES members(id),
    amount numeric(18,2) NOT NULL CHECK (amount > 0),
    invested_on date NOT NULL,
    reference varchar(100),
    created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE chart_of_accounts (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    organisation_id uuid NOT NULL REFERENCES organisations(id),
    account_code varchar(30) NOT NULL,
    account_name varchar(150) NOT NULL,
    class account_class NOT NULL,
    parent_account_id uuid REFERENCES chart_of_accounts(id),
    is_control_account boolean NOT NULL DEFAULT false,
    is_active boolean NOT NULL DEFAULT true,
    UNIQUE (organisation_id, account_code)
);

CREATE TABLE journal_entries (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    organisation_id uuid NOT NULL REFERENCES organisations(id),
    journal_number varchar(40) NOT NULL,
    journal_date date NOT NULL,
    description text NOT NULL,
    status journal_status NOT NULL DEFAULT 'DRAFT',
    source_type varchar(50),
    source_id uuid,
    created_by uuid REFERENCES members(id),
    posted_by uuid REFERENCES members(id),
    posted_at timestamptz,
    reversed_entry_id uuid REFERENCES journal_entries(id),
    created_at timestamptz NOT NULL DEFAULT now(),
    UNIQUE (organisation_id, journal_number)
);

CREATE TABLE journal_lines (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    journal_entry_id uuid NOT NULL REFERENCES journal_entries(id) ON DELETE RESTRICT,
    account_id uuid NOT NULL REFERENCES chart_of_accounts(id),
    description text,
    debit numeric(18,2) NOT NULL DEFAULT 0 CHECK (debit >= 0),
    credit numeric(18,2) NOT NULL DEFAULT 0 CHECK (credit >= 0),
    CHECK ((debit > 0 AND credit = 0) OR (credit > 0 AND debit = 0))
);

CREATE TABLE approval_requests (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    organisation_id uuid NOT NULL REFERENCES organisations(id),
    request_type varchar(60) NOT NULL,
    source_table varchar(60) NOT NULL,
    source_id uuid NOT NULL,
    requested_by uuid NOT NULL REFERENCES members(id),
    status transaction_status NOT NULL DEFAULT 'PENDING_APPROVAL',
    required_approvals integer NOT NULL DEFAULT 2 CHECK (required_approvals > 0),
    submitted_at timestamptz NOT NULL DEFAULT now(),
    resolved_at timestamptz
);

CREATE TABLE approval_decisions (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    approval_request_id uuid NOT NULL REFERENCES approval_requests(id),
    approver_member_id uuid NOT NULL REFERENCES members(id),
    decision varchar(20) NOT NULL CHECK (decision IN ('APPROVE','REJECT')),
    comments text,
    decided_at timestamptz NOT NULL DEFAULT now(),
    UNIQUE (approval_request_id, approver_member_id)
);

CREATE TABLE loans (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    organisation_id uuid NOT NULL REFERENCES organisations(id),
    borrower_member_id uuid NOT NULL REFERENCES members(id),
    principal numeric(18,2) NOT NULL CHECK (principal > 0),
    interest_rate numeric(6,4) NOT NULL DEFAULT 0.10,
    interest_amount numeric(18,2) NOT NULL,
    penalty_rate numeric(6,4) NOT NULL DEFAULT 0.05,
    penalty_basis varchar(30) NOT NULL DEFAULT 'ORIGINAL_PRINCIPAL',
    penalty_frequency varchar(20) NOT NULL DEFAULT 'MONTHLY',
    issued_on date NOT NULL,
    due_on date NOT NULL,
    status loan_status NOT NULL DEFAULT 'PENDING',
    approved_by uuid REFERENCES members(id),
    disbursed_by uuid REFERENCES members(id),
    created_at timestamptz NOT NULL DEFAULT now(),
    CHECK (due_on >= issued_on)
);

CREATE TABLE loan_penalty_charges (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    loan_id uuid NOT NULL REFERENCES loans(id),
    charge_period_start date NOT NULL,
    charge_period_end date NOT NULL,
    basis_amount numeric(18,2) NOT NULL,
    rate numeric(6,4) NOT NULL DEFAULT 0.05,
    charge_amount numeric(18,2) NOT NULL CHECK (charge_amount >= 0),
    charged_on date NOT NULL,
    UNIQUE (loan_id, charge_period_start)
);

CREATE TABLE loan_repayments (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    loan_id uuid NOT NULL REFERENCES loans(id),
    amount numeric(18,2) NOT NULL CHECK (amount > 0),
    paid_on date NOT NULL,
    reference varchar(100),
    recorded_by uuid REFERENCES members(id)
);

CREATE TABLE loan_repayment_allocations (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    repayment_id uuid NOT NULL REFERENCES loan_repayments(id),
    component varchar(20) NOT NULL CHECK (component IN ('PRINCIPAL','INTEREST','PENALTY')),
    amount numeric(18,2) NOT NULL CHECK (amount >= 0)
);

CREATE TABLE welfare_events (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    event_type varchar(30) NOT NULL CHECK (event_type IN ('PARENT_DEATH','SPOUSE_DEATH','CHILD_DEATH','BABY_SHOWER','BIRTHDAY','OTHER')),
    beneficiary_member_id uuid NOT NULL REFERENCES members(id),
    event_date date NOT NULL,
    approved_by uuid REFERENCES members(id),
    notes text
);

CREATE TABLE welfare_contributions (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    welfare_event_id uuid NOT NULL REFERENCES welfare_events(id),
    contributing_member_id uuid NOT NULL REFERENCES members(id),
    amount numeric(18,2) NOT NULL CHECK (amount > 0),
    paid_on date,
    UNIQUE (welfare_event_id, contributing_member_id)
);

CREATE TABLE employees (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    organisation_id uuid NOT NULL REFERENCES organisations(id),
    full_name varchar(200) NOT NULL,
    job_title varchar(120),
    phone varchar(30),
    employment_start date,
    employment_end date,
    base_monthly_net_salary numeric(18,2) NOT NULL DEFAULT 15000 CHECK (base_monthly_net_salary >= 0),
    is_active boolean NOT NULL DEFAULT true
);

CREATE TABLE payroll_runs (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    organisation_id uuid NOT NULL REFERENCES organisations(id),
    period_start date NOT NULL,
    period_end date NOT NULL,
    status varchar(20) NOT NULL DEFAULT 'DRAFT',
    approved_by uuid REFERENCES members(id),
    CHECK (period_end >= period_start)
);

CREATE TABLE payroll_items (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    payroll_run_id uuid NOT NULL REFERENCES payroll_runs(id),
    employee_id uuid REFERENCES employees(id),
    member_id uuid REFERENCES members(id),
    gross_amount numeric(18,2) NOT NULL DEFAULT 0,
    deductions numeric(18,2) NOT NULL DEFAULT 0,
    net_amount numeric(18,2) NOT NULL CHECK (net_amount >= 0),
    CHECK ((employee_id IS NOT NULL)::integer + (member_id IS NOT NULL)::integer = 1)
);

CREATE TABLE suppliers (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    organisation_id uuid NOT NULL REFERENCES organisations(id),
    name varchar(200) NOT NULL,
    phone varchar(30),
    email varchar(254),
    address text,
    is_active boolean NOT NULL DEFAULT true
);

CREATE TABLE customers (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    organisation_id uuid NOT NULL REFERENCES organisations(id),
    name varchar(200) NOT NULL,
    phone varchar(30),
    email varchar(254),
    address text,
    is_active boolean NOT NULL DEFAULT true
);

CREATE TABLE products (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    organisation_id uuid NOT NULL REFERENCES organisations(id),
    sku varchar(60),
    name varchar(200) NOT NULL,
    description text,
    unit_of_measure varchar(30) NOT NULL DEFAULT 'unit',
    selling_price numeric(18,2) NOT NULL DEFAULT 0 CHECK (selling_price >= 0),
    is_active boolean NOT NULL DEFAULT true,
    UNIQUE (organisation_id, sku)
);

CREATE TABLE inventory_locations (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    organisation_id uuid NOT NULL REFERENCES organisations(id),
    name varchar(120) NOT NULL,
    address text,
    UNIQUE (organisation_id, name)
);

CREATE TABLE stock_movements (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    organisation_id uuid NOT NULL REFERENCES organisations(id),
    product_id uuid NOT NULL REFERENCES products(id),
    inventory_location_id uuid NOT NULL REFERENCES inventory_locations(id),
    movement_kind stock_movement_kind NOT NULL,
    quantity numeric(18,3) NOT NULL CHECK (quantity > 0),
    unit_cost numeric(18,2) CHECK (unit_cost >= 0),
    movement_date timestamptz NOT NULL DEFAULT now(),
    reference varchar(100),
    notes text,
    recorded_by uuid REFERENCES members(id)
);

CREATE TABLE sales (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    organisation_id uuid NOT NULL REFERENCES organisations(id),
    customer_id uuid REFERENCES customers(id),
    invoice_number varchar(50) NOT NULL,
    sale_date date NOT NULL,
    subtotal numeric(18,2) NOT NULL CHECK (subtotal >= 0),
    discount numeric(18,2) NOT NULL DEFAULT 0 CHECK (discount >= 0),
    total_amount numeric(18,2) NOT NULL CHECK (total_amount >= 0),
    amount_paid numeric(18,2) NOT NULL DEFAULT 0 CHECK (amount_paid >= 0),
    status varchar(20) NOT NULL DEFAULT 'UNPAID',
    UNIQUE (organisation_id, invoice_number)
);

CREATE TABLE sale_items (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    sale_id uuid NOT NULL REFERENCES sales(id),
    product_id uuid NOT NULL REFERENCES products(id),
    quantity numeric(18,3) NOT NULL CHECK (quantity > 0),
    unit_price numeric(18,2) NOT NULL CHECK (unit_price >= 0),
    line_total numeric(18,2) NOT NULL CHECK (line_total >= 0)
);

CREATE TABLE purchases (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    organisation_id uuid NOT NULL REFERENCES organisations(id),
    supplier_id uuid REFERENCES suppliers(id),
    purchase_number varchar(50) NOT NULL,
    purchase_date date NOT NULL,
    total_amount numeric(18,2) NOT NULL CHECK (total_amount >= 0),
    amount_paid numeric(18,2) NOT NULL DEFAULT 0 CHECK (amount_paid >= 0),
    status varchar(20) NOT NULL DEFAULT 'UNPAID',
    UNIQUE (organisation_id, purchase_number)
);

CREATE TABLE expenses (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    organisation_id uuid NOT NULL REFERENCES organisations(id),
    expense_date date NOT NULL,
    category varchar(80) NOT NULL,
    description text NOT NULL,
    amount numeric(18,2) NOT NULL CHECK (amount > 0),
    supplier_id uuid REFERENCES suppliers(id),
    reference varchar(100),
    recorded_by uuid REFERENCES members(id)
);

CREATE TABLE assets (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    organisation_id uuid NOT NULL REFERENCES organisations(id),
    asset_code varchar(50) NOT NULL,
    name varchar(200) NOT NULL,
    category varchar(80),
    acquired_on date,
    acquisition_cost numeric(18,2) NOT NULL CHECK (acquisition_cost >= 0),
    location text,
    status varchar(30) NOT NULL DEFAULT 'ACTIVE',
    UNIQUE (organisation_id, asset_code)
);

CREATE TABLE liabilities (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    organisation_id uuid NOT NULL REFERENCES organisations(id),
    creditor_name varchar(200) NOT NULL,
    description text NOT NULL,
    original_amount numeric(18,2) NOT NULL CHECK (original_amount >= 0),
    outstanding_amount numeric(18,2) NOT NULL CHECK (outstanding_amount >= 0),
    incurred_on date,
    due_on date
);

CREATE TABLE meetings (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    organisation_id uuid NOT NULL REFERENCES organisations(id),
    meeting_type varchar(30) NOT NULL,
    scheduled_at timestamptz NOT NULL,
    location_or_link text,
    agenda text,
    minutes text,
    recorded_by uuid REFERENCES members(id)
);

CREATE TABLE resolutions (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    meeting_id uuid NOT NULL REFERENCES meetings(id),
    title varchar(200) NOT NULL,
    description text NOT NULL,
    voting_threshold numeric(5,2),
    votes_for integer NOT NULL DEFAULT 0,
    votes_against integer NOT NULL DEFAULT 0,
    abstentions integer NOT NULL DEFAULT 0,
    outcome varchar(20) NOT NULL DEFAULT 'PENDING'
);

CREATE TABLE votes (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    resolution_id uuid NOT NULL REFERENCES resolutions(id),
    member_id uuid NOT NULL REFERENCES members(id),
    vote varchar(10) NOT NULL CHECK (vote IN ('FOR','AGAINST','ABSTAIN')),
    cast_at timestamptz NOT NULL DEFAULT now(),
    UNIQUE (resolution_id, member_id)
);

CREATE TABLE audit_logs (
    id bigserial PRIMARY KEY,
    organisation_id uuid REFERENCES organisations(id),
    actor_user_id uuid REFERENCES users(id),
    action varchar(80) NOT NULL,
    entity_type varchar(80) NOT NULL,
    entity_id uuid,
    before_data jsonb,
    after_data jsonb,
    occurred_at timestamptz NOT NULL DEFAULT now(),
    ip_address inet
);

CREATE INDEX idx_role_assignments_member ON role_assignments(member_id);
CREATE INDEX idx_contributions_member_date ON contributions(member_id, contribution_date);
CREATE INDEX idx_journals_org_date ON journal_entries(organisation_id, journal_date);
CREATE INDEX idx_loans_borrower_status ON loans(borrower_member_id, status);
CREATE INDEX idx_stock_movements_product_date ON stock_movements(product_id, movement_date);
CREATE INDEX idx_audit_logs_org_time ON audit_logs(organisation_id, occurred_at);

-- IMPORTANT: journal posting must be performed only through a controlled function
-- that validates total debits = total credits and prevents edits after posting.
-- RLS policies, cross-organisation consistency triggers, and posting functions
-- are intentionally scheduled for the security/accounting hardening migration.
