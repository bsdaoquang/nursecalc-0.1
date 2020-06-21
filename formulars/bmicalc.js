import React, {useState} from 'react'
import {View, Text, TextInput, StyleSheet, KeyboardAvoidingView,
        TouchableWithoutFeedback, TouchableOpacity, Keyboard} from 'react-native'
import {styles} from '../styles_global/styles'
import { FontAwesome } from '@expo/vector-icons'

export default function BMICalc(){


    const [height, setHeight] = useState(height)
    const [weight, setWeight] = useState(weight)

    var ketqua = ''
    var [unitWeight, setUnitWeight] =  useState('lbs')
    var [unitHeight, setUnitHeight] = useState('In')
    var bmi = 0
    var strWeight = ''
    var strHeight = ''
    var intWeight = 0
    var intHeight = 0

    //change unit
    const changeUnitWeight = () => {
      if (unitWeight == 'Kg') {
        setUnitWeight('lbs')
        strWeight = ((weight* 2.205).toFixed(2)).toString()
        setWeight(strWeight)
      }
      if (unitWeight == 'lbs') {
        setUnitWeight('Kg')
        strWeight = ((weight/ 2.205).toFixed(2)).toString()
        setWeight(strWeight)
      }
    }

    const changeUnitHeight = () => {
      if (unitHeight == 'Cm') {
        setUnitHeight('In')
        strHeight = ((height * 0.39370079).toFixed(2)).toString()
        setHeight(strHeight)
      }
      if (unitHeight == 'In') {
        setUnitHeight('Cm')
        strHeight = ((height / 0.39370079).toFixed(2)).toString()
        setHeight(strHeight)
      }
    }
    //end change unit

    //if unit = lbs or in -> change them to kg and cm
    if (unitHeight == 'In') {
      intHeight = (height / 0.39370079).toFixed(2)
    }else{
      intHeight = parseInt(height)
    }

    if (unitWeight == 'lbs') {
      intWeight = (weight / 2.205).toFixed(2)
    }else{
      intWeight = parseInt(weight)
    }

    if (height != null && weight != null) {
      //change unit to kg, and m to Calculator
      var heightMetter = intHeight/100
      bmi = (intWeight/(heightMetter*heightMetter)).toFixed(1)

    }else if (height == null || weight == nulls) {
      bmi = 'Enter height and weight to Calculator'
    }

  return(
    <KeyboardAvoidingView style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>

          {/*This is header*/}
          <View style={styles.headerContain}>
            <Text style={styles.headerTitle}>BMI Calculator</Text>
            <Text style={styles.headerSubTitle}>Body Mass Index (BMI)</Text>
          </View>
          {/*End header*/}

          {/*This is description*/}
          {/*This is description*/}

          {/*This is form container*/}
          <View style={styles.formContain}>
            {/*This is input contain*/}
            <View style={styles.inputContain}>
              <View style={styles.titleInput}>
                <Text style={styles.titleInputText}>Weight</Text>
              </View>

              <View style={styles.inputContent}>
                <TextInput
                  style={styles.input}
                  placeholder = '0'
                  keyboardType = 'number-pad'
                  onChangeText = {weight => setWeight(weight)}
                  value = {weight}
                  clearTextOnFocus
                />
              </View>

              <View style={styles.unitContain}>
                <View style={styles.unitContainFlexDir}>
                  <Text style={styles.unitTitle}>{unitWeight}</Text>
                  <TouchableOpacity onPress = {changeUnitWeight}>
                    <FontAwesome name = 'exchange' size={20} color = 'coral'/>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            {/*end input contain*/}
          </View>
          {/*end from contain*/}


          {/*This is form container*/}
          <View style={styles.formContain}>
            {/*This is input contain*/}
            <View style={styles.inputContain}>
              <View style={styles.titleInput}>
                <Text style={styles.titleInputText}>Height</Text>
              </View>

              <View style={styles.inputContent}>
                <TextInput
                  style={styles.input}
                  placeholder = '0'
                  keyboardType = 'number-pad'
                  onChangeText = {height => setHeight(height)}
                  value = {height}
                />
              </View>

              <View style={styles.unitContain}>
                <View style={styles.unitContainFlexDir}>
                  <Text style={styles.unitTitle}>{unitHeight}</Text>
                  <TouchableOpacity onPress = {changeUnitHeight}>
                    <FontAwesome name = 'exchange' size={20} color = 'coral'/>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <Text>{bmi}</Text>
            {/*end input contain*/}
          </View>
          {/*end from contain*/}
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}
