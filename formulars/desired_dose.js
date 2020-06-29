import React, {useState} from 'react'
import {View, Text, TextInput, StyleSheet, KeyboardAvoidingView,
        TouchableWithoutFeedback, TouchableOpacity, Keyboard, ScrollView,
        Alert, Button
        } from 'react-native'
import {styles} from '../styles_global/styles'
import { FontAwesome } from '@expo/vector-icons'
import AdMob from '../screens/admob_Screen'

import {t} from '../locales/index'

export default function DesiredDose({}){

  const [odered, setOdered] = useState(odered)
  const [availableDose, setAvailableDose] = useState(availableDose)
  const [availableVolume, setAvailableVolume] = useState(availableVolume)
  const [show, setShow] = useState(false)

  var drawUpon = 0

  if (odered != null && availableDose != null && availableVolume != null) {
    drawUpon = ((odered/availableDose)*availableVolume).toFixed(1)
  }

  const showInfo = () => {
    setShow(!show)
  }
  return(
    <View style={styles.container}>
    <ScrollView>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

        <View style={styles.inner}>
          {/*This is header*/}
          <View style={styles.headerContain}>
            <Text style={styles.headerTitle}>{t('desired_dose')}</Text>
            <Text style={styles.headerSubTitle}>{t('desired_dose_desc')}</Text>
          </View>
          {/*End header*/}

          {/*This is form container*/}
          <View style={styles.formContain}>
            {/*This is input contain*/}
            <View style={styles.inputContain}>
              <View style={styles.titleInput}>
                <Text style={styles.titleInputText}>{t('odered_dose')}: </Text>
              </View>

              <View style={styles.inputContent}>
                <TextInput
                  style={styles.input}
                  placeholder = 'e.g 350mg'
                  keyboardType = 'number-pad'
                  onChangeText = {odered => setOdered(odered)}
                  clearTextOnFocus
                  value={odered}
                />
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
                <Text style={styles.titleInputText}>{t('Available_dose')}: </Text>
              </View>

              <View style={styles.inputContent}>
                <TextInput
                  style={styles.input}
                  placeholder = 'e.g 1000mg'
                  keyboardType = 'number-pad'
                  onChangeText = {availableDose => setAvailableDose(availableDose)}
                  clearTextOnFocus
                  value={availableDose}
                />
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
                <Text style={styles.titleInputText}>{t('Available_volume')}: </Text>
              </View>

              <View style={styles.inputContent}>
                <TextInput
                  style={styles.input}
                  placeholder = 'e.g 5ml'
                  keyboardType = 'number-pad'
                  onChangeText = {availableVolume => setAvailableVolume(availableVolume)}
                  clearTextOnFocus
                  value={availableVolume}
                />
              </View>
            </View>
            {/*end input contain*/}
          </View>
          {/*end from contain*/}

          {/*This is resulr contain*/}
          <View style={styles.resultContain}>

            <View style={styles.resultTitle}>
              <Text style={styles.resultTitleText}>{t('draw_up')}</Text>
              <Text style={styles.resultTitleDesc}></Text>
            </View>

            {
              //if drawUpon > 0 then show, null
              drawUpon > 0 ?
                <View style={styles.resultContent}>
                  <Text style={styles.result}>{drawUpon}</Text>
                  <View style={styles.unitContain}>
                    <Text style={styles.unit}>mL</Text>
                    <Text style={styles.superUnit}></Text>
                  </View>
                </View>
              : null
            }
          </View>

          <View style={styles.infoContain}>
            <TouchableOpacity onPress = {showInfo}>
              <View style={styles.titleInfoContain}>
                <Text style={styles.titleInfo}>{t('info')}</Text>
                <FontAwesome name="angle-down" size={24} color='#777' style={{marginTop: 6}}/>
              </View>
            </TouchableOpacity>

            {
              //if show = true, show, null
              show ?
                <View style={styles.infoContent}>
                  <Text style={styles.infoText}>{t('desired_info')}</Text>
                  <Text style={styles.infoText}>{t('desired_info_2')}</Text>
                  <Text style={styles.infoText}>{t('desired_info_3')}</Text>
                </View>
              : null
            }
          </View>
        </View>
      </TouchableWithoutFeedback>
      </ScrollView>
    </View>
  )
}
