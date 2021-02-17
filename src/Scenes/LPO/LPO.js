import React, {useEffect, useState} from 'react'
import styled from 'styled-components/native'
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-navigation';
import {LPOMoviments} from '../../Constants/LpoMoviments'
import { useNavigation } from '@react-navigation/native';
import database from '@react-native-firebase/database';

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
const [moviments, setMoviments] = useState([])

  useEffect(() => {
    getInfo()
  
  }, [])
  const getInfo = () => {
    database()
  .ref(`/users/Naner/LPO`)
  .once('value')
  .then(snapshot => {
    
    const record = snapshot.val()

    let movimentos = Object.keys(record);
    let records = Object.values(record)

    let objetoC = [] 
    movimentos.forEach((moviment, index) => {
      let key = moviment;
      let obj = {}
      obj[key] = records[index].record
      objetoC.push(obj)
    })
    setMoviments(objetoC)
  })
  .catch(error => {
    console.log(error)
  });
  }
  const navigation = useNavigation();

  let items = []
  if(moviments.length > 0 ) {
    console.log('moviments',  moviments[0])
    moviments.sort().forEach((moviment, index) => {
      items.push(generateComponent(
        Object.keys(moviment),
        index,
        Object.values(moviment),
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