
// export type ContactType = 'twitter' | 'linkedin' | 'email';
// export interface FounderContact {
//     type: ContactType;
//     url: string;
//   }


//   export interface Founder{
//     name: string;
//     imageUrl:string;
//     contacts:FounderContact[]
//   }
  
  export interface Job {
    title: string;
    description: string;
    location: string;
    type:string;
    id:string
  }
  
//   export interface FounderCardProps {
//     id: string;
//     companyName: string;
//     companyUrl: string;
//     companyImageUrl: string;
//     founderName: string;
//     founderImageUrl: string;
//     founderContacts: Founder[];
//     jobs: Job[];
//   }
  
interface FounderContact {
  type: 'twitter' | 'linkedin' | 'email';
  url: string;
}

interface Founder {
  name: string;
  imageUrl: string;
  contacts: FounderContact[];
}

export interface FounderCardProps {
  id: string;
  companyName: string;
  companyUrl: string;
  companyImageUrl: string;
  founders: Founder[];
  jobs: Job[];
}