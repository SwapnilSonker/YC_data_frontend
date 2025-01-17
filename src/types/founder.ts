
export type ContactType = 'twitter' | 'linkedin' | 'email';
export interface FounderContact {
    type: ContactType;
    url: string;
  }
  
  export interface Job {
    title: string;
    description: string;
    location: string;
    salary: string;
    applyLink: string;
  }
  
  export interface FounderCardProps {
    id: string;
    companyName: string;
    companyUrl: string;
    companyImageUrl: string;
    founderName: string;
    founderImageUrl: string;
    founderContacts: FounderContact[];
    jobs: Job[];
  }
  
  