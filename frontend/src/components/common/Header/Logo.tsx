import React from 'react';

function Logo() {
  return (
    <div className="subnav__logo d-flex flex-column align-items-center">
      <div className="logo-img mb-1">
        <img
          src="../assets/logos/logoElisaShop.png"
          alt="ELISA SHOP"
          width={100}
          height={60}
          className="img-fluid"
          style={{ display: 'block' }}
        />
      </div>
    </div>
  );
}

export default Logo;