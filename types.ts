export enum SectionType {
  FAMILY = 'Family Characteristics',
  CHILD = 'Child Characteristics',
  SETTING = 'Setting Characteristics',
  PROVIDER = 'Provider Characteristics',
  HEADER = 'Header Record'
}

export interface DataElement {
  id: string;
  name: string;
  fieldSize: number;
  required: string;
  type: string;
  description: string;
  section: SectionType;
}

export interface FileSegment {
  delimiter: string;
  name: string;
  description: string;
  color: string;
}

export type PainPointCategory = 'Business' | 'Technical';
export type PainPointPriority = 'Critical' | 'High' | 'Medium' | 'Low';

export interface PainPoint {
  id: string;
  title: string;
  problem: string;
  impact: string;
  solution: string;
  category: PainPointCategory;
  priority: PainPointPriority;
}

export interface Persona {
  name: string;
  role: string;
  icon: any; // Using 'any' for Lucide icon components for simplicity in types
  quote: string;
  pain: string;
  goal: string;
  color: string;
}
