import React from 'react'
import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
  /*Body style*/
  container:{
    flex: 1,
  },
  inner:{
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20
  },
  /*style for header*/
  headerContain:{
    textAlign: 'center'
  },
  headerTitle:{
    fontSize: 28,
    color: '#777',
    fontFamily: 'sans-serif',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  headerSubTitle:{
    textAlign: 'center',
    fontSize: 20,
    color: '#777',
    fontWeight: '300',
    fontFamily: 'sans-serif'
  },

  /*style form contain*/
  formContain:{
    marginTop: 30
  },
  inputContain:{
    paddingVertical: 24,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderBottomColor: '#c1c1c1',
    justifyContent:'center'
  }
})
