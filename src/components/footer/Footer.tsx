'use client';

import Container from '../Container';

import Links from './Links';
import Socials from './Socials';

const Footer = () => {
  return (
    <div className="bg-white w-full">
      <Container>
        <div className="flex flex-col-reverse laptop:flex-row">
          <div className="w-full">
            <Links />
            <Socials />
          </div>
        </div>
        <div className="flex font-default">{new Date().getFullYear()}</div>
      </Container>
    </div>
  );
};

export default Footer;
