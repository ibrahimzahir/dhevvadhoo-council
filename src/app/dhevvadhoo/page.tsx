'use client';

import PageIntroText from '@/components/PageIntroText';
import PageSubTitle from '@/components/PageSubTitle';

import Container from '@/components/Container';
import PageTitle from '@/components/PageTitle';

import { AiOutlineUser } from 'react-icons/ai';
import { MdOpenInFull } from 'react-icons/md';
import Transportation from '@/components/Transportation';
import Population from '@/components/Population';
import SecHeading from '@/components/SecHeading';
import Organization from '@/components/Organization';
import Clubs from '@/components/Clubs';

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
      <SecHeading secHeading="އޮފީސްތައް" />
      <section className="">
        <Organization />
      </section>

      <SecHeading secHeading="ކުލަބު ޖަމިއްޔާތައް" />
      <Clubs />
    </Container>
  );
};

export default Dhevvadhoo;
