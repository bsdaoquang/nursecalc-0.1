import React from 'react'
import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
  /*Body style*/
  container:{
    flex: 1,
  },
  inner:{
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 10
  },
  /*style for header*/
  headerContain:{
    textAlign: 'center',
    padding: 8
  },
  headerTitle:{
    fontSize: 24,
    color: '#00bfa5',
    fontFamily: 'sans-serif',
    textAlign: 'center',
    fontWeight: 'bold',
    textTransform: 'uppercase'
  },
  headerSubTitle:{
    textAlign: 'center',
    fontSize: 20,
    color: '#777',
    fontWeight: '300',
    fontFamily: 'sans-serif'
  },

  /*styles for description*/
  description:{
    marginVertical: 10,
  },
  descContent:{
    backgroundColor: '#e0e0e0',
    marginVertical: 8,
    padding: 8,
  },
  descButton:{
    flex: 1,
    flexDirection: 'row',
  },
  buttonDesc:{
    flex: 1,
    justifyContent: 'center',
    padding: 8,
    borderColor: '#e0e0e0',
    borderWidth: 1,
    borderStyle: 'solid',
    flexDirection: 'row',
    borderRadius: 4,
    marginVertical: 5,
  },

  buttonText:{
    flex: 1,
    textAlign: 'center',
  },

  /*style form contain*/
  formContain:{
    marginTop: 5
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
    paddingHorizontal: 10,
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'sans-serif',
    color: '#777',
  },
  alertText:{
    color: '#ef9a9a',
    fontSize: 12,
    fontFamily: 'sans-serif',
    padding: 5,
    fontStyle: 'italic'
  },
  unitContainInput:{
    flex: 2,
    //paddingHorizontal: 8,
    paddingVertical: 8,
  },
  unitTitle:{
    color: '#777',
    fontFamily: 'sans-serif',
    textAlign: 'center'
  },

  /*This is styles for result contain*/
  resultContain:{
    backgroundColor: '#00bfa5',
    marginTop: 10,
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
    paddingHorizontal: 8
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
    padding: 8,
    color: '#fafafa',
    fontFamily: 'sans-serif',
    fontSize: 18,
    fontStyle: 'italic'
  },
  icons:{
    marginLeft: 10,
    paddingHorizontal: 8
  },

  /*this is style for info content*/
  formInfo:{
    backgroundColor: '#e0e0e0',
    marginVertical: 8,
    padding: 8,
    borderRadius: 4
  },
  titleInfo:{
    color: '#777',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily:'sans-serif'
  },
  infoText:{
    fontFamily: 'sans-serif',
    color: '#777',
    padding: 5,
    fontSize: 14,
    fontStyle: 'italic'
  },

  /*This is styles for list*/
  listContent:{
    backgroundColor: '#fafafa',
    marginTop: 2,
    padding: 10,
    borderRadius: 4,
    flexDirection: 'row',

  },
  listTitle:{
    flex: 1,
    textAlign: 'left',
    color: '#777',
    fontFamily: 'sans-serif',
    fontSize: 16
  },
  iconRight:{
    flex: 1,
    textAlign: 'center'
  },
  bottomBanner:{
    bottom: 0,
    position: 'absolute',
    backgroundColor: '#ccc'
  },
  btnLink:{
    marginVertical: 15,
    justifyContent: 'center',
    padding: 8
  },
  link:{
    fontSize: 16,
    fontFamily: 'sans-serif',
    color: '#777',
    fontStyle: 'italic',
    textAlign: 'right'
  },

  /*this is styles for info contain*/
  infoContain:{
    marginTop: 15,
    backgroundColor: '#e0e0e0',
    borderRadius: 4
  },
  titleInfoContain:{
    flexDirection: 'row',
    padding: 5
  },
  titleInfo:{
    paddingVertical: 5,
    flex: 1,
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    color: '#777',
    fontSize: 18
  },
  infoTextLink:{
    color: '#2ecc71',
    fontSize: 14,
    fontStyle: 'italic',
    fontFamily: 'sans-serif',
    padding: 5
  }
})
