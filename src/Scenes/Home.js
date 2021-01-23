import React from 'react';
import styled from 'styled-components/native'
import { View, Text } from 'react-native';

const StyledText = styled.Text`
  color: #000;
`
const StyledView = styled.View`
  height: 150px;
  width: 150px;
  border-radius: 5px;
  border-width: 1px;
  display: flex;
  justify-content:center;
  background-color: #BAD;
  align-items: center;
  margin: 10px;
`

const StyledContainerView = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 50px;
  flex-wrap: wrap;
`
export const HomeScene = () => {
  return (
    <StyledContainerView>
      <StyledView>
        <StyledText>Wod</StyledText>
      </StyledView>
      <StyledView>
        <StyledText>LPO</StyledText>
      </StyledView>
      <StyledView>
        <StyledText>Endurance</StyledText>
      </StyledView>
      <StyledView>
        <StyledText>Gymnastics</StyledText>
      </StyledView>
      <StyledView>
        <StyledText>Store</StyledText>
      </StyledView>
      <StyledView>
        <StyledText>Open</StyledText>
      </StyledView>
    </StyledContainerView>
  );
}