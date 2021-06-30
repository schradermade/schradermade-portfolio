import React from 'react';
import {
  BioContainer,
  BioHover,
  BioInvis,
  BioPic,
}
from './BioElement';
import SelfPic from '../../images/BioPic.jpeg';


const Bio = () => {


  return (
    <>
      <BioContainer>
        <BioHover>HI,</BioHover>
        <BioInvis>.</BioInvis>
        <BioHover>I'M</BioHover>
        <BioInvis>.</BioInvis>
        <BioHover>NATHAN</BioHover>
      </BioContainer>
      <BioContainer>
        <BioInvis>.</BioInvis>
        <BioHover>A</BioHover>
        <BioInvis>.</BioInvis>
        <BioHover>FRONT</BioHover>
        <BioInvis>.</BioInvis>
        <BioHover>END</BioHover>
        <BioInvis>.</BioInvis>
        <BioHover>ENGINEER</BioHover>
        <BioInvis>.</BioInvis>
        <BioHover>SPECIALIZING</BioHover>
        <BioInvis>.</BioInvis>
        <BioHover>IN</BioHover>
        <BioInvis>.</BioInvis>
        <BioHover>REACT</BioHover>
        <BioInvis>.</BioInvis>
        <BioHover>WEB</BioHover>
        <BioInvis>.</BioInvis>
        <BioHover>AND</BioHover>
        <BioInvis>.</BioInvis>
        <BioHover>MOBILE</BioHover>
        <BioInvis>.</BioInvis>
        <BioHover>DEVELOPMENT</BioHover>
        <BioPic src={SelfPic} />
      </BioContainer>
    </>
  )

}

export default Bio;