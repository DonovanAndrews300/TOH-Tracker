import { StatusBar } from 'expo-status-bar';
import StackRouter from './routes/introStack'
import React, { useEffect } from 'react';
import { LogBox } from 'react-native';

import { StyleSheet, Text, View } from 'react-native';
import { AuthProvider } from './routes/authProvider';
import {DataProvider } from './routes/dataProdiver'
import {firebaseConfig} from '../src/apiKeys'
import * as firebase from 'firebase'



export default function App() {
  useEffect(() => LogBox.ignoreLogs(['Setting a timer for a long period of time']))
  if(!firebase.apps.length){firebase.initializeApp(firebaseConfig)}
  return (
    <AuthProvider>
    <DataProvider>
       <StackRouter/>
    </DataProvider>
    </AuthProvider>
  );
};
