import { DataElement, SectionType, FileSegment, PainPoint, Persona } from './types';
import { User, Server, ShieldAlert } from 'lucide-react';

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
  
  // Child Section
  { id: '18', name: 'Hispanic or Latino', fieldSize: 1, required: 'Always', type: '0/1/9', description: 'Ethnicity of child.', section: SectionType.CHILD },
  { id: '19-23', name: 'Race Data', fieldSize: 1, required: 'Always', type: '0/1/9', description: 'American Indian, Asian, Black, Pacific Islander, White.', section: SectionType.CHILD },
  { id: '24', name: 'Sex', fieldSize: 1, required: 'Always', type: '1/2/9', description: 'Gender of the child.', section: SectionType.CHILD },
  { id: '25', name: 'Date of Birth', fieldSize: 6, required: 'Always', type: 'YYYYMM', description: 'Month/Year of birth.', section: SectionType.CHILD },
  { id: '25a', name: 'Child Disability', fieldSize: 1, required: 'Always', type: '0/1', description: 'IDEA Part B/C or Section 504.', section: SectionType.CHILD },

  // Setting Section
  { id: '26', name: 'Type of Child Care', fieldSize: 2, required: 'Always', type: '01-11', description: 'Setting type (Center, Family Home, In-Home, etc.).', section: SectionType.SETTING },
  { id: '27', name: 'Amount Paid to Provider', fieldSize: 4, required: 'Always', type: 'Numeric', description: 'Max $3000. Total monthly amount paid.', section: SectionType.SETTING },
  { id: '28', name: 'Total Hours of Care', fieldSize: 3, required: 'Always', type: 'Numeric', description: 'Total service hours provided in month.', section: SectionType.SETTING },
  { id: '29', name: 'Provider FEIN', fieldSize: 9, required: 'Conditional', type: 'Numeric', description: 'Tax ID for provider.', section: SectionType.SETTING },
  { id: '30', name: 'Provider State ID', fieldSize: 15, required: 'Conditional', type: 'Alphanumeric', description: 'Unique ID if FEIN not available or not location specific.', section: SectionType.SETTING },

  // Provider Section
  { id: '31', name: 'Provider FEIN', fieldSize: 9, required: 'Conditional', type: 'Numeric', description: 'Provider Record Tax ID.', section: SectionType.PROVIDER },
  { id: '33', name: 'QRIS Participation', fieldSize: 1, required: 'Always', type: '0/1/7-9', description: 'Participation in Quality Rating Improvement System.', section: SectionType.PROVIDER },
  { id: '34', name: 'QRIS Rating', fieldSize: 3, required: 'Always', type: 'Alphanumeric', description: 'Specific rating code.', section: SectionType.PROVIDER },
  { id: '35', name: 'Accreditation Status', fieldSize: 1, required: 'Always', type: '0-4/9', description: 'National or State accreditation.', section: SectionType.PROVIDER },
  { id: '40', name: 'Last Inspection Date', fieldSize: 8, required: 'Always', type: 'MMDDYYYY', description: 'Date of most recent H&S inspection.', section: SectionType.PROVIDER },
];

export const FILE_STRUCTURE: FileSegment[] = [
  { delimiter: 'M', name: 'Monthly Header', description: 'Contains report period and contact info.', color: 'bg-blue-100 border-blue-300' },
  { delimiter: 'F', name: 'Family Record', description: 'Starts with "F". Contains demographics and income.', color: 'bg-green-100 border-green-300' },
  { delimiter: 'C', name: 'Child Record', description: 'Starts with "C". Repeats for each child in family.', color: 'bg-purple-100 border-purple-300' },
  { delimiter: 'S', name: 'Setting Record', description: 'Starts with "S". Repeats for each setting per child.', color: 'bg-orange-100 border-orange-300' },
  { delimiter: '$', name: 'End Family', description: 'Closes the family/child/setting block.', color: 'bg-gray-200 border-gray-400' },
  { delimiter: 'P', name: 'Provider Record', description: 'Starts with "P". Detailed provider quality data.', color: 'bg-indigo-100 border-indigo-300' },
  { delimiter: '&', name: 'End File', description: 'Marks end of submission.', color: 'bg-red-100 border-red-300' },
];

export const PERSONAS: Persona[] = [
  {
    name: "Sarah",
    role: "State Data Specialist",
    icon: User,
    quote: "I spend the last week of every month panicked, manually fixing text files because the 'Date of Birth' formatting was off by one digit.",
    pain: "Operational Burnout & Manual Data Entry",
    goal: "Submit data once, cleanly, and focus on helping families.",
    color: "blue"
  },
  {
    name: "CARS",
    role: "Federal Reporting System",
    icon: Server,
    quote: "I am a strict gatekeeper. If your flat file has a single character out of place, I reject the entire submission.",
    pain: "Inflexible Legacy Standards",
    goal: "Receive 100% compliant, zero-padded, right-justified data.",
    color: "slate"
  }
];

export const PAIN_POINTS: PainPoint[] = [
  // --- BUSINESS PAIN POINTS (Sales Focused) ---
  {
    id: 'bp1',
    title: 'Protecting Federal Grant Eligibility',
    problem: 'One rejection from CARS due to a formatting error (e.g., "Race" field changes) triggers a non-compliance flag.',
    impact: 'At Risk: Millions in CCDF Block Grant Funding. Requires costly "Quality Improvement Plans" to resolve.',
    solution: 'Automated Pre-Validation: Our system acts as a "Local CARS," catching errors before the data ever leaves your state.',
    category: 'Business',
    priority: 'Critical'
  },
  {
    id: 'bp2',
    title: 'Eliminating the "End-of-Month" Crunch',
    problem: 'Staff like Sarah spend ~80 hours/month on manual text file manipulation because legacy systems export dirty data.',
    impact: 'Operational Waste: High overtime costs and employee burnout during reporting weeks.',
    solution: 'One-Click Generation: Transform messy source data into perfect ACF-801 formatting instantly.',
    category: 'Business',
    priority: 'High'
  },
  {
    id: 'bp3',
    title: 'Data-Driven Policy Decisions',
    problem: 'When data is rejected, State Directors are flying blind regarding how many families are actually being served.',
    impact: 'Misallocated Budget: Inability to justify requests for more funding or prove the success of Quality (QRIS) initiatives.',
    solution: 'Real-time Analytics: Dashboards that show service levels *before* the federal report is even filed.',
    category: 'Business',
    priority: 'Medium'
  },

  // --- TECHNICAL PAIN POINTS (Architecture Supporting Sales) ---
  {
    id: 'tp1',
    title: 'Scalability for Full Population Reporting',
    problem: 'Legacy systems crash when generating reports for 50,000+ families due to memory limits (Salesforce Governor Limits).',
    impact: 'Forced Sampling: States submit "Sample" data instead of "Full Population," reducing accuracy.',
    solution: 'Micro-Batching Engine: Processes data in small, safe chunks (200 records) asynchronously. Infinite scalability.',
    category: 'Technical',
    priority: 'Critical'
  },
  {
    id: 'tp2',
    title: 'Handling Complex Family Hierarchies',
    problem: 'Validating rules across Family -> Child -> Setting (e.g., "Child Age vs. Service Date") is brittle in flat-file scripts.',
    impact: 'Fragile Systems: High maintenance costs; one code change breaks the whole export.',
    solution: 'Object-Oriented Logic: We treat Families as objects, not text lines, ensuring logic holds true regardless of file format.',
    category: 'Technical',
    priority: 'High'
  }
];
