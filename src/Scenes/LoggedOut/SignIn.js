import React, {useState, useEffect} from 'react';
import { Image, View, TextInput, TouchableOpacity, Text } from 'react-native';
import styled from 'styled-components'
import {Auth} from '../../Services/Auth'


const StyledView = styled.SafeAreaView`
  background-color: #fff;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const StyledSigInView =styled.View`
  border-color: #3a9efd;
  width: 300px;
  height: 350px;
  border-radius: 3px;
  border-width: 1px; 
  flex-direction: column;
  align-items: center;
`
const StyledSigInText =styled.Text`
 color: #000;
 font-size: 16px;
 padding-top: 10px;
 text-decoration: underline;
`
const StyledLabelText =styled.Text`
 color: #000;
 font-size: 15px;
 padding-top: 25px;
`

const StyledFormView = styled.View`
  padding-top: 30px;
`
const StyledInButton = styled.TouchableOpacity`
  background-color: #3a9efd;
  width: 200px;
  height: 45px;
  margin-top: 35px;
  justify-content: center;
  align-items: center;
`
const StyledInText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`

export const SignInScene = ({navigation}) => {
  const auth = new Auth()
  const [cad, setCad] = useState(false)
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [isLoginLoading, setIsLoginLoading] = useState(false);

  async function SignIn() {
    const response = await auth.login(email, password);
    console.log('q q ta contecendo', response)
    if (response) {
      navigation.navigate('Home')
    }
  }

  return (
    <StyledView>
      <View>
        <Image 
          source={require('../../assets/barbell.png')}
        />
      </View>
      <StyledSigInView>
        <StyledFormView>
          <StyledLabelText>E-mail</StyledLabelText>
          <TextInput
              style={{width: 200, height: 40, backgroundColor: "#f1f1f1", marginTop: 5}}
              label="Peso"
              selectionColor="#3a9efd"
              underlineColor="#3a9efd"
              mode='flat'
              value={email}
              onChangeText={text => setEmail(text)}
            /> 
          <StyledLabelText>Senha</StyledLabelText>
          <TextInput
              style={{width: 200, height: 40, backgroundColor: "#f1f1f1", marginTop: 5}}
              secureTextEntry={true}
              label="Peso"
              selectionColor="#3a9efd"
              underlineColor="#3a9efd"
              mode='flat'
              value={password}
              onChangeText={text => setPassword(text)}
            /> 
        </StyledFormView>
        <StyledInButton
          onPress={() => SignIn()}
        > 
          <StyledInText>Entrar</StyledInText>
        </StyledInButton>
      </StyledSigInView>
      <StyledSigInText>Criar uma conta</StyledSigInText>
    </StyledView>
  );
}