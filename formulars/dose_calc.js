import React, {useState} from 'react'
import {View, Text, TextInput, StyleSheet, KeyboardAvoidingView,
        TouchableWithoutFeedback, TouchableOpacity, Keyboard, ScrollView,
        Alert, Button
        } from 'react-native'
import {styles} from '../styles_global/styles'
import { FontAwesome } from '@expo/vector-icons'
import AdMob from '../screens/admob_Screen'

export default function DoseCalc({navigation}){

  const [weight, setWeight] = useState(weight)
  const [thuoc, setThuoc] = useState(thuoc)
  const [dich, setDich] = useState(dich)
  const [tocDo, settocDo] = useState(tocDo)
  const [showResult, setShowResult] = useState(false)

  var tocDoTruyen = 0

  if (weight > 150 || weight < 0){
    setWeight('')
  }
  if (dich < 0){
    setDich('')
  }
  if (thuoc < 0){
    setThuoc('')
  }
  if (tocDo < 0){
    settocDo('')
  }

  if (weight != '' && thuoc != '' && dich != '' && tocDo != '') {
			var nongDoThuoc = (thuoc*1000)/(dich*1)
			var lieuThuoc = ((tocDo * nongDoThuoc)/(weight*60)).toFixed(1)
    }
  

  return(
    <View style={styles.container}>
      <ScrollView>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          {/*This is header*/}
          <View style={styles.headerContain}>
            <Text style={styles.headerTitle}>Tính liều thuốc</Text>
            <Text style={styles.headerSubTitle}>Liều thuốc đang truyền bơm tiêm điện</Text>
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
                  value={weight}
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
                <Text style={styles.titleInputText}>Pha loãng</Text>
              </View>

              <View style={styles.inputContent}>
                <TextInput
                  style={styles.input}
                  placeholder = '0'
                  keyboardType = 'number-pad'
                  onChangeText = {thuoc => setThuoc(thuoc)}
                  value = {thuoc}
                />
                {
                  thuoc == '' ?
                    <Text style={styles.errorText}>Lỗi</Text>
                  : null
                }
              </View>

              <Text style={styles.unitTitle}>mg/</Text>
              <View style={styles.inputContent}>
                <TextInput
                  style={styles.input}
                  placeholder = '0'
                  keyboardType = 'number-pad'
                  onChangeText = {dich => setDich(dich)}
                  value = {dich}
                />
                {
                  dich == '' ?
                    <Text style={styles.errorText}>Lỗi</Text>
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
                <Text style={styles.titleInputText}>Tốc độ truyền</Text>
              </View>

              <View style={styles.inputContent}>
                <TextInput
                  style={styles.input}
                  placeholder = 'e.g 15mL/hr'
                  keyboardType = 'number-pad'
                  onChangeText = {tocDo => settocDo(tocDo)}
                  value = {tocDo}
                />
                {
                  tocDo == '' ?
                    <Text style={styles.errorText}>Lỗi</Text>
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
                  <Text style={styles.resultTitleText}>Liều đang truyền</Text>
                  <Text style={styles.resultTitleDesc}></Text>
                </View>

                <View style={styles.resultContent}>
                  <Text style={styles.result}>{lieuThuoc}</Text>
                  <View style={styles.unitContain}>
                    <Text style={styles.unit}>mcg/Kg/phút</Text>
                    <Text style={styles.superUnit}></Text>
                  </View>
                </View>
              </View>

            : null
          }

          <TouchableOpacity onPress = {() => navigation.navigate('Tính tốc độ truyền bơm tiêm điện')}
          style={styles.btnLink}>
            <Text style={styles.link}>Tính tốc độ truyền bơm tiêm điện?</Text>
          </TouchableOpacity>

        </View>
      </TouchableWithoutFeedback>
      </ScrollView>

      <View style={styles.bottomBanner}>
        <AdMob />
      </View>

    </View>
  )
}
