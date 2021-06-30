import React, { useState } from 'react'
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';

const Home = () => {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen)
  }

  const [isBio, setIsBio] = useState(false);
  const isBioToggle = () => {
    if (!isBio) {
    setIsBio(!isBio)
    setIsTech(false)
    setIsPortfolio(false)
    setIsContact(false)
    if (isOpen) {
      setIsOpen(!isOpen)
    }
    }
  }

  const [isTech, setIsTech] = useState(false);
  const isTechToggle = () => {
    if (!isTech) {
    setIsTech(!isTech)
    setIsPortfolio(false)
    setIsBio(false)
    setIsContact(false)
    if (isOpen) {
      setIsOpen(!isOpen)
    }
    }
  }
  
  const [isPortfolio, setIsPortfolio] = useState(false);
  const isPortfolioToggle = () => {
    if (!isPortfolio) {
    setIsPortfolio(!isPortfolio)
    setIsBio(false)
    setIsTech(false)
    setIsContact(false)
    if (isOpen) {
      setIsOpen(!isOpen)
    }
    }
  }

  const [isContact, setIsContact] = useState(false);
  const isContactToggle = () => {
    if (!isContact) {
    setIsContact(!isContact)
    setIsBio(false)
    setIsTech(false)
    setIsPortfolio(false)
    if (isOpen) {
      setIsOpen(!isOpen)
    }
    }
  }

  return (
    <>
    <Sidebar 
      isOpen={isOpen} toggle={toggle} 
      isBioToggle={isBioToggle}
      isPortfolioToggle={isPortfolioToggle}
      isTechToggle={isTechToggle}
      isContactToggle={isContactToggle}
      />
    <Navbar  
      isOpen={isOpen} 
      toggle={toggle}
      isBioToggle={isBioToggle}
      isTechToggle={isTechToggle}
      isPortfolioToggle={isPortfolioToggle}
      isContactToggle={isContactToggle}
    />
    <HeroSection 
      isBio={isBio}
      isPortfolio={isPortfolio}
      isTech={isTech}
      isContact={isContact}
      />
    </>
  )
}

export default Home;
