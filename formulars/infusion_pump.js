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


export default function InfusionPump({navigation}){

  admobIntersititial()
  const [weight, setWeight] = useState(weight)
  const [thuoc, setThuoc] = useState(thuoc)
  const [dich, setDich] = useState(dich)
  const [lieuDung, setLieuDung] = useState(lieuDung)
  const [showResult, setShowResult] = useState(false)

  var tocDoTruyen = 0

  if (weight != null && thuoc != null && dich != null && lieuDung != null) {
    if (parseInt(weight) > 250) {
      Alert.alert('weight to high')
      setWeight('')
    }else{
      //Thỏa các điều kiện, bắt đầu tính toán
				//1. nồng độ thuốc = luongthuoc * 1000 / luongdich -> mcg/ml
				var nongDoThuoc = (thuoc*1000)/(dich*1)

				//2. tốc độ truyền ml/phút = lieudung*cannang / nongDoThuoc

				var tocDomLphut = ((lieuDung*weight)/nongDoThuoc).toFixed(2)

				//tốc độ truyền bơm tiêm điện ml/giờ
				tocDoTruyen = (tocDomLphut*60).toFixed(1)

				//tốc độ truyền giọ/phút = tocdomlphut*20
				var giotPhut = (tocDomLphut * 20).toFixed(0)
    }
  }

  return(
    <View style={styles.container}>
      <ScrollView>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          {/*This is header*/}
          <View style={styles.headerContain}>
            <Text style={styles.headerTitle}>{t('infusion_pump')}</Text>
            <Text style={styles.headerSubTitle}>{t('infusion_pump_desc')}</Text>
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
                  weight < 0 || weight > 200?
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
          {
            dich > 50 ?
              <View style={styles.formInfo}>
                <Text style={styles.contentInfo}>{t('volume_50')}</Text>
              </View>
            : null
          }

          {/*This is form container*/}
          <View style={styles.formContain}>
            {/*This is input contain*/}
            <View style={styles.inputContain}>
              <View style={styles.titleInput}>
                <Text style={styles.titleInputText}>{t('dose')}</Text>
              </View>

              <View style={styles.inputContent}>
                <TextInput
                  style={styles.input}
                  placeholder = 'e.g 15 mcg/kg/phút'
                  keyboardType = 'number-pad'
                  onChangeText = {lieuDung => setLieuDung(lieuDung)}
                  clearTextOnFocus
                  value = {lieuDung}
                />
                {
                  lieuDung < 0 ?
                    <Text style={styles.alertText}>{t('error_empty')}</Text>
                  : null
                }
              </View>
              <View style={styles.unitContainInput}>
                <Text style={styles.unitTitle}>mcg/kg/p</Text>
              </View>
            </View>
            {/*end input contain*/}
          </View>
          {/*end from contain*/}

          {/*This is resulr contain*/}
          {
            tocDoTruyen > 0 && dich <= 50?

              <View style={styles.resultContain}>

                <View style={styles.resultTitle}>
                  <Text style={styles.resultTitleText}>{t('infusion_pump')}</Text>
                  <Text style={styles.resultTitleDesc}></Text>
                </View>

                <View style={styles.resultContent}>
                  <Text style={styles.result}>{tocDoTruyen}</Text>
                  <View style={styles.unitContain}>
                    <Text style={styles.unit}>{t('ml_h')}</Text>
                    <Text style={styles.superUnit}></Text>
                  </View>
                </View>
              </View>

            : null
          }


          {
            dich > 50 ?
              <View style={styles.resultContain}>
                <View style={styles.resultTitle}>
                  <Text style={styles.resultTitleText}>{t('iv_infusion')}</Text>
                  <Text style={styles.resultTitleDesc}></Text>
                </View>

                <View style={styles.resultContent}>
                  <Text style={styles.result}>{giotPhut}</Text>
                  <View style={styles.unitContain}>
                    <Text style={styles.unit}>{t('gtts_min')}</Text>
                    <Text style={styles.superUnit}></Text>
                  </View>
                </View>
              </View>
            : null
          }
          {/*end result contain*/}

          {
            dich > 50 ?
              <TouchableOpacity onPress = {() => navigation.navigate('bmi_calc')}
              style={styles.descContent}>
                <Text style={styles.unitTitle}>{t('count_drops')}</Text>
              </TouchableOpacity>
            :null
          }

          <TouchableOpacity onPress = {() => navigation.navigate('dose_calc')}
          style={styles.btnLink}>
            <Text style={styles.link}>{t('dose_calc_desc')}?</Text>
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
