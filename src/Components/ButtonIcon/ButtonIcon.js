import React from 'react'
import styled from 'styled-components/native'

const StyledText = styled.Text`
  color: #333;
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
  border-color:#3a9efd;
`

const ButtonIcon = ({text, ...props}) => {
  return (
    <StyledPressable onPress={props.onPressHandler}>
      <StyledText>{text}</StyledText>
    </StyledPressable> 
  )
}

export default ButtonIcon