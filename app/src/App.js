import { StatusBar } from 'expo-status-bar';
import StackRouter from './routes/introStack'
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
      <StackRouter/>
  );
};
