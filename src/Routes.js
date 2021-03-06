import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import {displayName as appName} from '../app.json';
import {HomeScene} from './Scenes/Home/Home'
import {WodScene} from './Scenes/WOD/WOD'
import {LpoScene} from './Scenes/LPO/LPO'
import {EnduranceScene} from './Scenes/Endurance/Endurance'
import {GymnasticsScene} from './Scenes/Gymnastics/Gymnastics'

import {DetailsScene} from './Scenes/Details/Details'
import {SignInScene} from './Scenes/LoggedOut/SignIn'
import {SignUp} from './Scenes/LoggedOut/SignUp'

export const Routes = () => {
	const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn"> 
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
        <Stack.Screen name="Lpo" component={LpoScene} 
        options={{ title: "LPO"}}
        />
        <Stack.Screen name="Endurance" component={EnduranceScene} 
        options={{ title: "Endurance"}}
        />
        <Stack.Screen name="Gymnastics" component={GymnasticsScene} 
        options={{ title: "Gymnastics"}}
        />
        <Stack.Screen name="Details" component={DetailsScene} 
        options={{ title: "Details"}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;