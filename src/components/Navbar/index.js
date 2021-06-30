import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa';
import { 
  Nav, 
  NavbarContainer, 
  NavLogoContainer,
  NavLogo,
  NavSubLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';

const Navbar = ({toggle, isOpen}) => {

  const [hover1, setHover1] = useState(false);
  const [hover2, setHover2] = useState(false);

  const onHover1 = () => {
    setHover1(!hover1)
  }

  const onHover2 = () => {
    setHover2(!hover2)
  }


  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogoContainer>
            <NavLogo 
              to="/"
              onMouseEnter={onHover1}
              onMouseLeave={onHover1}
            >
              Nathan Schrader{hover1 ? "!" : null}
            </NavLogo>
            <NavSubLogo 
              to="/"
              onMouseEnter={onHover2}
              onMouseLeave={onHover2}
            >
              {hover2 ? "REACT DEVELOPER + AWS Certified" : "REACT DEVELOPER"}
            </NavSubLogo>
          </NavLogoContainer>
          <MobileIcon onClick={toggle} isOpen={isOpen}>
            {isOpen ? null : <FaBars/>}
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">BIO</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="techskills">TECH SKILLS</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="portfolio">PORTFOLIO</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="contact">CONTACT</NavLinks>
            </NavItem>
          </NavMenu>
          {/* <NavBtn>
            <NavBtnLink to="/signin">Sign In</NavBtnLink>
          </NavBtn> */}
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar;
