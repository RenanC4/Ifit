import React, {useState} from 'react'
import styled from 'styled-components/native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-navigation';
import {LPOMoviments} from '../../services/LpoMoviments'
import {Modal, Text} from 'react-native'

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
const generateComponent = (moviment, record, press) => {
  return (
    <StyledTouchable onPress={()=> press(true)}>
      <StyledMovimentText>{moviment}</StyledMovimentText> 
      {record && <StyledMovimentText>{record}</StyledMovimentText>}
    </StyledTouchable>
  )
}

export const LpoScene = () => {
  const [modalVisible, setModalVisible] = useState(false)

  let items = []
  LPOMoviments.forEach( moviment => {
    items.push(generateComponent(
      moviment,
       '15lbs',
       setModalVisible
       ))
  })
  
  return (
    <ScrollView>
      <SafeAreaView>
      <Modal
        style={{color: "#Bad"}}
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(false);
        }}
      >
      <SafeAreaView>
        <TouchableOpacity onPress={() => setModalVisible(false)}> 
          <Text>Hello World!</Text>
        </TouchableOpacity>
      </SafeAreaView>
      </Modal>
       {items}
      </SafeAreaView>
    </ScrollView>
  );
}