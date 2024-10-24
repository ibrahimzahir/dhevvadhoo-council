'use client';

import { useQuery } from 'convex/react';
import { api } from '../../convex/_generated/api';

import SecHeading from '@/components/SecHeading';

export default function Home() {
  const councilMembers = useQuery(api.queries.getCouncilMembers);
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <SecHeading secHeading="ދެއްވަދޫ" />
        {councilMembers?.map((councilMember) => {
          return (
            <div key={councilMember._id}>
              {councilMember.name}
              {councilMember.email}
            </div>
          );
        })}
        {/* to do  
        <News/>
        <Iulan/>
        <Gallary/>
        <Projects/>
        <CouncilMeetings />
        
        */}
      </main>
    </div>
  );
}
