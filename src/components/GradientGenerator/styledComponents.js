// Style your elements here
import styled from 'styled-components'

export const GradientContainer = styled.div`
  height: 100vh;
  background-image: linear-gradient(
    to ${props => props.direction},
    ${props => props.firstColor},
    ${props => props.secondColor}
  );
  color: #ededed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto';
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
  @media (max-width: 768px) {
    width: 90%;
  }
`
export const Heading = styled.h1`
  font-size: 22px;
  text-align: center;
`

export const Paragraph = styled.p`
  font-size: 15px;
`

export const DirectionCont = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 0;
  flex-wrap: wrap;
  width: 100%;
`
export const InputCont = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 80%;
  margin-bottom: 15px;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

export const ColorNameColor = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`

export const PickedColor = styled.p`
  font-size: 20px;
`

export const InputColor = styled.input`
  height: 50px;
  width: 100px;
  border: 0;
  outline: none;
  background-color: transparent;
`

export const GeneratorButton = styled.button`
  outline: none;
  border: 0;
  background-color: #00c9b7;
  color: #1e293b;
  border-radius: 8px;
  height: 35px;
  width: 80px;
`
