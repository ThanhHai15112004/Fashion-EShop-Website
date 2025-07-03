import React from 'react';
import PromoBanner from './PromoBanner';
import SubNav from './SubNav';
import MainNav from './MainNav';

function Header() {
  return (
    <header>
      <PromoBanner />
      <SubNav />
      <MainNav />
    </header>
  );
}

export default Header;
