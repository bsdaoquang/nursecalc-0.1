import React, {useState} from 'react'
import {View, Text, TextInput, StyleSheet, KeyboardAvoidingView,
        TouchableWithoutFeedback, TouchableOpacity, Keyboard, ScrollView,
        Alert, Button
        } from 'react-native'
import {styles} from '../styles_global/styles'
import { FontAwesome } from '@expo/vector-icons'
import AdMob from '../screens/admob_Screen'
import {t} from '../locales/index'
import {admobIntersititial} from '../screens/admob_Screen'


export default function DoseCalc({navigation}){

  admobIntersititial()
  const [weight, setWeight] = useState(weight)
  const [thuoc, setThuoc] = useState(thuoc)
  const [dich, setDich] = useState(dich)
  const [tocDo, settocDo] = useState(tocDo)
  const [showResult, setShowResult] = useState(false)

  var tocDoTruyen = 0

  if (weight != null && thuoc != null && dich != null && tocDo != null) {
    if (weight > 250) {
      Alert.alert('weight to high')
      setWeight('')
    }else{
      //Thỏa các điều kiện, bắt đầu tính toán
				//1. nồng độ thuốc = luongthuoc * 1000 / luongdich -> mcg/ml
			var nongDoThuoc = (thuoc*1000)/(dich*1)
			var lieuThuoc = ((tocDo * nongDoThuoc)/(weight*60)).toFixed(1)
    }
  }

  return(
    <View style={styles.container}>
      <ScrollView>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          {/*This is header*/}
          <View style={styles.headerContain}>
            <Text style={styles.headerTitle}>{t('dose_calc')}</Text>
            <Text style={styles.headerSubTitle}>{t('dose_calc_desc')}</Text>
          </View>
          {/*End header*/}

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
                  placeholder = 'e.g 50Kg'
                  keyboardType = 'number-pad'
                  onChangeText = {weight => setWeight(weight)}
                  clearTextOnFocus
                  value={weight}
                />
                {
                  weight < 0 ?
                    <Text style={styles.alertText}>{t('error_empty')}</Text>
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
                <Text style={styles.titleInputText}>{t('dilution')}</Text>
              </View>

              <View style={styles.inputContent}>
                <TextInput
                  style={styles.input}
                  placeholder = 'e.g 200mg'
                  keyboardType = 'number-pad'
                  onChangeText = {thuoc => setThuoc(thuoc)}
                  clearTextOnFocus
                  value = {thuoc}
                />
                {
                  thuoc < 0 ?
                    <Text style={styles.alertText}>{t('error_empty')}</Text>
                  : null
                }
              </View>

              <Text style={styles.unitTitle}>mg/</Text>
              <View style={styles.inputContent}>
                <TextInput
                  style={styles.input}
                  placeholder = 'e.g 50mL'
                  keyboardType = 'number-pad'
                  onChangeText = {dich => setDich(dich)}
                  clearTextOnFocus
                  value = {dich}
                />
                {
                  dich < 0 ?
                    <Text style={styles.alertText}>{t('error_empty')}</Text>
                  : null
                }
              </View>
              <View style={styles.unitContainInput}>
                <Text style={styles.unitTitle}>mL</Text>
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
                <Text style={styles.titleInputText}>{t('rate')}</Text>
              </View>

              <View style={styles.inputContent}>
                <TextInput
                  style={styles.input}
                  placeholder = 'e.g 15mL/hr'
                  keyboardType = 'number-pad'
                  onChangeText = {tocDo => settocDo(tocDo)}
                  clearTextOnFocus
                  value = {tocDo}
                />
                {
                  tocDo < 0 ?
                    <Text style={styles.alertText}>{t('error_empty')}</Text>
                  : null
                }
              </View>
              <View style={styles.unitContainInput}>
                <Text style={styles.unitTitle}>mL/hr</Text>
              </View>
            </View>
            {/*end input contain*/}
          </View>
          {/*end from contain*/}

          {/*This is resulr contain*/}
          {
            lieuThuoc > 0?

              <View style={styles.resultContain}>

                <View style={styles.resultTitle}>
                  <Text style={styles.resultTitleText}>{t('dose')}</Text>
                  <Text style={styles.resultTitleDesc}></Text>
                </View>

                <View style={styles.resultContent}>
                  <Text style={styles.result}>{lieuThuoc}</Text>
                  <View style={styles.unitContain}>
                    <Text style={styles.unit}>{t('mcg_kg_min')}</Text>
                    <Text style={styles.superUnit}></Text>
                  </View>
                </View>
              </View>

            : null
          }

          <TouchableOpacity onPress = {() => navigation.navigate('infusion_pump')}
          style={styles.btnLink}>
            <Text style={styles.link}>{t('infusion_pump')}?</Text>
          </TouchableOpacity>

        </View>
      </TouchableWithoutFeedback>
      </ScrollView>

      <View>
        <AdMob />
      </View>

    </View>
  )
}
