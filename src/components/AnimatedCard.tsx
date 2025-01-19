// 'use client'

// import { motion } from "framer-motion";
// import Image from 'next/image';
// import Link from 'next/link';
// import { Twitter, Linkedin, Mail } from 'lucide-react';
// import { FounderCardProps } from '../types/founder';

// interface FounderCardComponentProps extends FounderCardProps {
//   onViewJobs: (id: string) => void;
// }

// const FounderCard = ({
//   id,
//   companyName,
//   companyUrl,
//   companyImageUrl,
//   founderName,
//   founderImageUrl,
//   founderContacts,
//   onViewJobs
// }: FounderCardComponentProps) => {
//   return (
//     <motion.div
//       className="relative w-full max-w-sm rounded-xl overflow-hidden bg-gradient-to-br from-purple-900 to-purple-950 shadow-lg"
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: -20 }}
//       whileHover={{ 
//         scale: 1.03,
//         boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
//       }}
//       transition={{
//         duration: 0.3,
//         ease: "easeInOut",
//       }}
//     >
//       <div className="relative h-40 w-full">
//         <Image
//           src={companyImageUrl || "/placeholder.svg"}
//           alt={companyName}
//           layout="fill"
//           objectFit="cover"
//         />
//         <Link href={companyUrl} className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
//           <span className="text-white text-lg font-semibold">{companyName}</span>
//         </Link>
//       </div>
//       <div className="p-4">
//         <div className="flex items-center mb-4">
//           <Image
//             src={founderImageUrl || "/placeholder.svg"}
//             alt={founderName}
//             width={60}
//             height={60}
//             className="rounded-full mr-4"
//           />
//           <div>
//             <h2 className="text-xl font-semibold">{founderName}</h2>
//             <p className="text-gray-600">Founder of {companyName}</p>
//           </div>
//         </div>
//         <div className="flex justify-center space-x-4 mb-4">
//           {founderContacts.map((contact, index) => (
//             <Link key={index} href={contact.url} className="text-gray-600 hover:text-gray-900">
//               {contact.type === 'twitter' && <Twitter size={20} />}
//               {contact.type === 'linkedin' && <Linkedin size={20} />}
//               {contact.type === 'email' && <Mail size={20} />}
//             </Link>
//           ))}
//         </div>
//         <button 
//           onClick={() => onViewJobs(id)} 
//           className="w-full text-center bg-black text-white py-2 rounded-md hover:bg-purple-500 transition-colors"
//         >
//           View Jobs
//         </button>
//       </div>
//     </motion.div>
//   );
// };

// export default FounderCard;
'use client'

import { motion } from "framer-motion";
import Image from 'next/image';
import Link from 'next/link';
import { Twitter, Linkedin, Mail } from 'lucide-react';
import { FounderCardProps } from '../types/founder';

interface FounderCardComponentProps extends FounderCardProps {
  onViewJobs: (id: string) => void;
}

const FounderCard = ({
  id,
  companyName,
  companyUrl,
  companyImageUrl,
  founders,
  onViewJobs 
}: FounderCardComponentProps) => {
  return (
    <div className="h-full w-full bg-gradient-to-br from-purple-900 to-purple-950">
      <div className="flex items-center justify-center flex-col mb-6">
        <div className="relative w-24 h-24 mb-3">
          <Image
            src={companyImageUrl || "/placeholder.svg"}
            alt={""}
            layout="fill"
            objectFit="cover"
            className="rounded-full bg-red-800 m-2"
          />
        </div>
        <Link
          href={companyUrl}
          className="text-white text-xl font-bold hover:text-purple-300 transition-colors"
          onClick={(e) => e.stopPropagation()} // Prevent flip when clicking link
        >
          <span className="text-red-700 text-lg font-semibold">
            {companyName}
          </span>
        </Link>
      </div>
      {/* <div className="">{companyName}</div> */}

      <div className="space-y-4 mb-6">
        {founders.map((founder, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="flex items-center mb-2">
              <Image
                src={founder.imageUrl}
                alt={founder.name}
                width={40}
                height={40}
                className="rounded-full mr-3"
              />
              <h3 className="text-white font-medium">{founder.name}</h3>
            </div>
            <div className="flex space-x-3">
              {founder.contacts.map((contact, idx) => (
                <Link 
                  key={idx} 
                  href={contact.url} 
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  {contact.type === 'twitter' && <Twitter size={18} />}
                  {contact.type === 'linkedin' && <Linkedin size={18} />}
                  {contact.type === 'email' && <Mail size={18} />}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
            <button
        onClick={(e) => {
          e.stopPropagation();
          onViewJobs(id);
        }}
        className="w-full text-center bg-black text-white py-2 rounded-md hover:bg-purple-500 transition-colors"
      >
        View Jobs
      </button>
    </div>
  );
};

export default FounderCard;
