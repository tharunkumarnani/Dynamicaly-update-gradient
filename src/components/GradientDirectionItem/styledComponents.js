// Style your elements here
import styled from 'styled-components'

export const DirectionListItem = styled.li`
  list-style-type: none;
  margin-right: 5px;
  margin-bottom: 10px;
  width: 16%;
  @media (max-width: 768px) {
    width: 48%;
  }
`

export const DirectionButton = styled.button`
  background-color: #ffffff;
  outline: none;
  cursor: pointer;
  border: 0;
  opacity: ${props => (props.isActive ? 1 : 0.5)};
  border-radius: 7px;
  height: 30px;
  width: 100%;
`
