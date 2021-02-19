import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth'; 
import {LPOMoviments} from '../Constants/LpoMoviments'
import {EnduranceMoviments} from '../Constants/EnduranceMoviments'
import {GymnasticMoviments} from '../Constants/GymnasticMoviments'

function createLPO(username){
  LPOMoviments.forEach(moviment => {
    database()
    .ref(`/${username}/LPO/${moviment.moviment}`)
    .set({
      record: 0
    })
  })
}

function createEndurance(username){
  EnduranceMoviments.forEach(moviment => {
    database()
    .ref(`/${username}/Endurance/${moviment.moviment}`)
    .set({
      record: 0
    })
  })
}
function createGymnastics(username){
  GymnasticMoviments.forEach(moviment => {
    database()
    .ref(`/${username}/Gymnastics/${moviment.moviment}`)
    .set({
      record: 0
    })
  })
}


export class Auth {
  async login(user, password) {
    console.log(user, password)
    return auth()
    .signInWithEmailAndPassword(user, password)
    .then((response) => {
      console.log('user autorizado!', response);
      return response
    })
    .catch(error => {
      console.error(error);
    });
  }
  async signIn(username, email, password) {
   const response =  auth()
    .createUserWithEmailAndPassword(email, password)
    .then((response) => {
      response.user.updateProfile({
        displayName: username
      })
      createLPO(username)
      createGymnastics(username)
      createEndurance(username)
      return true
    })
    .catch(error => {
      let erro = {}
      if (error.code === 'auth/email-already-in-use') {
        erro.message = 'Email já cadastrado!'
        console.log('That email address is already in use!');
      }

      if (error.code === 'auth/invalid-email') {
        erro.message = 'Email inválido'
        console.log('That email address is invalid!');
      }
    return erro;
  });

  return response
  }
}