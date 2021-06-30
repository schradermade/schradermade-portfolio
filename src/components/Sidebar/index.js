import React from 'react'
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


const Sidebar = ({isOpen, toggle}) => {
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
              <SidebarLink to="about" onClick={toggle}>
                About
              </SidebarLink>
              <SidebarLink to="techskills" onClick={toggle}>
                Technical Skills
              </SidebarLink>
              <SidebarLink to="portfolio" onClick={toggle}>
                Portfolio
              </SidebarLink>
              <SidebarLink to="contact" onClick={toggle}>
                Contact Me
              </SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
              <SidebarRoute to="/signin" onClick={toggle}>
                Sign In
              </SidebarRoute>
            </SideBtnWrap>
          </SidebarWrapper>
      </SidebarContainer>
    </>
  )
}

export default Sidebar;
