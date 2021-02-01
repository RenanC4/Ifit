import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import {displayName as appName} from '../app.json';
import {HomeScene} from './Scenes/Home/Home'
import {WodScene} from './Scenes/WOD/WOD'
import {SignInScene} from './Scenes/LoggedOut/SignIn'
import {SignUp} from './Scenes/LoggedOut/SignUp'


export const Routes = () => {
	const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"> 
        <Stack.Screen 
        name="SignIn" 
        component={SignInScene} 
        options={{headerShown: false }}
        />
        <Stack.Screen 
        name="Home" 
        component={HomeScene}
        options={{ title: appName, headerLeft: false}}
        />
        <Stack.Screen name="Wod" component={WodScene} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;