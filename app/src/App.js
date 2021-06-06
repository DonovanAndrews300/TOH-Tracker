import { StatusBar } from 'expo-status-bar';
import StackRouter from './routes/introStack'
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AuthProvider } from './routes/authProvider';
import {DataProvider } from './routes/dataProdiver'
import ApiKeys from '../src/apiKeys'
import * as firebase from 'firebase'


export default function App() {
  if(!firebase.apps.length){firebase.initializeApp(ApiKeys.firebaseConfig)}
  return (
    <AuthProvider>
    <DataProvider>
       <StackRouter/>
    </DataProvider>
    </AuthProvider>
  );
};
