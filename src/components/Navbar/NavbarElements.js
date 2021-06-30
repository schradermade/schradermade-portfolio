import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

export const Nav = styled.nav`
  // background: #7FFFD4;
  background-image: linear-gradient(#A88FE7, #F19EEE);
  height: 110px;
  width: 100vw;
  // margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogoContainer = styled.div`
  &:hover {
    opacity: 75%;
  }
`

export const NavLogo = styled(LinkR)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 2.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    color: #5271FE;
  }

  @media screen and (max-width: 500px) {
    font-size: 2rem;
  }
`;

export const NavSubLogo = styled(LinkR)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.25rem;
  display: flex;
  align-items: center;
  margin-top: 5px;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
  color: #5271FE;

  &:hover {
    color: #fff;
  }

  @media screen and (max-width: 500px) {
    font-size: .75;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 2.8rem;
    cursor: pointer;
    color: #5271FE;
  }

  &:hover {
    // color: white;
    opacity: 75%;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const NavItem = styled.li`
  height: 80px;
`

export const NavLinks = styled(LinkS)`
  color: #5271FE;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-size: 1.5rem;

  @media screen and (max-width: 1000pxx) {
    font-size: 1rem;
  }

  &:hover {
    color: #fff
  }

  &.active {
    border.bottom: 3px solid #01bf71;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: #5271FE;
  white-space: nowrap;
  padding: 10px 22px;
  color: #fff;
  font-size: 20px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: white;
    color: #5271FE;
  }
`