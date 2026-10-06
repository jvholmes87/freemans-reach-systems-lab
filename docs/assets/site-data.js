'use strict';
/*
  Freeman's Reach — public site data (single update point).
  RULE: every value here must already be public in the GitHub repository
  (README.md, ROADMAP.md, CHANGELOG.md, docs/updates/). The site restates;
  it never originates. Google Drive remains authoritative.
  Monthly procedure: after a monthly report merges, update `status` and
  append to `milestones`, then open one PR.
  This is a static, dated snapshot. It is NOT the Project Observatory
  (live data / database / per-system maturity), which stays gated until
  Universe Foundation -> Book 1 Readiness exceeds 50%.
*/
window.FR_SITE = {
  synopsis: {
    source: 'README.md — Project Identity; Technology & Civilization Coverage; ROADMAP.md',
    paragraphs: [
      'Freeman’s Reach is a hard-science-fiction universe. Its foundational premise follows a formerly enslaved Black American scientist whose scientific and technological ambition becomes literal interstellar reach when an experimental event displaces his community across space.',
      'The destination is the real exoplanet modern astronomy identifies as Proxima Centauri b. That designation is an external reference only; it does not automatically become the transported population’s own name for their world.',
      'Two speculative technologies anchor the setting: the Resonant Field Generator (RFG), the core field-generation technology, and Mass Anchor Relocation (MAR), an advanced capability derived from it. Neither is treated as unlimited, perfectly reliable, or consequence-free.',
      'From there, the universe is built as a civilization: energy, industry, transportation, medicine, institutions, and history, each constrained by real science and engineering, so later stories in any medium stay consistent.'
    ],
    established: [
      'The series title: Freeman’s Reach is the universe title, not the in-universe name of the civilization, city, planet, or people',
      'The foundational premise: a scientist’s ambition and an experimental event that displaces his community across space',
      'The destination: Proxima Centauri b, as an external astronomical reference',
      'Definition-level baselines for the Resonant Field Generator (RFG) and Mass Anchor Relocation (MAR)',
      'The Expansion Event and FRS Lattimore as established project names'
    ],
    inDevelopment: [
      'The founder’s exact identity and biography',
      'Historical chronology',
      'Settlement, city, and political names',
      'The planet’s in-universe name and the population’s self-name',
      'Detailed RFG/MAR performance values and deeper speculative physics'
    ]
  },

  status: {
    asOf: '2026-09-30',
    source: 'docs/updates/2026/2026-09.md; README.md — Development Status Snapshot',
    reportHref: 'https://github.com/jvholmes87/freemans-reach-systems-lab/blob/main/docs/updates/2026/2026-09.md',
    metric: 'Universe Foundation → Book 1 Readiness',
    value: 32.8,
    phase: 'Foundation and canon control',
    markers: [
      { value: 25.2, label: 'Prior baseline' },
      { value: 27.8, label: 'Sep 10' },
      { value: 32.8, label: 'Sep 30' }
    ],
    gate: { value: 50, label: 'Project Observatory gate' },
    stats: [
      { value: '16', label: 'Approved canon entries' },
      { value: '2', label: 'Definition-level system baselines' },
      { value: '15', label: 'Technology domains mapped' },
      { value: '5', label: 'Readiness work items completed' },
      { value: '11', label: 'Open or researching questions' }
    ],
    caption: 'The readiness measure is a project-management indicator. It is not manuscript completion, canon volume, technical validation, or public-release readiness.'
  },

  milestones: [
    { date: '2026-09-03', title: 'Public repository launched', text: 'Public/private authority boundary established.' },
    { date: '2026-09-04', title: 'Codex, change log, and roadmap', text: 'Project Codex, public change log, and Now / Next / Later roadmap published.' },
    { date: '2026-09-05', title: 'Universe architecture expanded', text: 'Franchise benchmark, writer-sandbox architecture, and controlled visual-development pipeline established.' },
    { date: '2026-09-10', title: 'Drift audit passed', text: 'Technology-domain roadmap reached working review. Readiness 27.8%.' },
    { date: '2026-09-26', title: 'Readiness 32.8%', text: '+5.0 percentage points since the September 10 snapshot.' },
    { date: '2026-09-30', title: 'First monthly report', text: 'September report and reusable public systems-engineering templates published.' },
    { date: '2026-10-06', title: 'Research review and public explorer', text: 'Astronomy, historical-context, and character research advanced to review stage. Public Web Explorer launched.' }
  ],

  roadmap: {
    source: 'ROADMAP.md',
    note: 'Non-binding and dependency-driven. Items move as research, dependencies, or architecture decisions change.',
    columns: [
      { stage: 'Now', groups: [
        { heading: 'Foundation, canon control & systems architecture', points: [
          'Maintain the approved definition-level RFG and MAR foundations while deferring unsupported performance claims',
          'Develop the civilization-scale energy architecture that constrains infrastructure, industry, and transport',
          'Establish controlled nomenclature, lineage, and legacy naming'
        ]},
        { heading: 'Authorship, provenance & public development', points: [
          'Build a formal human-authorship, AI-assistance, and publication-integrity framework before manuscript submission',
          'Publish monthly development reports subordinate to private authoritative records',
          'Prepare future public systems-engineering artifacts without exposing private records'
        ]}
      ]},
      { stage: 'Next', groups: [
        { heading: 'Founding community, history & identity', points: [
          'Develop the pre-Event origin community in greater detail',
          'Establish the transported settlement’s location, population, skill base, and industrial capacity',
          'Build the historical timeline through the Expansion Event and the founding post-Event city'
        ]},
        { heading: 'Character, civilization & celestial architecture', points: [
          'Build a character and institutional-lineage framework across generations',
          'Define the primary polity, institutions, and settlements',
          'Develop celestial geography from real astronomy, with in-universe names controlled separately'
        ]},
        { heading: 'Major system architectures', points: [
          'Integrate energy, infrastructure, manufacturing, transport, communications, habitats, medicine, and logistics',
          'Define interfaces between major systems before optimizing subsystems',
          'Build failure-mode, reliability, maintenance, and verification requirements into each architecture'
        ]},
        { heading: 'Public systems-engineering artifacts', points: [
          'System context, requirements-hierarchy, and interface diagrams',
          'Trade studies and risk / failure-mode analyses',
          'Verification and validation frameworks'
        ]}
      ]},
      { stage: 'Later', groups: [
        { heading: 'Civilization-scale integration', points: [
          'Integrate all major systems into a coherent system of systems',
          'Model long-term population, industrial, and settlement growth',
          'Develop orbital, planetary, ship, station, and interstellar infrastructure'
        ]},
        { heading: 'Public universe release & community', points: [
          'Launch the Project Observatory after readiness exceeds 50%',
          'Release a sanitized public universe package and selected systems artifacts',
          'Open community channels without letting public comments become canon'
        ]},
        { heading: 'Narrative architecture', points: [
          'Develop Book 1 strategic and chapter architecture',
          'Begin the manuscript only after universe-readiness, systems, provenance, and canon gates are met'
        ]},
        { heading: 'Academic & professional development', points: [
          'Public case studies applying systems engineering to fictional civilizations',
          'Explore Model-Based Systems Engineering (MBSE) and human–AI collaborative workflows as research topics'
        ]}
      ]}
    ]
  }
};
