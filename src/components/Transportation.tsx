'use client';

import { useQuery } from 'convex/react';
import { api } from '../../convex/_generated/api';

import { FaUser } from 'react-icons/fa'; // Example icons
import { BsGenderMale, BsGenderFemale } from 'react-icons/bs';

import { LuBaby } from 'react-icons/lu';

const transportIcons: Record<string, JSX.Element> = {
  motobike: <BsGenderFemale className="h-6 w-6" />,
  dingee: <LuBaby className="h-6 w-6" />,
  dhoani: <BsGenderMale className="h-6 w-6" />,
  speedboat: <BsGenderMale className="h-6 w-6" />,
};

const Transportation = () => {
  const categoryData = useQuery(api.queries.countByCategory);

  if (!categoryData) return <div>Loading...</div>;

  if (typeof categoryData !== 'object' || categoryData === null) {
    return <div>No categories found.</div>;
  }

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {Object.entries(categoryData).map(([category, data]) => (
        <div className="flex-1 text-right py-2 px-4 items-center rounded-lg border">
          <div key={category}>
            <h2 className="text-xl font-semibold">{category}</h2>
            <p>{data.count}</p>
            {transportIcons[category] || <FaUser className="h-6 w-6" />}
            <div className="mt-2">
              {data.items.map((item) => (
                <div key={item._id} className="py-2">
                  <p>{item.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Transportation;
