'use client';

import { useQuery } from 'convex/react';
import { api } from '../../convex/_generated/api';

import Image from 'next/image';

const Organization = () => {
  const organizations = useQuery(api.queries.getOrganizations);

  if (!organizations) return <div>Loading...</div>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {organizations.map((organization) => (
        <div className="flex ">
          <div className="organization._id w-full rounded-xl overflow-hidden shadow-lg">
            <Image
              src={organization.image}
              alt="sdf"
              width={500}
              height={300}
              className="w-full h-48 object-cover"
            />

            <div className="p-4">
              <div className="grid grid-cols-2 gap-2">
                <div className="">އޮފީސް {organization.name}</div>
                <div className=" ">ފޯން {organization.telephone}</div>
              </div>
            </div>
            <div className="p-4">
              <div className="grid grid-cols-2 gap-2">
                <div className="">މުައައްޒަފުން {organization.staffs}</div>
                <div className=" ">ރަސްމީ ގަޑި {organization.openingHours}</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Organization;
