import React, {useState} from 'react'
import {View, Text, TextInput, StyleSheet, KeyboardAvoidingView,
        TouchableWithoutFeedback, TouchableOpacity, Keyboard} from 'react-native'
import {styles} from '../styles_global/styles'
import { FontAwesome } from '@expo/vector-icons'

export default function BMICalc(){


    const [height, setHeight] = useState(height)
    const [weight, setWeight] = useState(weight)

    var bmi = 0
    var unit = ''
    var superUnit = ''
    var rate = ''

    if (height != null && weight != null) {
      //change unit to kg, and m to Calculator
      var heightMetter = height/100
      bmi = (weight/(heightMetter*heightMetter)).toFixed(1)
      unit = 'Kg/m'
      superUnit = '2'

      //rate bmi for WHO
      if (bmi < 18.5) {
        rate = 'Thiếu cân'
      }if (bmi > 18.5 && bmi < 24.9) {
        rate = 'Trung bình'
      }if (bmi > 25 && bmi < 29.9) {
        rate = 'Thừa cân'
      }if (bmi > 30 && bmi < 34.9) {
        rate = 'Béo phì độ 1'
      }if (bmi > 35 && bmi < 39.9) {
        rate = 'Béo phì độ 2'
      }if (bmi > 40) {
        rate = 'Béo phì độ 3'
      }

      //BSA Calculator
      //bsa = (height * weight)^1/2
      // bsa = (Math.pow(((height * weight)/3600), 0.5)).toFixed(2)
      // unitBSA = 'm'
      // superUnitBSA = '2'
      // rateBSA = 'Diện tích bề mặt'
      //Để mai mốt tính, không quan trọng

    }else if (height == null || weight == null) {
      bmi = 'Result'
      rate = 'Nhập cân nặng và chiều cao để tính'
    }

  return(
    <KeyboardAvoidingView style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>

          {/*This is header*/}
          <View style={styles.headerContain}>
            <Text style={styles.headerTitle}>BMI Calculator</Text>
            <Text style={styles.headerSubTitle}>Chỉ số khối cơ thể (BMI)</Text>
          </View>
          {/*End header*/}

          {/*This is description*/}
          {/*This is description*/}

          {/*This is form container*/}
          <View style={styles.formContain}>
            {/*This is input contain*/}
            <View style={styles.inputContain}>
              <View style={styles.titleInput}>
                <Text style={styles.titleInputText}>Cân nặng</Text>
              </View>

              <View style={styles.inputContent}>
                <TextInput
                  style={styles.input}
                  placeholder = '0'
                  keyboardType = 'number-pad'
                  onChangeText = {weight => setWeight(weight)}
                  clearTextOnFocus
                />
              </View>

              <View style={styles.unitContainInput}>
                <Text style={styles.unitTitle}>Kg</Text>
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
                <Text style={styles.titleInputText}>Chiều cao</Text>
              </View>

              <View style={styles.inputContent}>
                <TextInput
                  style={styles.input}
                  placeholder = '0'
                  keyboardType = 'number-pad'
                  onChangeText = {height => setHeight(height)}
                  clearTextOnFocus
                />
              </View>

              <View style={styles.unitContainInput}>
                <Text style={styles.unitTitle}>Cm</Text>
              </View>
            </View>
            {/*end input contain*/}
          </View>
          {/*end from contain*/}

          {/*This is result contain*/}
          <View style={styles.resultContain}>
            <View style={styles.resultContent}>
              <Text style={styles.result}>{bmi}</Text>
              <View style={styles.unitContain}>
                <Text style={styles.unit}>{unit}</Text>
                <Text style={styles.superUnit}>{superUnit}</Text>
              </View>
            </View>
            <Text style={styles.rateContent}>BMI: {rate}</Text>

            {/*This is BSA -> để dành làm sau đi
            <View style={styles.resultContent}>
              <Text style={styles.result}>{bsa}</Text>
              <View style={styles.unitContain}>
                <Text style={styles.unit}>{unitBSA}</Text>
                <Text style={styles.superUnit}>{superUnitBSA}</Text>
              </View>
            </View>
            <Text style={styles.rateContent}>{rateBSA}</Text>
            */}

          </View>
          {/*End result contain*/}

        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}
