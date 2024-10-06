'use client';

import { useQuery } from 'convex/react';
import { api } from '../../convex/_generated/api';

import { ReactNode } from 'react';

import { FaUser, FaChild, FaUserTie } from 'react-icons/fa'; // Example icons

import { LuBaby } from 'react-icons/lu';


const populationIcons: Record<string, JSX.Element> = {
  female: <LuBaby className="h-6 w-6" />,
  kids: <FaChild className="h-6 w-6" />,
  male: <FaUserTie className="h-6 w-6" />,
};

const Population = () => {
  const data = useQuery(api.queries.fetchPopulations); // Fetch data using convex query

  if (!data) {
    return <div>Loading...</div>;
  }

  const { totalPopulation, populations } = data;

  return (
    // <div className="grid sm:flex gap-4 items-center">
    //   <div className="flex-1 text-right bg-gray-200 p-2 px-4 items-center rounded-lg">
    //     <div className="flex items-center">
    //       <LuBaby className="h-6 w-6" />
    //       <div className="flex-1">
    //         <h1 className="text-xl font-semibold py-4">އާބާދީ</h1>
    //         <h1 className="text-xl font-semibold">{totalPopulation}</h1>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="grid grid-cols-3 flex-1 gap-4">
    //     {populations.map((population: Population) => (
    //       <div key={population._id} className="p-4 border rounded-lg">
    //         {popIcons[population.name]}
    //         <h3 className="text-xl font-semibold">{population.name}</h3>
    //         <p>{population.amount}</p>
    //       </div>
    //     ))}
    //   </div>
    // </div>

    <div className="flex flex-col gap-4 p-4 rounded-lg">
      <div className="flex justify-between items-center bg-white p-4 rounded-lg border">
        <h1 className="text-2xl font-semibold">{totalPopulation}</h1>
        <h1 className="text-2xl font-semibold">އާބާދީ</h1>
      </div>

      {/* Flexbox for individual types */}
      <div className="flex justify-around gap-4">
        {populations.map((population) => (
          <div
            key={population._id}
            className="flex-1 flex items-center justify-between p-4 rounded-lg border"
          >
            <p className="text-lg">{population.amount}</p>
            {populationIcons[population.type] || <FaUser className="h-6 w-6" />}
            <h2 className="hidden sm:flex text-xl font-semibold">
              {population.name}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Population;
