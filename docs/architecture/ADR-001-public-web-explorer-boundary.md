# ADR-001: Static Public Web Explorer Boundary

> **Status:** Accepted for the public repository  
> **Date:** 2026-10-06  
> **Scope:** Public publication architecture only  
> **Canon effect:** None

## Context

The project needs a navigable public view before the planned Project Observatory is eligible to begin. The Observatory is gated until **Universe Foundation → Book 1 Readiness exceeds 50%** and is intended to use a sanitized public data layer. Private Google Drive records must not be mirrored automatically or treated as subordinate to GitHub.

## Decision

Use a static GitHub Pages Web Explorer that restates only information already cleared in public repository files.

- `docs/assets/site-data.js` is the single structured update point.
- Every value must be traceable to a public repository source.
- The site has no live private-data connection.
- Monthly releases synchronize the dated report and site data.
- The Explorer is labeled non-canon and non-authoritative.
- Live databases, per-task data, internal registers, and dependency graphs remain outside this boundary.

## Consequences

### Benefits

- Provides a coherent public entry point without crossing the Observatory gate.
- Keeps reviewable public data in version control.
- Makes disclosure drift and stale data detectable through ordinary repository review.
- Preserves Google Drive as the authoritative source.

### Costs and Constraints

- The snapshot can become stale between releases.
- Public values require deliberate manual synchronization.
- The Explorer cannot offer live project-state or private-record drill-down.
- Publication controls must cover both Markdown and site data.

## Verification

The decision is verified through:

- [requirements traceability](../requirements/PUBLIC_WEB_EXPLORER_TRACEABILITY.md);
- [risk and reliability controls](../risk-and-reliability/PUBLIC_WEB_EXPLORER_RISK_REGISTER.md);
- [v1.2 verification baseline](../verification/PUBLIC_WEB_EXPLORER_V1.2_VERIFICATION_BASELINE.md);
- the [public release checklist](../../templates/PUBLIC_RELEASE_CHECKLIST.md).

## Supersession

A future ADR may supersede this boundary only after the private readiness gate is satisfied and a separately approved sanitized data architecture is ready. Supersession must not create automatic access to private Drive records.
