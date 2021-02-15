import React from 'react'
import styled from 'styled-components/native'
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-navigation';
import {LPOMoviments} from '../../Constants/LpoMoviments'
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
const generateComponent = (moviment, key, record, navigation) => {
 
 console.log(moviment, record)

 return (
<StyledTouchable key={key} onPress={()=> navigation.navigate('Details', {
      moviment,
      record
    })}>    
    <StyledMovimentText>{moviment}</StyledMovimentText> 
    {record ? <StyledMovimentText>{record}</StyledMovimentText> : <></>}
  </StyledTouchable>
 )
 
}

export const LpoScene = () => {
  const navigation = useNavigation();

  let items = []
  LPOMoviments.forEach((moviment, index) => {
    items.push(generateComponent(
      moviment.moviment,
      index,
      moviment.record,
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