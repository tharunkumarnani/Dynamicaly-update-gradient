import {Component} from 'react'
import {
  GradientContainer,
  FormContainer,
  Heading,
  Paragraph,
  DirectionCont,
  InputCont,
  ColorNameColor,
  PickedColor,
  InputColor,
  GeneratorButton,
} from './styledComponents'
import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here
class GradientGenerator extends Component {
  state = {
    firstColor: '#8ae323',
    secondColor: '#014f7b',
    selectedDirection: gradientDirectionsList[0].value,
    activeDirection: gradientDirectionsList[0].directionId,
    fColorInput: '#8ae323',
    sColorInput: '#014f7b',
    directionInput: '',
  }

  onChangeDirection = (directionId, value) => {
    this.setState({directionInput: value, activeDirection: directionId})
  }

  onChangeFirstColor = event => {
    this.setState({fColorInput: event.target.value})
  }

  onChangeSecondColor = event => {
    this.setState({sColorInput: event.target.value})
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {fColorInput, sColorInput, directionInput} = this.state
    this.setState({
      firstColor: fColorInput,
      secondColor: sColorInput,
      selectedDirection: directionInput,
    })
  }

  render() {
    const {
      firstColor,
      secondColor,
      fColorInput,
      selectedDirection,
      sColorInput,
      activeDirection,
    } = this.state
    return (
      <GradientContainer
        direction={selectedDirection}
        firstColor={firstColor}
        secondColor={secondColor}
        data-testid="gradientGenerator"
      >
        <FormContainer onSubmit={this.onSubmitForm}>
          <Heading>Generate a CSS Color Gradient</Heading>
          <Paragraph>Choose Direction</Paragraph>
          <DirectionCont>
            {gradientDirectionsList.map(each => (
              <GradientDirectionItem
                key={each.directionId}
                directionDetails={each}
                activeDirection={activeDirection}
                onChangeDirection={this.onChangeDirection}
              />
            ))}
          </DirectionCont>
          <Paragraph>Pick the Colors</Paragraph>
          <InputCont>
            <ColorNameColor>
              <PickedColor>{fColorInput}</PickedColor>
              <InputColor
                value={fColorInput}
                type="color"
                onChange={this.onChangeFirstColor}
              />
            </ColorNameColor>
            <ColorNameColor>
              <PickedColor>{sColorInput}</PickedColor>
              <InputColor
                value={sColorInput}
                type="color"
                onChange={this.onChangeSecondColor}
              />
            </ColorNameColor>
          </InputCont>
          <GeneratorButton type="submit">Generate</GeneratorButton>
        </FormContainer>
      </GradientContainer>
    )
  }
}

export default GradientGenerator
