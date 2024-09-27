'use client';

import { Button } from '@/components/ui/button';

import { useQuery } from 'convex/react';
import { api } from '../../convex/_generated/api';

export default function Home() {
  const councilMembers = useQuery(api.queries.getCouncilMembers);
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Button>Hello</Button>
        {councilMembers?.map((councilMember) => {
          return (
            <div key={councilMember._id}>
              {councilMember.name}
              {councilMember.email}
            </div>
          );
        })}
      </main>
    </div>
  );
}
