import React from 'react'
import styled from 'styled-components/native'

const StyledText = styled.Text`
  color: #000;
`
const StyledPressable = styled.Pressable`
  height: 100px;
  width: 100px;
  border-radius: 5px;
  border-width: 1px;
  display: flex;
  justify-content:center;
  align-items: center;
  margin: 10px;
`

const ButtonIcon = ({text, ...props}) => {
  return (
    <StyledPressable onPress={props.onPressHandler}>
      <StyledText>{text}</StyledText>
    </StyledPressable> 
  )
}

export default ButtonIcon