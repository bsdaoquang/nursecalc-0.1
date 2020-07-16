import React from 'react'
import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
  /*Body style*/
  container:{
    flex: 1,
    backgroundColor: '#fff'
  },
  inner:{
    flex: 1,
    //marginBottom: 70,
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
    
    textAlign: 'center',
    fontWeight: 'bold',
    textTransform: 'uppercase'
  },
  headerSubTitle:{
    textAlign: 'center',
    fontSize: 20,
    color: '#424242',
    fontWeight: '300',

  },

  /*styles for description*/
  description:{
    marginVertical: 10,
  },
  descContent:{
    backgroundColor: '#fff',
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
    color: '#9e9e9e',
    fontStyle: 'italic'
  },
  titleInputText:{
    color: '#424242',
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
    borderColor: '#6d6d6d',
    borderBottomWidth: 1,
    textAlign: 'right',
    paddingHorizontal: 10,
    fontSize: 16,
    fontWeight: 'bold',

    color: '#6d6d6d',
  },
  alertText:{
    color: '#ef9a9a',
    fontSize: 12,

    padding: 5,
    fontStyle: 'italic'
  },
  unitContainInput:{
    flex: 2,
    //paddingHorizontal: 8,
    paddingVertical: 8,
  },
  unitTitle:{
    color: '#6d6d6d',

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

    fontSize: 24,
  },
  resultTitleDesc:{
    color: '#fafafa',

    fontSize: 14,
    fontStyle: 'italic',
    margin: 8,
    justifyContent: 'flex-end',
    flex: 1,
  },
  resultContent:{
    flexDirection: 'row'
  },
  result:{
    color: '#fafafa',
    fontWeight: 'bold',

    fontSize: 34,
    paddingHorizontal: 8,
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

    lineHeight: 30
  },
  superUnit:{
    color: '#fafafa',
    fontSize: 12,
    fontWeight: 'bold',

    lineHeight: 19,
  },
  rateContent:{
    padding: 8,
    color: '#fafafa',

    fontSize: 18,
    fontStyle: 'italic',
    marginTop: 8
  },
  icons:{
    marginLeft: 10,
    paddingHorizontal: 8
  },

  /*this is style for info content*/
  formInfo:{
    backgroundColor: '#eeeeee',
    marginVertical: 8,
    padding: 8,
    borderRadius: 4
  },
  titleInfo:{
    color: '#757575',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily:'sans-serif'
  },
  infoText:{

    color: '#6d6d6d',
    paddingVertical: 3,
    fontSize: 14,
    fontStyle: 'italic'
  },

  /*This is styles for list*/
  listContainer:{
    backgroundColor: '#fff',
    paddingVertical: 5,
    borderStyle: 'solid',
    borderColor: '#cfcfcf',
    borderBottomWidth: 1,
    flexDirection: 'row',
  },
  listContent:{
    flex: 8,
    paddingHorizontal: 5
  },
  listTitle:{
    textAlign: 'left',
    color: '#6d6d6d',
    fontWeight: 'bold',

    fontSize: 17
  },
  bottomBanner:{
    bottom: 0,
    position: "absolute"
  },
  btnLink:{
    marginVertical: 15,
    justifyContent: 'center',
    padding: 8
  },
  link:{
    fontSize: 16,

    color: '#6d6d6d',
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

    fontWeight: 'bold',
    color: '#6d6d6d',
    fontSize: 18
  },
  infoTextLink:{
    color: '#2ecc71',
    fontSize: 14,
    fontStyle: 'italic',

    marginTop: 15
  },
  errorText:{
    color: '#ff7961',

    fontSize: 14,
    paddingVertical: 5,
    textAlign: 'right',
    fontStyle: 'italic'
  }
})
