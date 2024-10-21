'use client';

import { useQuery } from 'convex/react';
import { api } from '../../convex/_generated/api';
import { useEffect, useState } from 'react';

import Image from 'next/image';

const Clubs = () => {
  const clubs = useQuery(api.queries.getClubs);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {clubs?.map((club) => (
        <div className="flex">
          <div className="organization._id w-full rounded-xl overflow-hidden shadow-lg">
            <Image
              src={club.image}
              alt="sdf"
              width={500}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-right">
              <div className="font-extrabold">{club.name}</div>
            </div>
            <div className="grid grid-cols-2 gap-4 p-4">
              <div className="text-right">{club.category}</div>
              <div className="text-right">{club.registryNo}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Clubs;
