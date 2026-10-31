# Trade Study: Static Snapshot versus Project Observatory

> **Status:** Public decision-support record  
> **Decision date:** 2026-10-06  
> **Canon effect:** None

## Decision Question

How should already-cleared public project information be presented before the Project Observatory readiness gate is satisfied?

## Evaluation Criteria

| Criterion | Weight | Meaning |
| --- | ---: | --- |
| Authority-boundary safety | 5 | Avoids private-source mirroring and source-of-truth confusion |
| Gate compliance | 5 | Preserves the approved >50% Observatory threshold |
| Disclosure reviewability | 4 | Keeps public claims easy to inspect before release |
| Maintenance burden | 3 | Limits new operational work during foundation development |
| Public usefulness | 3 | Improves navigation and status understanding |
| Future migration | 2 | Can evolve without destructive public-path changes |

Scores use a 1–5 scale, where 5 is most favorable. Weighted totals are comparative decision support, not performance claims.

| Alternative | Safety | Gate | Review | Burden | Usefulness | Migration | Weighted total |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| A. Static snapshot from cleared repository data | 5 | 5 | 5 | 4 | 4 | 4 | **102** |
| B. Defer all Explorer work | 5 | 5 | 5 | 5 | 1 | 3 | 91 |
| C. Build the live Observatory early | 2 | 1 | 2 | 1 | 5 | 5 | 51 |

## Decision

Select **Alternative A**. Publish a static, dated Explorer from public repository data while the Observatory remains gated.

## Rationale

Alternative A provides useful navigation without introducing a live public database, private-record synchronization, or premature Observatory maintenance. Alternative B is safe but misses a low-risk opportunity to improve access to information already public. Alternative C conflicts with the readiness gate and creates the highest disclosure and maintenance risk.

## Conditions

- Google Drive remains authoritative.
- The Explorer originates no project facts.
- Monthly release work synchronizes the site snapshot.
- No private API, live register, or per-task private detail is exposed.
- Reconsideration requires a new decision record after readiness exceeds 50%.
