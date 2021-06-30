import React, { useState } from 'react'
import Video from '../../videos/video.mp4';
import Image from '../../images/background.jpg';
import { Button } from '../ButtonElement';
import { 
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
  PicBg,
} from './HeroElement';

const HeroSection = ({
  onHover1,
  isBio, 
  isTech,
  isPortfolio,
  isContact,
}) => {

  return (
    <HeroContainer>
      <HeroBg>
        {/* <VideoBg autoPlay loop muted src={Video} type='video/mp4' /> */}
        <PicBg src={Image} type='image/jpg'/>
      </HeroBg>
      <HeroContent>
        <HeroH1
        >
          {isBio ? "I'm Nathan. I'm a React Developer currently engaged as a freelance professional." : null}
          {isPortfolio ? "Under Construction!" : null}
          {isTech ? "JavaScript, ReactJS, Material-UI, NextJS, GraphQL" : null}
          {isContact ? "natecschrader@gmail.com" : null}
        </HeroH1>
        <HeroP>
          This site is under active construction. More awesomeness to come!
        </HeroP>
        {/* <HeroBtnWrapper>
          <Button 
            to="signup" 
            onMouseEnter={onHover1}
            onMouseLeave={onHover1}
            primary="true"
            dark="true"  
          >
            Get started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper> */}
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection;
