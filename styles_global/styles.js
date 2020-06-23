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
  titleInputDesc:{
    fontSize: 13,
    color: '#e0e0e0',
    fontStyle: 'italic'
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
    marginHorizontal: 5,
    flexDirection: 'row',
    borderColor: '#777',
    borderBottomWidth: 1,
    textAlign: 'right',
    paddingHorizontal: 8,
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'sans-serif',
    color: '#777',
  },
  unitContainInput:{
    flex: 2,
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  unitTitle:{
    color: '#777',
    fontFamily: 'sans-serif',
    marginRight: 18,
    textAlign: 'center'
  },

  /*This is styles for result contain*/
  resultContain:{
    backgroundColor: '#00bfa5',
    marginVertical: 5,
    padding: 8,
    borderRadius: 2,
    shadowColor: "#000",
    shadowOffset: {
    	width: 0,
    	height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,

  },
  resultTitle:{
    borderBottomWidth: 1,
    borderBottomColor: '#fafafa',
    flexDirection:'row',
  },
  resultTitleText:{
    color: '#fafafa',
    fontWeight: 'bold',
    fontFamily: 'sans-serif',
    fontSize: 24,
  },
  resultTitleDesc:{
    color: '#fafafa',
    fontFamily: 'sans-serif',
    fontSize: 14,
    fontStyle: 'italic',
    margin: 8,
    justifyContent: 'flex-end',
    flex: 1,
  },
  resultContent:{
    paddingVertical: 8,
    flexDirection: 'row'
  },
  result:{
    color: '#fafafa',
    fontWeight: 'bold',
    fontFamily: 'sans-serif',
    fontSize: 34,
  },
  unitContain:{
    flexDirection:'row',
    paddingTop: 10,
    marginLeft: 5,
  },
  unit:{
    color: '#fafafa',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'sans-serif',
    lineHeight: 30
  },
  superUnit:{
    color: '#fafafa',
    fontSize: 12,
    fontWeight: 'bold',
    fontFamily: 'sans-serif',
    lineHeight: 19,
  },
  rateContent:{
    paddingHorizontal: 8,
    color: '#fafafa',
    fontFamily: 'sans-serif',
    fontSize: 16,
    fontStyle: 'italic'
  },
  icons:{
    marginLeft: 10,
    paddingHorizontal: 8
  }
})
