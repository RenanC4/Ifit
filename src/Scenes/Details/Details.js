import React, {useState, useEffect} from 'react';
import styled from 'styled-components/native'
import {TextInput, SafeAreaView, Text} from 'react-native'
import { Headline, Subheading } from 'react-native-paper';
import database from '@react-native-firebase/database';

const StyledHeaderView = styled.View`
  display: flex;
  flex-direction: row; 
  align-items: center;
  justify-content: space-around;
  background-color:#3a9efd;
  height:80px;
`
const StyledHeaderNewPRView = styled.View`
  padding-top: 15px;
  padding-left: 15px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color:#fff;
  height:170px;
`
const StyledNewPRChild = styled.View`
  flex-direction: row;
  padding-top: 15px;
  align-items: center;
`

const StyledNewPRTouchable = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 150px;
  margin-top: 15px;
  border-color:#3a9efd;
  border-radius: 5px;
  border-width: 1px;
`
const StyledNewPRView = styled.View`
  width: 100%;
  padding-right: 15px;
  justify-content: center;
  align-items: center;
`
export const DetailsScene = ({route}) => {
  const {moviment, record} = route.params;
  const [newPRWeight, setNewPRWeight] = useState('');
  const [actualPR, setactualPR] = useState('');
  const [q, setq] = useState({});

  useEffect(() => {
    getInfo()
  
  }, [])
  const getInfo = () => {
    database()
  .ref(`/users/renan/LPO/${moviment}`)
  .once('value')
  .then(snapshot => {
    const {record} = snapshot.val()
    setactualPR(record)
  });
  }

  const getInfo2 = () => {
  database()
  .ref(`/users/renan/nome`)
  .once('value')
  .then(snapshot => {
    const response = snapshot.val()
    setq(response)
  });
  }

  const addPR = () => {
    database()
  .ref(`/users/renan/LPO/${moviment}`)
  .set({
    record: newPRWeight
  })
  setactualPR(newPRWeight)
  }
  return (
  <SafeAreaView>
    <StyledHeaderView>
      <Headline style={{color:"#fff", fontWeight:"bold"}}>
        {moviment}
      </Headline>
      <Subheading style={{color:"#fff", fontWeight:"normal"}} >PR atual: {actualPR || 0} lbs</Subheading>
    </StyledHeaderView>
    
     <StyledHeaderNewPRView>
       <StyledNewPRChild>
         <Subheading>Novo recorde - </Subheading>
         <Subheading>Peso:</Subheading>
        <TextInput
          style={{width: 80, height: 40, backgroundColor: "#f1f1f1"}}
          label="Peso"
          selectionColor="#3a9efd"
          underlineColor="#3a9efd"
          mode='flat'
          value={newPRWeight}
          right
          onChangeText={text => setNewPRWeight(text)}
        />       
        <Subheading > lbs</Subheading>
      </StyledNewPRChild>
      <StyledNewPRView>
        <StyledNewPRTouchable onPress={() => {getInfo2(), console.log(q)}}>
          <Text>+ Novo PR</Text>
        </StyledNewPRTouchable>
      </StyledNewPRView>
     

     </StyledHeaderNewPRView>
  </SafeAreaView>
  );
}