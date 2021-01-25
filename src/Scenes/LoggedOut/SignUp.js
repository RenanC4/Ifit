import React from 'react';
import styled from 'styled-components'
import { View, Text } from 'react-native';


const StyledView = styled.View`
  background-color: #FFF;
  height: 100%;
  display: flex;
  justify-content: center;
  padding-top: 40px;
`

export const SignUp = () => {
  return (
    <StyledView >
      <Text> Entra ai malando</Text>
    </StyledView>
  );
}