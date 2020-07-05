import React, {useState} from 'react'
import {View, Text, TextInput, StyleSheet, KeyboardAvoidingView,
        TouchableWithoutFeedback, TouchableOpacity, Keyboard, ScrollView} from 'react-native'
import {styles} from '../styles_global/styles'
import { FontAwesome } from '@expo/vector-icons'
import AdMob from '../screens/admob_Screen'

import {AdMobInterstitial} from 'expo-ads-admob'

import {t} from '../locales/index'

export default function BMICalc(){

    const admobIntersitical = async () => {
      await AdMobInterstitial.setAdUnitID('ca-app-pub-3940256099942544/6300978111'); //'ca-app-pub-6209888091137615/1207407441'); 
      await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true});
      await AdMobInterstitial.showAsync();
    }
    //end admob ads

    admobIntersitical()


    const [height, setHeight]       = useState(height)
    const [weight, setWeight]       = useState(weight)
    const [show, setShow]           = useState(false)
    const [bmiTarget, setBmiTarget] = useState(bmiTarget)
    const [showWeight, setShowWeight] = useState(false)
    const [showNote, setShowNote] = useState(false)
    const [showGuide, setShowGuide] = useState(false)

    var iconNameBsa = ''
    var iconNameWeight = ''

    const showContent = () => {
      setShow(!show)
    }

    const showWeightContent = () => {
      setShowWeight(!showWeight)
    }

    const btnShowNote = () => {
      setShowNote(!showNote)
      setShowGuide(false)
    }

    const btnShowGuide = () => {
      setShowGuide(!showGuide)
      setShowNote(false)
    }

    if (show == true) {
      iconNameBsa = 'angle-up'
    }else{
      iconNameBsa = 'angle-down'
    }

    if (showWeight == true) {
      iconNameWeight = 'angle-up'
    }else{
      iconNameWeight = 'angle-down'
    }

    var bmi = 0
    var unit = ''
    var superUnit = ''
    var rate = ''
    var bsa = 0
    var weightTarget = 0

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
      bsa = (Math.pow(((height * weight)/3600), 0.5)).toFixed(2)

    }else if (height == null || weight == null) {
      bmi = t('result')
      rate = t('enter_data')
    }

    if (bmiTarget != null) {
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
            <Text style={styles.headerTitle}>BMI & BSA Calculator</Text>
            <Text style={styles.headerSubTitle}>{t('bmi_desc')}</Text>
          </View>
          {/*End header*/}

          {/*This is description*/}
          <View style={styles.description}>
            <View style={styles.descButton}>
              <TouchableOpacity style={styles.buttonDesc} onPress = {btnShowNote}>
                <Text style={styles.buttonText}>{t('pearls_pitfalls')}</Text>
                <FontAwesome name = 'angle-down' size ={24} color = '#ccc' style={styles.icons}/>
              </TouchableOpacity>

              <TouchableOpacity style={styles.buttonDesc} onPress = {btnShowGuide}>
                <Text style={styles.buttonText}>{t('why_use')}</Text>
                <FontAwesome name = 'angle-down' size ={24} color = '#ccc' style={styles.icons}/>
              </TouchableOpacity>
            </View>

            {
              showNote ?
                <View style={styles.descContent}>
                  <Text style={styles.titleInputText}>{t('pearls_desc')}</Text>
                </View>
              : null
            }

            {
              showGuide ?
                <View style={styles.descContent}>
                  <Text style={styles.titleInputText}>{t('why_use_desc')}</Text>
                </View>
              : null
            }

          </View>
          {/*This is end description*/}

          {/*This is form container*/}
          <View style={styles.formContain}>
            {/*This is input contain*/}
            <View style={styles.inputContain}>
              <View style={styles.titleInput}>
                <Text style={styles.titleInputText}>{t('weight')}</Text>
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
                <Text style={styles.titleInputText}>{t('height')}</Text>
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

          {/*This is form container*/}
          <View style={styles.formContain}>
            {/*This is input contain*/}
            <View style={styles.inputContain}>
              <View style={styles.titleInput}>
                <Text style={styles.titleInputText}>{t('bmi_target')}</Text>
                <Text style={styles.titleInputDesc}>{t('bmi_target_desc')}</Text>
              </View>

              <View style={styles.inputContent}>
                <TextInput
                  style={styles.input}
                  placeholder = '20 - 25'
                  keyboardType = 'number-pad'
                  onChangeText = {bmiTarget => setBmiTarget(bmiTarget)}
                  clearTextOnFocus
                />
              </View>
              {/*
              <View style={styles.unitContainInput}>
                <Text style={styles.unitTitle}></Text>
              </View>
              */}
            </View>
            {/*end input contain*/}
          </View>
          {/*end from contain*/}

          {/*This is result contain*/}
          <View style={styles.resultContain}>

            <View style={styles.resultTitle}>
              <Text style={styles.resultTitleText}>BMI</Text>
              <Text style={styles.resultTitleDesc}>({t('body_max_index')})</Text>
            </View>

            <View style={styles.resultContent}>
              <Text style={styles.result}>{bmi}</Text>
              <View style={styles.unitContain}>
                <Text style={styles.unit}>{unit}</Text>
                <Text style={styles.superUnit}>{superUnit}</Text>
              </View>
            </View>
            <Text style={styles.rateContent}>BMI: {rate}</Text>
          </View>
          {/*End result contain*/}

          {/*This is result contain*/}
          <View style={styles.resultContain}>

            <TouchableOpacity onPress = {showContent}>
              <View style={styles.resultTitle}>
                <Text style={styles.resultTitleText}>BSA</Text>
                <Text style={styles.resultTitleDesc}>({t('body_suface-area')})</Text>
                <FontAwesome name={iconNameBsa} size={24} color="white" style={styles.icons}/>
              </View>
            </TouchableOpacity>

            {
              show ?
                <View style={styles.resultContent}>
                  <Text style={styles.result}>{bsa}</Text>
                  <View style={styles.unitContain}>
                    <Text style={styles.unit}>m</Text>
                    <Text style={styles.superUnit}>2</Text>
                  </View>
                </View>
              : null
            }

          </View>
          {/*End result contain*/}

          {/*This is result contain*/}
          <View style={styles.resultContain}>

            <TouchableOpacity onPress = {showWeightContent}>
              <View style={styles.resultTitle}>
                <Text style={styles.resultTitleText}>BMI {bmiTarget}</Text>
                <Text style={styles.resultTitleDesc}>({t('target_weight')})</Text>
                <FontAwesome name={iconNameWeight} size={24} color="white" style={styles.icons}/>
              </View>
            </TouchableOpacity>

            {
              showWeight ?
                <View style={styles.resultContent}>
                  <Text style={styles.result}>{weightTarget}</Text>
                  <View style={styles.unitContain}>
                    <Text style={styles.unit}>kg</Text>
                    <Text style={styles.superUnit}></Text>
                  </View>
                </View>
              : null
            }
          </View>
          {/*End result contain*/}

          <View style={styles.formInfo}>
            <Text style={styles.titleInfo}>{t('advice')}</Text>
            <Text style={styles.contentInfo}>{t('advice_desc')}</Text>
          </View>

          <View style={styles.formInfo}>
            <Text style={styles.titleInfo}>{t('Formula')}</Text>
            <Text style={styles.contentInfo}>{t('Formula_desc_1')}</Text>
            <Text style={styles.contentInfo}>{t('Formula_desc_2')}</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>

    </ScrollView>

    <View>
      <AdMob />
    </View>
    </View>
  )
}
