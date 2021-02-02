import React, {useEffect, useState} from 'react';
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
let generateDescription = (description) => {
  return (
    <Text>
      {description}
    </Text>
  )
}

let generateDivision = (divisionName, description) => {
    let items = []
    for(i = 0; i< description.length; i++) {
      items.push(generateDescription(description[i]))
    }
    return (
      <View >
        <StyledTitleView >
          <StyledTitleText>{divisionName}</StyledTitleText>
        </StyledTitleView>
        <StyledContentView>{items}</StyledContentView>
      </View>
    )
}


export const WodScene = () => {
  let itemsToScreen= [];
  wodObject.forEach(object => {
    itemsToScreen.push(generateDivision(object.divisionName, object.description))
  })
  /*for(i = 0; i< wodObject.length; i++) {
    console.log(wodObject.length)
    console.log('passou aqui', i)
    itemsToScreen.push(generateDivision(i, wodObject[i].divisionName, wodObject[i].description))
  }*/

  return (
    <ScrollView>
      <SafeAreaView>
        <StyledView>
          <StyledDateText> {getDateNow()}</StyledDateText>
        </StyledView>
        {itemsToScreen}
        {/*<StyledTitleView>
          <StyledTitleText>Warmup</StyledTitleText>
        </StyledTitleView>
        <StyledContentView>
          <Text>30/30 Mobility: Lats w/Band</Text>
          <Text>30/30 Mobility: OH w/Band</Text>
          <Text>30/30 Stretch: Glutes on floor</Text>
          <Text>30/30 Stretch: Hams on floor</Text>
          <Text></Text>
          <Text>Tabata Style: 12 Rounds</Text>
          <Text>1. Hollow Rocks</Text>
          <Text>2. DBL DB/KB Deadlift</Text>
          <Text>2. DBL or SGL DB/KB Push Press</Text>
          <Text>4. Lunges</Text>
        </StyledContentView>
        <StyledTitleView>
          <StyledTitleText>Skill</StyledTitleText>
        </StyledTitleView>
        <StyledContentView>
          <Text>Upper</Text>
          <Text>7x6 Heavy Barbell Strict Press</Text>
          <Text> + </Text>
          <Text>12 DBL KB PushPress</Text>
          <Text>(Moderate to heavy)</Text>
          <Text></Text>
          <Text>Every 2:00</Text>
        </StyledContentView>
        <StyledTitleView>
          <StyledTitleText>Metcon</StyledTitleText>
        </StyledTitleView>
        <StyledContentView>
          <Text>For Time (16 min cap)</Text>
          <Text></Text>
          <Text>* CRX</Text>
          <Text></Text>
          <Text>5 Rounds of</Text>
          <Text>5/3 Strict Pull Ups (chin up não será válido)</Text>
          <Text>8 DBL DB Burpee Deadlift (45/30)</Text>
          <Text>Immeadiately into</Text>
          <Text>50 Back Rack Lunges</Text>
          <Text></Text>
          <Text>* RX</Text>
          <Text></Text>
          <Text>5 Rounds of</Text>
          <Text>7/5 Kipping Pull Ups </Text>
          <Text>8 DBL DB Burpee Deadlift (45/30)</Text>
          <Text>Immeadiately into</Text>
          <Text>50 Back Rack Lunges</Text>
          <Text></Text>
          <Text>* Fitness</Text>
          <Text></Text>
          <Text>5 Rounds of</Text>
          <Text>5 Banded Pull Ups (chin up não será válido)</Text>
          <Text>16 DB or KB Deadlift </Text>
          <Text>Immeadiately into</Text>
          <Text>8 Alt. Lunges</Text>
          <Text></Text>
          <Text>Extra Core</Text>
          <Text>3 sets</Text>
          <Text>30 Russian Twists</Text>
          <Text>20 Hanging Side Crunches</Text>
          <Text>90 Secondsrest between sets</Text>
        </StyledContentView>*/}
      </SafeAreaView>
    </ScrollView>
  );
}