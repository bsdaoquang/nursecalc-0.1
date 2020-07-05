import React, {useState} from 'react'
import {View, Text, TextInput, StyleSheet, KeyboardAvoidingView,
        TouchableWithoutFeedback, TouchableOpacity, Keyboard, ScrollView, Alert} from 'react-native'
import {styles} from '../styles_global/styles'
import { FontAwesome } from '@expo/vector-icons'
import AdMob from '../screens/admob_Screen'
import {AdMobInterstitial} from 'expo-ads-admob'

import {t} from '../locales/index'


export default function TimeFusion(){

  // const admobIntersitical = async () => {
  //     await AdMobInterstitial.setAdUnitID('ca-app-pub-6209888091137615/1207407441'); //'ca-app-pub-6209888091137615/1207407441'); 
  //     await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: false});
  //     await AdMobInterstitial.showAdAsync();
  //   }

  // admobIntersitical()

  //Khai báo các giá trị
  const [volume, setVolume] = useState(volume)
  const [rate, setRate]     = useState(rate)
  const [hour, setHour]     = useState(hour)
  const [minute, setMinute] = useState(minute)
  const [endHour, setEndHour] = useState(endHour)
  const [endMinute, setEndMinute] = useState(endMinute)
  const [showCalcTrans, setShowCalcTrans] = useState(false)

  var timeTrans = 0
  var timeHour = 0
  var timeMinute = 0
  var timeEndHour = 0
  var timeEndMinute = 0


  //condition review:
  if (hour < 0 || hour > 23) {
    Alert.alert('Giờ bạn nhập không đúng, vui lòng xem lại')
  }
  if (minute < 0 || minute > 59) {
    Alert.alert('Phút bạn nhập không đúng, vui lòng xem lại')
  }
  if (volume > 0 && rate > 0) {
    //tính thời gian
    timeTrans = ((volume*20)/rate).toFixed(0)

    timeMinute = (timeTrans%60)
		timeHour = (timeTrans - timeMinute)/60

    timeEndHour = parseInt(hour) + timeHour
		timeEndMinute = parseInt(minute) + timeMinute*1

		if (timeEndHour > 23) {
			timeEndHour = timeEndHour -	24
		}
		if (timeEndMinute > 59) {
			timeEndMinute = timeEndMinute - 60
			timeEndHour += 1
		}

  }

  if (showCalcTrans == true) {

    if (endHour > 23 || endHour < 0) {
      Alert.alert('Giờ ngưng không đúng, vui lòng xem lại')
    }
    if (endMinute > 59 || endMinute < 0) {
      Alert.alert('Phút ngưng không đúng, vui lòng xem lại')
    }
    if (endHour != null && endMinute != null) {
      //Calculator
      var hourTrans = parseInt(endHour) - parseInt(hour)
      var minuteTrans = parseInt(endMinute) - parseInt(minute)

      if (hourTrans < 0) {
        hourTrans += 24
      }

      if (minuteTrans < 0) {
        minuteTrans += 60
        hourTrans -= 1
      }

      var countTimeTrans = hourTrans * 60 + minuteTrans
      var volumeTransed = ((countTimeTrans * rate)/20).toFixed(0)

      var infusedVolume = parseInt(volume) - volumeTransed

      if (infusedVolume <= 0) {
        volumeTransed = volume
        infusedVolume = 0
      }
    }

  }
  //Calculator volume transfused
  const volumTransedCalc = () => {
    setShowCalcTrans(!showCalcTrans)
  }

  return(
    <View style={styles.container}>
    <ScrollView>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>

          {/*This is header*/}
          <View style={styles.headerContain}>
            <Text style={styles.headerTitle}>{t('infusion')}</Text>
            <Text style={styles.headerSubTitle}>{t('infusion_time')}</Text>
          </View>
          {/*End header*/}

          {/*This is description*/}
          {/*End description*/}

          {/*This is form container*/}
          <View style={styles.formContain}>
            {/*This is input contain*/}
            <View style={styles.inputContain}>
              <View style={styles.titleInput}>
                <Text style={styles.titleInputText}>{t('volume')}</Text>
              </View>

              <View style={styles.inputContent}>
                <TextInput
                  style={styles.input}
                  placeholder = '0 ml'
                  keyboardType = 'number-pad'
                  onChangeText = {volume => setVolume(volume)}
                  clearTextOnFocus
                />

                {
                  volume <= 0 || volume > 500?
                    <Text style={styles.alertText}>{t('error_empty')} </Text>
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
                <Text style={styles.titleInputText}>{t('drip_rates')}</Text>
              </View>

              <View style={styles.inputContent}>
                <TextInput
                  style={styles.input}
                  placeholder = '30'
                  keyboardType = 'number-pad'
                  onChangeText = {rate => setRate(rate)}
                  clearTextOnFocus
                />
                {
                  rate <= 0 ?
                    <Text style={styles.alertText}>{t('not_empty')}</Text>
                  : null
                }
              </View>

              <View style={styles.unitContainInput}>
                <Text style={styles.unitTitle}>{t('gtts_min')}</Text>
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
                <Text style={styles.titleInputText}>{t('infusion_start')}</Text>
                <Text style={styles.titleInputDesc}>{t('infusion_start_desc')}</Text>
              </View>

              <View style={styles.inputContent}>
                <TextInput
                  style={styles.input}
                  placeholder = '0'
                  keyboardType = 'number-pad'
                  onChangeText = {hour => setHour(hour)}
                  clearTextOnFocus
                />
                {
                  hour < 0 ?
                    <Text style={styles.alertText}>{t('error_empty')}</Text>
                  : null
                }
              </View>

              <Text style={styles.headerTitle}>:</Text>
              <View style={styles.inputContent}>
                <TextInput
                  style={styles.input}
                  placeholder = '0'
                  keyboardType = 'number-pad'
                  onChangeText = {minute => setMinute(minute)}
                  clearTextOnFocus
                />
                {
                  minute < 0 ?
                    <Text style={styles.alertText}>{t('error_empty')}</Text>
                  : null
                }
              </View>

            </View>
            {/*end input contain*/}
          </View>
          {/*end from contain*/}

          {/*This is form container*/}
          <TouchableOpacity style={styles.buttonDesc} onPress={volumTransedCalc}>
            <Text style={styles.titleInputText}>{t('total_volume_calc')}</Text>
            <FontAwesome name='angle-down' style={styles.icons} color='#777' size ={24}/>
          </TouchableOpacity>

          <View style={styles.formInfo}>
            <Text style={styles.contentInfo}>{t('total_volume_calc')}</Text>
          </View>
          {
            showCalcTrans ?
              <View style={styles.formContain}>
                {/*This is input contain*/}
                <View style={styles.inputContain}>
                  <View style={styles.titleInput}>
                    <Text style={styles.titleInputText}>{t('end')}</Text>
                    <Text style={styles.titleInputDesc}>{t('total_volume_calc')}</Text>
                  </View>

                  <View style={styles.inputContent}>
                    <TextInput
                      style={styles.input}
                      placeholder = '0'
                      keyboardType = 'number-pad'
                      onChangeText = {endHour => setEndHour(endHour)}
                      clearTextOnFocus
                    />
                    {
                      endHour < 0 ?
                        <Text style={styles.alertText}>{t('error_empty')}</Text>
                      : null
                    }
                  </View>

                  <Text style={styles.headerTitle}>:</Text>
                  <View style={styles.inputContent}>
                    <TextInput
                      style={styles.input}
                      placeholder = '0'
                      keyboardType = 'number-pad'
                      onChangeText = {endMinute => setEndMinute(endMinute)}
                      clearTextOnFocus
                    />
                    {
                      endMinute < 0 ?
                        <Text style={styles.alertText}>{t('error_empty')}</Text>
                      : null
                    }
                  </View>

                </View>
                {/*end input contain*/}
              </View>

            : null
          }

          {/*This is resulr contain*/}
          {
            hour == null || minute == null ? null
            :
              <View style={styles.resultContain}>
                <View style={styles.resultTitle}>
                  <Text style={styles.resultTitleText}>{t('infusion_time')}</Text>
                </View>
                <Text style={styles.rateContent}>{t('time')}: {timeHour} h {timeMinute}, {t('end')}: </Text>
                <View style={styles.resultContent}>
                  <Text style={styles.result}>{timeEndHour} : {timeEndMinute}</Text>
                </View>
              </View>
          }
          {/*end result contain*/}

          {/*This is resulr contain*/}
          {
            showCalcTrans?
              <View style={styles.resultContain}>
                <View style={styles.resultTitle}>
                  <Text style={styles.resultTitleText}>{t('volume_translated')}</Text>
                </View>

                <View style={styles.resultContent}>
                  <Text style={styles.result}>{volumeTransed}</Text>
                  <Text style={styles.unit}>mL</Text>
                </View>

                <Text style = {styles.unit}>{t('volume_rest')}</Text>
                <View style={styles.resultContent}>
                  <Text style={styles.result}>{infusedVolume}</Text>
                  <Text style={styles.unit}>mL</Text>
                </View>
              </View>
              :
              null
          }
          {/*end result contain*/}

        </View>
      </TouchableWithoutFeedback>
    </ScrollView>

    <View>
      <AdMob />
    </View>
    </View>
  )
}
