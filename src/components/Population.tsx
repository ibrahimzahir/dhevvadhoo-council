'use client';

import { useQuery } from 'convex/react';
import { api } from '../../convex/_generated/api';

import { FaUser } from 'react-icons/fa';
import { BsGenderMale, BsPeople, BsGenderFemale } from 'react-icons/bs';

import { LuBaby } from 'react-icons/lu';

const populationIcons: Record<string, JSX.Element> = {
  female: <BsGenderFemale className="h-6 w-6" />,
  kids: <LuBaby className="h-6 w-6" />,
  male: <BsGenderMale className="h-6 w-6" />,
};

const Population = () => {
  const data = useQuery(api.queries.fetchPopulations); // Fetch data using convex query

  if (!data) {
    return <div>Loading...</div>;
  }

  const { totalPopulation, populations } = data;

  return (
    <div className="grid sm:flex gap-4 items-center">
      <div className="flex-1 text-right bg-gray-100 py-2 px-4 items-center rounded-lg">
        <div className="flex items-center">
          <BsPeople className="h-6 w-6" />
          <div className="flex-1">
            <h1 className="text-xl font-semibold py-4 text-gray-600">އާބާދީ</h1>
            <h1 className="text-xl font-semibold text-gray-500">
              {totalPopulation}
            </h1>
          </div>
        </div>
      </div>

      {populations.map((population) => (
        <div
          key={population._id}
          className="flex py-2 px-4 rounded-lg border items-center justify-between gap-4"
        >
          <div>
            {populationIcons[population.type] || <FaUser className="h-6 w-6" />}
          </div>
          <div className="text-right">
            <h1 className="flex-row text-lg text-gray-500 py-4">
              {population.name}
            </h1>
            <h1 className="text-xl font-semibold text-gray-500">
              {population.amount}
            </h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Population;
