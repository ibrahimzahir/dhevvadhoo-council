'use client';

import { useQuery } from 'convex/react';
import { api } from '../../convex/_generated/api';

import SecHeading from '@/components/SecHeading';

const CouncillorsCard = () => {
  const councilMembers = useQuery(api.queries.getCouncilMembers);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
      {councilMembers?.map((councilMember) => (
        <div className="flex flex-col items-center">
          <img
            className="object-cover w-auto rounded-xl aspect-square"
            src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            alt=""
          />

          <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white">
            {councilMember.dname}
          </h1>

          <p className="mt-2 text-gray-500 capitalize dark:text-gray-300">
            {councilMember.designation}
          </p>

          <div className="flex justify-between items-center">
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z"></path>
            </svg>
            <div>{councilMember.party}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CouncillorsCard;
