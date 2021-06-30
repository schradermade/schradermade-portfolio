import React, { useState } from 'react';
import { 
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from './SidebarElements';


const Sidebar = ({
  isOpen, toggle, 
  isBioToggle,
  isTechToggle,
  isPortfolioToggle,
  isContactToggle,

}) => {

  // const [about, setAbout] = useState(false);

  // const aboutHover = () => {
  //   setAbout(!about)
  // }

  return (
    <>
      <SidebarContainer 
        isOpen={isOpen} 
        onClick={toggle} 
      >
        <Icon 
          onClick={toggle}
        >
          <CloseIcon />
        </Icon>
          <SidebarWrapper>
            <SidebarMenu>
              <SidebarLink 
                to="about" 
                onClick={isBioToggle}
              >
                Bio
              </SidebarLink>
              <SidebarLink 
                to="techskills"
                onClick={isTechToggle}
              >
                Technical Skills
              </SidebarLink>
              <SidebarLink 
                to="portfolio" 
                onClick={isPortfolioToggle}
              >
                Portfolio
              </SidebarLink>
              <SidebarLink 
                to="contact" 
                onClick={isContactToggle}
              >
                Contact Me
              </SidebarLink>
            </SidebarMenu>
            {/* <SideBtnWrap>
              <SidebarRoute to="/signin" onClick={toggle}>
                Sign In
              </SidebarRoute>
            </SideBtnWrap> */}
          </SidebarWrapper>
      </SidebarContainer>
    </>
  )
}

export default Sidebar;
