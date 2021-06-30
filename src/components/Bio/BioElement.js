import styled from 'styled-components';

export const BioContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0px 40px 0 40px;
  padding-bottom: 30px;

`

export const BioHover = styled.p`
  color: #000;

  &:hover {
    color: #fff;
  }
`

export const BioInvis = styled.p`
  opacity: 0%;
`

export const BioPic = styled.img`
  height: 300px;
  width: 255px;
  border-radius: 50px;
  margin-top: 25px;

  &:hover {
    opacity: 75%;
  }
`