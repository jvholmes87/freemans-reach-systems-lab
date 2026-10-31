# Public Web Explorer Requirements Traceability

> **Status:** Public / Non-Authoritative  
> **Baseline date:** 2026-10-31  
> **Purpose:** Trace the static public publication system to reviewable repository evidence. These are publication requirements, not fictional-universe requirements.

| ID | Requirement | Implementation evidence | Verification | Status |
| --- | --- | --- | --- | --- |
| PWE-001 | The Explorer shall identify itself as non-canon and non-authoritative. | `README.md`; `docs/index.html` | Inspect labels and authority statement. | Verified in source |
| PWE-002 | Every structured site value shall already exist in a cleared public repository source. | `docs/assets/site-data.js` source fields | Compare values with README, roadmap, change log, and monthly report. | Verified in source |
| PWE-003 | The Explorer shall not connect to or automatically mirror private project records. | ADR-001; static assets under `docs/` | Inspect source for private links, credentials, APIs, and database clients. | Verified in source |
| PWE-004 | The public site shall remain distinct from the gated Project Observatory. | `README.md`; ADR-001; trade study | Confirm gate and distinction are stated. | Verified in source |
| PWE-005 | Status data shall include an effective date and a link to the supporting monthly report. | `docs/assets/site-data.js` | Inspect `status.asOf` and `reportHref`. | Verified in source |
| PWE-006 | Monthly publication shall synchronize the report, site data, navigation, and change log when values change. | release checklist; updates index | Complete release checklist and review changed files. | Verified for 2026-10 release |
| PWE-007 | Public artifacts shall exclude private links, internal handoffs, restricted research, personal information, client-sensitive material, spoilers, and unapproved canon. | release checklist; monthly report | Disclosure review and text search before release. | Verified for 2026-10 release |
| PWE-008 | Stable public paths shall not be renamed without a documented reason and migration plan. | repository map; change log | Compare path changes and review ADR/change entry. | No renames in this baseline |
| PWE-009 | The Explorer shall remain usable as a static GitHub Pages site without a private backend. | `docs/index.html`; `docs/assets/` | Inspect relative assets and absence of backend dependencies. | Verified in source |
| PWE-010 | Live-site verification shall be recorded separately from source verification. | verification baseline | Record date, environment, results, and exceptions. | Source verified; live re-check pending |

## Traceability Maintenance

Update this matrix when a requirement, public data source, site architecture, or verification method changes. A status of “verified in source” does not imply independent validation of private project facts or guarantee live-host availability.
