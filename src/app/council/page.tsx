'use client';

import Container from '@/components/Container';
import PageIntroText from '@/components/PageIntroText';
import PageSubTitle from '@/components/PageSubTitle';
import PageTitle from '@/components/PageTitle';

import { AiOutlineUser } from 'react-icons/ai';

const Council = () => {
  return (
    <Container>
      <PageTitle pageTitle="ކައުންސިލް" />
      <section className="">
        <PageSubTitle
          icon={AiOutlineUser}
          name="ކައުންސިލަރުން"
          totnumber="5"
        />
      </section>
    </Container>
  );
};

export default Council;
