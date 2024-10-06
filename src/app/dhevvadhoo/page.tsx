'use client';

import { useQuery } from 'convex/react';
import { api } from '../../../convex/_generated/api';

import PageIntroText from '@/components/PageIntroText';
import PageSubTitle from '@/components/PageSubTitle';

import Container from '@/components/Container';
import PageTitle from '@/components/PageTitle';

import { AiOutlineUser } from 'react-icons/ai';
import { AiOutlineTeam } from 'react-icons/ai';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineShop } from 'react-icons/ai';
import { FiHash } from 'react-icons/fi';
import { MdOpenInFull } from 'react-icons/md';
import { MdOutlineReorder } from 'react-icons/md';
import { BiBuildingHouse } from 'react-icons/bi';
import { BiClinic } from 'react-icons/bi';
import { BiBuildings } from 'react-icons/bi';
import { BiSolidSchool } from 'react-icons/bi';
import Transportation from '@/components/ui/Transportation';
import Population from '@/components/Population';

const Dhevvadhoo = () => {
  const categoryData = useQuery(api.queries.countByCategory);

  if (!categoryData) return <div>Loading...</div>;

  // Ensure categoryData is an object
  if (typeof categoryData !== 'object' || categoryData === null) {
    return <div>No categories found.</div>;
  }

  return (
    <Container>
      <PageTitle pageTitle="ދެއްވަދޫ" />
      <section className="grid gap-2 sm:gap-0 sm:flex max-auto justify-center">
        <PageSubTitle icon={AiOutlineUser} name="ގއ.އަތޮޅު P6" />
        <PageSubTitle icon={AiOutlineUser} name="ހެކްޓަރު" totnumber="33" />
        <PageSubTitle
          icon={MdOpenInFull}
          name="މާލެއިން ފެށިގެން 404 ކިލޯ މީޓަރ"
        />
      </section>
      <section>
        <PageIntroText />
      </section>
      <section className="">
        <Population />
      </section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(categoryData).map(([category, data]) => (
          <div key={category} className="p-4 bg-white rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold">{category}</h2>
            <p>Total items: {data.count}</p>

            <ul className="mt-2">
              {data.items.map((item) => (
                <li key={item._id} className="border-b py-2">
                  <strong>Name:</strong> {item.name} <br />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Dhevvadhoo;
