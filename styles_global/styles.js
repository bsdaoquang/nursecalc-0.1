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
    marginTop: 10
  },
  inputContain:{
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderBottomColor: '#c1c1c1',
    justifyContent:'center',
    flexDirection: 'row',
  },
  titleInput:{
    flex: 4,
    justifyContent: 'center',
    paddingVertical: 8
  },
  titleInputText:{
    color: '#777',
    fontSize: 16,
    fontWeight: '300',
    textAlign: 'left'
  },
  inputContent:{
    flex: 4,
  },
  input:{
    flex: 1,
    flexDirection: 'row',
    borderColor: '#777',
    borderBottomWidth: 1,
    textAlign: 'right',
    paddingHorizontal: 8
  },
  unitContain:{
    flex: 2,
    paddingHorizontal: 8,
    paddingVertical: 8
  },
  unitContainFlexDir:{
    flex:1,
    flexDirection: 'row'
  },
  unitTitle:{
    color: '#777',
    fontFamily: 'sans-serif',
    marginRight: 18,
  },
})
