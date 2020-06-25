import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Index(){
  return(
    <View style={styles.container}>
      <Text style={styles.Title}>This is index screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center'
  },
  Title:{
    fontSize: 24,
    color: '#777',
    fontFamily: 'sans-serif',
    textAlign: 'center'
  }
})
