import React from 'react'
import styled from 'styled-components/native'
import {mainColor as color} from '../../../app.json';

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
  border-color:${color};
  
`

const ButtonIcon = ({text, ...props}) => {
  return (
    <StyledPressable onPress={props.onPressHandler}>
      <StyledText>{text}</StyledText>
    </StyledPressable> 
  )
}

export default ButtonIcon