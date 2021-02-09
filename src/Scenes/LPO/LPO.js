import React, {useState} from 'react'
import styled from 'styled-components/native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-navigation';
import {LPOMoviments} from '../../services/LpoMoviments'
import {Modal, Text} from 'react-native'
import { useNavigation } from '@react-navigation/native';

const StyledTouchable = styled.TouchableOpacity`
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  height: 50px;
  border-bottom-width: 1px;
  border-bottom-color: #3a9efd;

`
const StyledMovimentText = styled.Text`
  padding-left: 15px;
  padding-right: 15px;
  font-size: 15px;
`
const generateComponent = (moviment, record, navigation) => {
  return (
    <StyledTouchable onPress={()=> navigation.navigate('Details', {
      moviment,
      record
    })}>
      <StyledMovimentText>{moviment}</StyledMovimentText> 
      {record && <StyledMovimentText>{record}</StyledMovimentText>}
    </StyledTouchable>
  )
}

export const LpoScene = () => {
  const navigation = useNavigation();

  let items = []
  LPOMoviments.forEach( moviment => {
    items.push(generateComponent(
      moviment,
       300,
       navigation
       ))
  })
  
  return (
    <ScrollView>
      <SafeAreaView>
       {items}
      </SafeAreaView>
    </ScrollView>
  );
}