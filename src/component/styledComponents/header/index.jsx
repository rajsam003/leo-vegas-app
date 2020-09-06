import React from "react";
import HeaderWrapper from "./headerWrapper";
import HeaderLogoWrapper from "./headerLogoWrapper";
import { Link } from "react-router-dom";

const logoUrl = 'https://images.ctfassets.net/327a1qzqf7bd/62MItV2tfejkG4C77717cf/cc62656b7c9121ed97c644051f28bd11/leovegas_CA.png'

const Header = () => {
  return (
    <HeaderWrapper>
      <Link
      to={`/`}
      >
      <div className="header__title">
          <div className="header__logo header__logo--desktop">
            <HeaderLogoWrapper
              src={logoUrl}
              title={"LeoVegas"}
              alt={"LeoVegas"}
            />
          </div>
      </div>
      </Link>
    </HeaderWrapper>
  );
};

export default Header;
