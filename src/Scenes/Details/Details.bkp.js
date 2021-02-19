import React, {useState} from 'react';
import styled from 'styled-components/native'
import { View, Text, SafeAreaView, Pressable } from 'react-native';

import {calcPercentage, calcAnilhas} from '../../Services/Utils'
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
  width: 100px;
  border-color:#3a9e;
  border-radius: 5px;
  border-width: 1px;  
  height: 30px;
`
const StyledTextInputOBS = styled.TextInput`
  border-color:#3a9e;
  border-radius: 5px;
  border-width: 1px;  
  width: 380px;
  height: 80px;

`
const StyledPercentageView = styled.View`
  display: flex;
  flex-direction: column;
  padding-top: 25px;
`
const StyledPercentageCalcView = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items:center;
  padding-top: 25px;
  padding-left: 15px;
`


const StyledNewPRTouchable = styled.TouchableOpacity`
  width: 80%;
  justify-content: center;
  align-items: center;
  height: 50px;
  margin-top: 15px;
  border-color:${color};
  border-radius: 5px;
  border-width: 1px;
`
const StyledNewPRView = styled.View`
  justify-content: center;
  align-items: center;
`


const StyledNewPRFormView = styled.View`
  flex-direction: column;
  align-items: flex-start;
  margin-top:15px;
  margin-left: 15px;
`

const StyledWeightView = styled.View`
  flex-direction: row;
  align-items: center;
`
const StyledOBSView = styled.View`
  margin-top: 15px; 
`

const StyledBarView = styled.View`
  margin-top : 15px;
  background-color: #BAD;
`
export const DetailsScene = ({route}) => {
  const {moviment, record} = route.params;
  const [percentValue, setPercentValue] = useState('')
  const [platesValue, setplatesValue] = useState(0)
  const [newPR, setNewPR] = useState(false)
  const [newPRValue, setNewPRValue] = useState('')
  const [observationValue, setObsevationValue] = useState('')

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
          <StyledPercentageCalcView>
            <Text>Calcular porcentagem do seu PR:</Text>
            <View style={{flexDirection: 'row', alignItems: "center"}}>
              <StyledTextInput 
                style={{ height: 30, borderColor: 'gray', borderWidth: 1, width: 35}}
                onChangeText={text => setPercentValue(text)}
                value={percentValue}/>
                <Text>%</Text>
              <Text> = {calcPercentage(record, percentValue)}</Text>
            </View>
          </StyledPercentageCalcView>
      </>
      }
      <StyledBarView>
        <Text>Monte sua barra</Text>
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
      </StyledBarView>

      {newPR && 
        <StyledNewPRFormView>
          <StyledWeightView>
            <Text>Peso em libras: </Text>
            <StyledTextInput 
            onChangeText={text => setNewPRValue(text)}
            value={newPRValue}/>
          </StyledWeightView>
           
          <StyledOBSView>
            <Text>Observações: </Text>
            <StyledTextInputOBS 
            multiline={true}
            numberOfLines={42}
              onChangeText={text => setObsevationValue(text)}
              value={observationValue}
              />
          </StyledOBSView>
        </StyledNewPRFormView>
      }
      <StyledNewPRView>
        <StyledNewPRTouchable onPress={() => {setNewPR(true)}}>
          <Text>+ NEW PR</Text>
        </StyledNewPRTouchable>
      </StyledNewPRView>

      

    </SafeAreaView>
  );
}