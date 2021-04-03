import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Navigator from './routes/drawer';

export default function App() {
  return (
      <View style={styles.container}>
            <Navigator></Navigator>
      </View>
        
  );
}

const styles =StyleSheet.create({
  container:{
      height:"100%",
      backgroundColor: "#2E2E2E",
  },
  content:{
      padding: 40,
  }
})
