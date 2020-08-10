import React, {useState} from 'react'
import {View, Text, TextInput, StyleSheet, KeyboardAvoidingView,
        TouchableWithoutFeedback, TouchableOpacity, Keyboard, ScrollView} from 'react-native'
import {styles} from '../styles_global/styles'
import { FontAwesome } from '@expo/vector-icons'
import AdMob from '../screens/admob_Screen'
import AdMobPublish from '../screens/admob_publisher';


export default function BMICalc(){

    const [height, setHeight]       = useState(height)
    const [weight, setWeight]       = useState(weight)
    const [show, setShow]           = useState(false)
    const [bmiTarget, setBmiTarget] = useState(bmiTarget)
    const [showWeight, setShowWeight] = useState(false)

    const showContent = () => {
      setShow(!show)
    }

    const showWeightContent = () => {
      setShowWeight(!showWeight)
    }

    var bmi = 0
    var unit = ''
    var superUnit = ''
    var rate = ''
    var bsa = 0
    var weightTarget = 0

    if (weight > 150 || weight < 0) {
      setWeight('')
    }

    if (height > 200 || height < 0) {
      setHeight('')
    }

    if (bmiTarget > 35 || height < 0) {
      setBmiTarget('')
    }


    if (height != '' && weight != '') {

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
      bsa = (Math.pow(((height * weight)/3600), 0.5)).toFixed(2)

    }else if (height == '' || weight == '') {
      bmi = 'Kết quả'
      rate = 'Nhập số liệu để tính'
    }

    if (bmiTarget != '') {
      weightTarget = (parseInt(bmiTarget) * Math.pow(heightMetter, 2)).toFixed(0)
    }

  return(
    <View>
    <ScrollView>
    <KeyboardAvoidingView style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>

          {/*This is header*/}
          <View style={styles.headerContain}>
            <Text style={styles.headerTitle}>Tính BMI & BSA</Text>
            <Text style={styles.headerSubTitle}>Chỉ số khối cơ thể (BMI) & Diện tích bề mặt (BSA)</Text>
          </View>
          {/*End header*/}

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
                  value = {weight}
                />
                {
                  weight == '' ?
                    <Text style={styles.errorText}>Lỗi</Text>
                  : null
                }

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
                  value = {height}
                />
                {
                  height == '' ?
                    <Text style={styles.errorText}>Lỗi</Text>
                  : null
                }
              </View>

              <View style={styles.unitContainInput}>
                <Text style={styles.unitTitle}>Cm</Text>
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
                <Text style={styles.titleInputText}>BMI mong muốn</Text>
                <Text style={styles.titleInputDesc}>Tính cân nặng để đạt BMI mục tiêu</Text>
              </View>

              <View style={styles.inputContent}>
                <TextInput
                  style={styles.input}
                  placeholder = '20 - 25'
                  keyboardType = 'number-pad'
                  onChangeText = {bmiTarget => setBmiTarget(bmiTarget)}
                  value = {bmiTarget}
                />
                {
                  bmiTarget == '' ?
                    <Text style={styles.errorText}>Lỗi</Text>
                  : null
                }
              </View>

              <View style={styles.unitContainInput}>
                <Text style={styles.unitTitle}></Text>
              </View>

            </View>
            {/*end input contain*/}
          </View>
          {/*end from contain*/}

          {
            bmi > 0 ?
            <View style={styles.resultContain}>
              <View style={styles.resultContent}>
                <Text style={styles.resultTitleText}>BMI: </Text>
                <Text style={styles.result}>{bmi}</Text>
                <Text style={styles.rateContent}>Kg/m2 ({rate})</Text>
              </View>

              <View style={styles.resultContent}>
                <Text style={styles.resultTitleText}>BSA: </Text>
                <Text style={styles.result}>{bsa}</Text>
                <Text style={styles.rateContent}>m2</Text>
              </View>

              <View style={styles.resultContent}>
                <Text style={styles.resultTitleText}>{weightTarget}</Text>
                <Text style={styles.rateContent}>Kg (Để được BMI {bmiTarget})</Text>
              </View>

            </View>
            : null
          }

          <AdMobPublish />

        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
    </ScrollView>
      <View style={styles.bottomBanner}>
        <AdMob />
      </View>
    </View>
  )
}
