import React from 'react';
import Container from '../Container';
import Logo from './Logo';
import NavMenu from './NavMenu';

const Header = () => {
  return (
    <div className="w-auto bg-transparent z-10 sticky top-0">
      <Container>
        <div className="flex flex-row items-center justify-between gap-3 md:gap-0 backdrop-blur">
          <Logo />
          <NavMenu />
        </div>
      </Container>
    </div>
  );
};

export default Header;
