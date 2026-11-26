
SELECT
    (SELECT COUNT(*)
     FROM organisations
     WHERE kind = 'PARENT') AS parent_organisations,

    (SELECT COUNT(*)
     FROM members
     WHERE is_original_founder = TRUE) AS original_founders,

    (SELECT COUNT(*)
     FROM founding_interests) AS founding_interests,

    (SELECT COUNT(*)
     FROM organisations
     WHERE kind = 'VENTURE') AS ventures;
