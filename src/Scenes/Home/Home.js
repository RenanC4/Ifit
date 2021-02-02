import React from 'react';
import styled from 'styled-components/native'
import ButtonIcon from '../../Components/ButtonIcon/ButtonIcon'
import { View } from 'react-native';

const StyledText = styled.Text`
  color: #000;
`
const StyledView = styled.View`
  height: 100px;
  width: 100px;
  border-radius: 5px;
  border-width: 1px;
  display: flex;
  justify-content:center;
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

const HelloView = styled.View`
  height: 40px;
  display: flex;
  align-items: flex-start;
  margin-top: 25px;
  margin-left: 20px;
`

const HelloText = styled.Text`
  font-size: 22px;
`
export const HomeScene = ({navigation}) => {
  return (
    <View>
      <HelloView>
       <HelloText>Olà, Mat Fraser</HelloText>
      </HelloView>
      <StyledContainerView>
        <ButtonIcon text="WOD" onPressHandler={() => {navigation.navigate('Wod')}}/>
        <ButtonIcon text="LPO" onPressHandler={() => {navigation.navigate('Lpo')}}/>
        <ButtonIcon text="Endurance"/>
        <ButtonIcon text="Gymnastics"/>
        <ButtonIcon text="Store"/>
        <ButtonIcon text="Open 2020"/>
      </StyledContainerView>
    </View>
  );
}