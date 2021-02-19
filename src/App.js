import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen'
import {Routes} from './Routes';
export default function App() {
  useEffect(() => {
  //  SplashScreen.hide()
  }, [])
  return (
    <Routes/>
  );
};
