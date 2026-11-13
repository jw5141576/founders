-- Seed data: parent organisation, founding members and baseline founding interests.
INSERT INTO organisations (code, legal_name, trading_name, kind, status)
VALUES ('FOUNDERS', 'The Founders', 'The Founders', 'PARENT', 'ACTIVE')
ON CONFLICT (code) DO NOTHING;

INSERT INTO members (full_name, status, joined_on, is_original_founder)
VALUES
('David Ojwang', 'ACTIVE', CURRENT_DATE, true),
('Jeremy Ouko', 'ACTIVE', CURRENT_DATE, true),
('Phoebe Okulu', 'ACTIVE', CURRENT_DATE, true),
('Agnes Mumbua', 'ACTIVE', CURRENT_DATE, true),
('Brian Bobbi', 'ACTIVE', CURRENT_DATE, true),
('Cecilia Otunga', 'ACTIVE', CURRENT_DATE, true),
('Gloria Jepto', 'ACTIVE', CURRENT_DATE, true),
('Hanningtone Vati', 'ACTIVE', CURRENT_DATE, true),
('Jessica Abwacho', 'ACTIVE', CURRENT_DATE, true),
('Victor Ochieng', 'ACTIVE', CURRENT_DATE, true),
('Wycliffe Dimba', 'ACTIVE', CURRENT_DATE, true)
ON CONFLICT DO NOTHING;

-- Equal units; 9.10% is the display convention only. The underlying ownership unit is 1 of 11.
INSERT INTO founding_interests (member_id, parent_organisation_id, ownership_units, display_percentage, effective_from)
SELECT m.id, o.id, 1, 9.10, CURRENT_DATE
FROM members m CROSS JOIN organisations o
WHERE o.code = 'FOUNDERS' AND m.is_original_founder = true
ON CONFLICT (member_id) DO NOTHING;

INSERT INTO organisations (parent_organisation_id, code, legal_name, trading_name, kind, status)
SELECT id, 'VICTORIA-FRESH', 'Victoria Fresh', 'Victoria Fresh', 'VENTURE', 'PLANNED'
FROM organisations WHERE code = 'FOUNDERS'
ON CONFLICT (code) DO NOTHING;

INSERT INTO organisations (parent_organisation_id, code, legal_name, trading_name, kind, status)
SELECT id, 'FRESH-HARVEST', 'Fresh Harvest', 'Fresh Harvest', 'VENTURE', 'PLANNED'
FROM organisations WHERE code = 'FOUNDERS'
ON CONFLICT (code) DO NOTHING;

INSERT INTO venture_profiles (organisation_id, project_code, life_stage)
SELECT id, 'VF-001', 'EARLY' FROM organisations WHERE code = 'VICTORIA-FRESH'
ON CONFLICT (organisation_id) DO NOTHING;
INSERT INTO venture_profiles (organisation_id, project_code, life_stage)
SELECT id, 'FH-001', 'EARLY' FROM organisations WHERE code = 'FRESH-HARVEST'
ON CONFLICT (organisation_id) DO NOTHING;