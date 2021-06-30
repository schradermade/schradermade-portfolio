import React from 'react'
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
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogoContainer>
            <NavLogo to="/">Nathan Schrader</NavLogo>
            <NavSubLogo to="/">REACT DEVELOPER</NavSubLogo>
          </NavLogoContainer>
          <MobileIcon onClick={toggle} isOpen={isOpen} >
            {isOpen ? null : <FaBars/>}
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="techskills">Technical Skills</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="portfolio">Portfolio</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="contact">Contact</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/signin">Sign In</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar;
