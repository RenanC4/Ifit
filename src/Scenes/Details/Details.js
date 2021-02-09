import React, {useState} from 'react';
import styled from 'styled-components/native'
import { View, Text, SafeAreaView, Pressable } from 'react-native';

import {calcPercentage, calcAnilhas} from '../../services/utils'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

const StyledMovimentView = styled.View`
  display:flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 50px;
  border-bottom-width: 1px;
`
const StyledMovimentText = styled.Text`
  font-size: 20px;
`

const StyledPRView = styled.View`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledTextInput = styled.TextInput`
  width: 30px;
`

const StyledPercentageView = styled.View`
  display: flex;
  flex-direction: column;
  padding-top: 25px;
`
const StyledPercentageCalcView = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items:center;
  padding-top: 25px;
  padding-left: 15px;
`
export const DetailsScene = ({route}) => {
  const {moviment, record} = route.params;
  const [percentValue, setPercentValue] = useState('')
  const [platesValue, setplatesValue] = useState(0)
  const [newPR, setNewPR] = useState('false')
  const [newPRValue, setNewPRValue] = useState(false)

  return (
    <SafeAreaView>
      <StyledMovimentView>
        <StyledMovimentText>{moviment}</StyledMovimentText>
      </StyledMovimentView>
      {!record && <Text>Você ainda não tem PR para esse movimento</Text>}
      {record && 
        <>
          <StyledPRView>
            <Text> Recorde Atual: {record} Libras</Text>
            <Text> Tirado em 25/12/2020</Text>
          </StyledPRView>
          <StyledPercentageView>
              <StyledPercentageCalcView>
              <Text>Calcular porcentagem:</Text>
              <View style={{flexDirection: 'row', alignItems: "center"}}>
                <StyledTextInput 
                  style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                  onChangeText={text => setPercentValue(text)}
                  value={percentValue}/>
                  <Text>%</Text>
                <Text> = {calcPercentage(record, percentValue)}</Text>
              </View>
            </StyledPercentageCalcView>
          </StyledPercentageView>
          <StyledPercentageView>
          <Text>Calculo baseado na carga - peso da Barra... valores equivalentes a 1 lado da barra </Text>
              <StyledPercentageCalcView>
              <Text>Calcular Anilhas:</Text>
              
              <View style={{flexDirection: 'row', alignItems: "center"}}>
                <StyledTextInput 
                  style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                  onChangeText={text => setplatesValue(text)}
                  value={platesValue}/>
                <Text> = {JSON.stringify(calcAnilhas('M', platesValue))}</Text>
                
              </View>
            </StyledPercentageCalcView>
          </StyledPercentageView>

          <TouchableOpacity onPress={()=>{setNewPR(!newPR)}}>
            <Text>+ NOVO PR</Text>
          </TouchableOpacity>
          
          {newPR && <StyledTextInput 
                  style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                  onChangeText={text => setNewPRValue(text)}
                  value={newPRValue}/>
                  }

        </>
      }

      {/*
      <TextInput 
              style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
              onChangeText={text => setplatesValue(text)}
              value={platesValue}/>
              <Text>{JSON.stringify(calcAnilhas('M', platesValue))}</Text>
      */}
    </SafeAreaView>
  );
}