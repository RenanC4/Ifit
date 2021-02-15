import React, {useState, useEffect} from 'react';
import { Image, Text, View } from 'react-native';
import styled from 'styled-components'
import {
  GoogleSigninButton,
} from '@react-native-community/google-signin';
import {Auth} from '../../Services/Auth'

const StyledView = styled.SafeAreaView`
  background-color: #fff;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

export const SignInScene = ({navigation}) => {
  const auth = new Auth()
  return (
    <StyledView>
      <View>
        <Image 
          source={require('../../assets/barbell.png')}
        />
      </View>
      <View>
      <GoogleSigninButton
                style={{width: 192, height: 48}}
                size={GoogleSigninButton.Size.Wide}
                color={GoogleSigninButton.Color.Dark}
                onPress={() => auth.login('renanc433@gmail.com', 'stevejobs1')}
              />
      </View>
    </StyledView>
  );
}