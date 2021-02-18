import React, {useEffect, useState} from 'react'
import styled from 'styled-components/native'
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-navigation';
import {LPOMoviments} from '../../Constants/LpoMoviments'
import { useNavigation } from '@react-navigation/native';
import database from '@react-native-firebase/database';
import {orderMovimentsAlphabeticaly} from '../../Services/Utils'
const StyledTouchable = styled.TouchableOpacity`
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  height: 50px;
  border-bottom-width: 1px;
  border-bottom-color: #f3797b;

`
const StyledMovimentText = styled.Text`
  padding-left: 15px;
  padding-right: 15px;
  font-size: 15px;
`
const generateComponent = (moviment, key, record, navigation) => {
 return (
<StyledTouchable key={key} onPress={()=> navigation.navigate('Details', {
      moviment,
      origin: 'Endurance'
    })}>    
    <StyledMovimentText>{moviment}</StyledMovimentText> 
    {record ? <StyledMovimentText>{record}</StyledMovimentText> : <></>}
  </StyledTouchable>
 )
 
}

export const EnduranceScene = () => {
const [moviments, setMoviments] = useState([])

  useEffect(() => {
    getInfo()
  
  }, [])

  const getInfo = () => {
    database()
  .ref(`/Naner/Endurance`)
  .once('value')
  .then(snapshot => {
    
    const moviments = snapshot.val()
    const movimentsOrdered = orderMovimentsAlphabeticaly(moviments)

    setMoviments(movimentsOrdered)
  })
  .catch(error => {
    console.log(error)
  });
  }
  const navigation = useNavigation();

  let items = []
  if(moviments.size > 0 ) {
    moviments.forEach((value, key) => {
      items.push(generateComponent(
        key,
        Math.random(),
        value,
        navigation
         ))
    })
  }
  
  return (
    <ScrollView>
      <SafeAreaView>
       {items}
      </SafeAreaView>
    </ScrollView>
  );
}