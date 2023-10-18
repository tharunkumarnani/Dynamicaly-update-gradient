// Write your code here
import {DirectionListItem, DirectionButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {directionDetails, onChangeDirection, activeDirection} = props
  const {directionId, value, displayText} = directionDetails
  const active = activeDirection === directionId
  const changeDirectionRequest = () => {
    onChangeDirection(directionId, value)
  }
  return (
    <DirectionListItem>
      <DirectionButton
        isActive={active}
        onClick={changeDirectionRequest}
        type="button"
      >
        {displayText}
      </DirectionButton>
    </DirectionListItem>
  )
}

export default GradientDirectionItem
