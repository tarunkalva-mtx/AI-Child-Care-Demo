/*
================================================================================
CHECKPOINT V1 - ARCHIVED STATE
Date: Current
Description: Previous configuration of Data Elements, File Structure, and Pain Points
before refactoring for Sales/Storytelling focus.
================================================================================

--- PREVIOUS CONSTANTS.TS CONTENT ---

export const DATA_ELEMENTS: DataElement[] = [
  // Family Section
  { id: '1', name: 'Month/Year of Report', fieldSize: 6, required: 'Always', type: 'YYYYMM', description: 'Reporting period.', section: SectionType.FAMILY },
  { id: '2', name: 'Unique State Identifier', fieldSize: 15, required: 'Always', type: 'Alphanumeric', description: 'Uniquely identifies the family over time.', section: SectionType.FAMILY },
  { id: '4', name: 'FIPS Code', fieldSize: 5, required: 'Always', type: 'Numeric', description: 'County FIPS code for Head of Household.', section: SectionType.FAMILY },
  { id: '5', name: 'Single Parent', fieldSize: 1, required: 'Always', type: '0/1/9', description: 'Single status of head of family.', section: SectionType.FAMILY },
  { id: '6', name: 'Reason for Receiving Care', fieldSize: 1, required: 'Always', type: '1-9', description: 'Primary reason for subsidy (Employment, Training, Protective Services, etc.).', section: SectionType.FAMILY },
  { id: '7', name: 'Total Monthly Copayment', fieldSize: 4, required: 'Conditional', type: 'Numeric', description: 'Amount family pays. Max $2000.', section: SectionType.FAMILY },
  { id: '9', name: 'Total Monthly Income', fieldSize: 5, required: 'Conditional', type: 'Numeric', description: 'Income for eligibility determination.', section: SectionType.FAMILY },
  { id: '16', name: 'Family Size', fieldSize: 2, required: 'Always', type: 'Numeric', description: 'Number of people in the eligible family.', section: SectionType.FAMILY },
  // ... (Child, Setting, Provider sections omitted for brevity but were present)
];

export const PAIN_POINTS: PainPoint[] = [
  // --- BUSINESS PAIN POINTS ---
  {
    id: 'bp1',
    title: 'Federal Funding at Risk (Compliance)',
    problem: 'Incorrect data formatting or missing mandatory fields (like the new Race/Ethnicity logic) leads to ACF-801 file rejection.',
    impact: 'Non-compliance puts millions in CCDF block grant funding at risk.',
    solution: 'Implement real-time pre-validation logic.',
    category: 'Business',
    priority: 'Critical'
  },
  {
    id: 'bp2',
    title: 'High Operational Costs (Manual Fixes)',
    problem: 'Staff spend hundreds of hours manually correcting "Error Reports".',
    impact: 'Drains caseworker resources from direct service delivery.',
    solution: 'Automated data transformation pipelines (ETL).',
    category: 'Business',
    priority: 'High'
  },
  // ... (Technical pain points omitted)
];

--- PREVIOUS DASHBOARD CONCEPTS ---
- Focused heavily on "Documentation Hub"
- "Legacy vs Modernization" was a static table
- Layout was: Definition -> Hero -> Impact Table -> Tech Specs
*/

export const CHECKPOINT_VERSION = '1.0';
