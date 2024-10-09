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
import SecHeading from '@/components/SecHeading';

const Dhevvadhoo = () => {
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
      <PageIntroText />

      <Population />
      <SecHeading secHeading="ދަތުރުފަތުރު" />

      <Transportation />
    </Container>
  );
};

export default Dhevvadhoo;
