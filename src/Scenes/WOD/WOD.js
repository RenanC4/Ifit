import React from 'react';
import { Text, View } from 'react-native';
import { getDateNow } from '../../services/Date'
import { wodObject } from '../../services/WODObject'
import styled from 'styled-components/native'
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-navigation';

const StyledView = styled.View`
  align-items:center;
  padding-top: 15px;
`
const StyledDateText = styled.Text`
  font-size: 19px;
`
const StyledTitleView = styled.View`
  background-color: #ccc;
  margin-top: 15px;
  height: 35px;
  align-items: center;
  justify-content: center;
`
const StyledTitleText = styled.Text`
  font-size: 16px;
`
const StyledContentView = styled.View`
  margin-top: 10px;
  margin-left: 10px;
`
const generateDescription = (description, key) => {
  return (
    <Text key={key}>
      {description}
    </Text>
  )
}

const generateDivision = (divisionName, description, key) => {
    let items = []
    for(i = 0; i< description.length; i++) {
      items.push(generateDescription(description[i], i))
    }
    return (
      <View key={key}>
        <StyledTitleView>
          <StyledTitleText>{divisionName}</StyledTitleText>
        </StyledTitleView>
        <StyledContentView>{items}</StyledContentView>
      </View>
    )
}

export const WodScene = () => {
  let itemsToScreen= [];
  wodObject.forEach((object, index) => {
    itemsToScreen.push(generateDivision(object.divisionName, object.description, index))
  })

  return (
    <ScrollView>
      <SafeAreaView>
        <StyledView>
          <StyledDateText> {getDateNow()}</StyledDateText>
        </StyledView>
        {itemsToScreen}
      </SafeAreaView>
    </ScrollView>
  );
}