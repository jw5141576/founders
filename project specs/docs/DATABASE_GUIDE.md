# Database guide

## Requirements
- PostgreSQL 15 or newer
- A dedicated development database
- A migration runner (Prisma Migrate is the selected application workflow)

## Apply the baseline
Run the SQL files in order using pgAdmin Query Tool or `psql`:
1. `database/migrations/001_initial_schema.sql`
2. `database/seed/001_founders_seed.sql`

Example:
```bash
createdb the_founders_dev
psql -d the_founders_dev -f database/migrations/001_initial_schema.sql
psql -d the_founders_dev -f database/seed/001_founders_seed.sql
```

## Important
The SQL is a starting schema, not a finished production accounting engine. Before production:
- add debit/credit balancing and controlled posting functions;
- prevent updates/deletes to posted journal entries;
- implement row-level security and organisation-scope checks;
- add approval workflow enforcement and audit triggers;
- validate all policy rules against the final signed documents;
- add tests and backup/restore procedures.

The seed includes the eleven names listed in the supplied Specific Venture Annexure and two planned venture workspaces. Verify spelling and consent before using real member data in a live system.
