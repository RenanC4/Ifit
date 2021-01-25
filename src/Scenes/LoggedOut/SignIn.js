import React from 'react';
import { Image, Text, View } from 'react-native';
import styled from 'styled-components'
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-community/google-signin';



const StyledView = styled.SafeAreaView`
  background-color: #fff;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const StyledIcon = styled.View`

`

export const SignInScene = ({navigation}) => {
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
                onPress={() => navigation.navigate('Home')}
              />
      </View>
    </StyledView>
  );
}