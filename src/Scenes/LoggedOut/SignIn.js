import React, {useState, useEffect} from 'react';
import { Image, View, TextInput, Text, Pressable } from 'react-native';
import styled from 'styled-components'
import {Auth} from '../../Services/Auth'
import {mainColor as color} from '../../../app.json';


const StyledView = styled.SafeAreaView`
  background-color: #fff;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const StyledSigInView =styled.View`
  border-color: ${color};
  width: 300px;
  height: 350px;
  border-radius: 3px;
  border-width: 1px; 
  flex-direction: column;
  align-items: center;
`
const StyledSigUpView =styled.View`
  border-color: ${color};
  width: 300px;
  height: 420px;
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
  background-color: ${color};
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
  const [isLoginLoading, setIsLoginLoading] = useState(false);
  const [isCreating, setIsCreating] = useState(false)

  async function LogIn() {
    const response = await auth.login(email, password);
    if (response) {
      navigation.navigate('Home', {
        displayName : response.user.displayName
      })
    }
  }

  async function SignIn() {
    const response = await auth.signIn(username, email, password);
    if (response) {
      
      navigation.navigate('Home', {
        displayName: username
      })
    }
  }

  return (
    <StyledView>
      <View>
        <Image 
          source={require('../../assets/barbell.png')}
        />
      </View>
      {!isCreating && <StyledSigInView>
        <StyledFormView>
          <StyledLabelText>E-mail</StyledLabelText>
          <TextInput
              style={{width: 200, height: 40, backgroundColor: "#f1f1f1", marginTop: 5}}
              label="Peso"
              selectionColor="#999"
              underlineColor="#999"
              mode='flat'
              value={email}
              onChangeText={text => setEmail(text)}
            /> 
          <StyledLabelText>Senha</StyledLabelText>
          <TextInput
              style={{width: 200, height: 40, backgroundColor: "#f1f1f1", marginTop: 5}}
              secureTextEntry={true}
              label="Peso"
              selectionColor="#999"
              underlineColor="#999"
              mode='flat'
              value={password}
              onChangeText={text => setPassword(text)}
            /> 
        </StyledFormView>
        <StyledInButton
          onPress={() => LogIn()}
        > 
          <StyledInText>Entrar</StyledInText>
        </StyledInButton>
      </StyledSigInView>
      }
      {!isCreating && <Pressable onPress={()=> {setIsCreating(true)}}>
        <StyledSigInText>Criar uma conta</StyledSigInText>
        </Pressable>
      }
      {isCreating && <StyledSigUpView>
        <StyledFormView>
          <StyledLabelText>Username</StyledLabelText>
          <TextInput
              style={{width: 200, height: 40, backgroundColor: "#f1f1f1", marginTop: 5}}
              label="Peso"
              selectionColor="#999"
              underlineColor="#999"
              mode='flat'
              value={username}
              onChangeText={text => setUsername(text)}
            /> 
          <StyledLabelText>E-mail</StyledLabelText>
          <TextInput
              style={{width: 200, height: 40, backgroundColor: "#f1f1f1", marginTop: 5}}
              label="Peso"
              selectionColor="#999"
              underlineColor="#999"
              mode='flat'
              value={email}
              onChangeText={text => setEmail(text)}
            /> 
          <StyledLabelText>Senha</StyledLabelText>
          <TextInput
              style={{width: 200, height: 40, backgroundColor: "#f1f1f1", marginTop: 5}}
              secureTextEntry={true}
              label="Peso"
              selectionColor="#999"
              underlineColor="#999"
              mode='flat'
              value={password}
              onChangeText={text => setPassword(text)}
            /> 
        </StyledFormView>
        <StyledInButton
          onPress={() => SignIn()}
        > 
          <StyledInText>Criar Conta</StyledInText>
        </StyledInButton>
      </StyledSigUpView>
      }
      {isCreating && <Pressable onPress={()=> {setIsCreating(false)}}>
        <StyledSigInText>Entrar</StyledSigInText>
        </Pressable>
      }
    </StyledView>
  );
}