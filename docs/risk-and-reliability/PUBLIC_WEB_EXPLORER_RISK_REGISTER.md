# Public Web Explorer Risk and Reliability Register

> **Status:** Public / Non-Authoritative  
> **Baseline date:** 2026-10-31  
> This register covers the public publication layer, not private fictional-universe hazards.

| ID | Risk / failure mode | Cause | Public effect | Control | Residual assessment |
| --- | --- | --- | --- | --- | --- |
| PWR-001 | Status snapshot becomes stale | Monthly report and site data are not synchronized | Visitors see an old date or value | Single data file, dated status, release-checklist synchronization | Medium |
| PWR-002 | GitHub is mistaken for the authority | Authority label is absent or unclear | Public artifacts are treated as canon or current private truth | Repeated non-authoritative labels and authority statements | Low |
| PWR-003 | Disclosure drift | A private detail is copied into public text or data | Spoiler, canon, privacy, or research-boundary breach | Public release checklist, least-disclosure rule, traceability review | Medium |
| PWR-004 | Public value has no evidence trail | Site data is changed without a repository source | Unsupported public claim | Source fields and requirements matrix | Low |
| PWR-005 | Static asset or path breaks | Relative path, case, or stable path changes | Explorer fails to load or link | Stable paths, source inspection, recorded verification | Medium |
| PWR-006 | Live-site behavior diverges from source review | Hosting, cache, or browser behavior differs | Source appears correct but deployed site is degraded | Separate live verification and exception record | Medium |
| PWR-007 | Accessibility or readability regresses | Content or style changes are not reviewed | Some visitors cannot use the site effectively | Semantic source review and future browser/accessibility checks | Medium |
| PWR-008 | Third-party rights are unclear | Unreviewed image, text, font, or dataset is added | Rights or attribution problem | Rights review in release checklist; prefer repository-owned assets | Low |
| PWR-009 | Observatory boundary erodes | Live services or private-derived data are added incrementally | Gate circumvention and expanded attack/disclosure surface | ADR-001, >50% gate, new ADR required for supersession | Low |

## Reliability Rules

1. Prefer graceful omission over publishing an uncertain value.
2. Keep the static Explorer functional without a private backend.
3. Record source verification and live verification separately.
4. Treat a broken or ambiguous authority label as a release blocker.
5. Reassess risks after any hosting, data-source, navigation, or rights change.
