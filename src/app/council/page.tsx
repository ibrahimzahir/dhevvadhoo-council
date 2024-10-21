'use client';

import Container from '@/components/Container';
import CouncillorsCard from '@/components/CouncillorsCard';
import PageIntroText from '@/components/PageIntroText';
import PageSubTitle from '@/components/PageSubTitle';
import PageTitle from '@/components/PageTitle';
import SecHeading from '@/components/SecHeading';
import StaffCard from '@/components/StaffCard';
import WdcCard from '@/components/WdcCard';

import { AiOutlineUser } from 'react-icons/ai';

const Council = () => {
  return (
    <Container>
      <PageTitle pageTitle="ކައުންސިލް" />
      <div className="flex justify-center items-center">
        <PageSubTitle icon={AiOutlineUser} name="މުއައްޒަފުން" totnumber="10" />
        <PageSubTitle icon={AiOutlineUser} name="އ.ތ.މ ކޮމެޓީ" totnumber="5" />
        <PageSubTitle
          icon={AiOutlineUser}
          name="ކައުންސިލަރުން"
          totnumber="10"
        />
      </div>
      <SecHeading secHeading="ކައުންސިލަރުން" />
      <CouncillorsCard />
      <SecHeading secHeading="އ.ތ.މ ކޮމެޓީ" />
      <WdcCard />
      <SecHeading secHeading="މުއައްޒަފުން" />
      <StaffCard />
    </Container>
  );
};

export default Council;
