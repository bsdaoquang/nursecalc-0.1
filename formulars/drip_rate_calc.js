import React, {useState} from 'react'
import {View, Text, TextInput, StyleSheet, KeyboardAvoidingView,
        TouchableWithoutFeedback, TouchableOpacity, Keyboard, ScrollView,
        Alert, Button
        } from 'react-native'
import {styles} from '../styles_global/styles'
import { FontAwesome } from '@expo/vector-icons'
import AdMob from '../screens/admob_Screen'

import {t} from '../locales/index'

export default function DripReateCalc({navigation}){

  const [volume, setVolume] = useState(volume)
  const [drop_factor, setDropFactor] = useState(drop_factor)
  const [min, setMin] = useState(min)
  const [show, setShow] = useState(false)

  var unit, totalDrip, rates, infuPump

  if (volume != null && drop_factor != null && min != null) {
    totalDrip = volume * drop_factor
    rates = (totalDrip/min).toFixed(0)
    unit = t('gtts_min')

    infuPump = ((rates/drop_factor)*60).toFixed(1)
  }else {
    rates = ''
    unit = t('fill_out_required')
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
            <Text style={styles.headerTitle}>{t('drip_rates')}</Text>
            <Text style={styles.headerSubTitle}>{t('drip_rates_desc')}</Text>
          </View>
          {/*End header*/}

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
                  placeholder = '0'
                  keyboardType = 'number-pad'
                  clearTextOnFocus
                  onChangeText = {volume => setVolume(volume)}
                />
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
                <Text style={styles.titleInputText}>{t('drop_factor')}</Text>
              </View>

              <View style={styles.inputContent}>
                <TextInput
                  style={styles.input}
                  placeholder = '20'
                  keyboardType = 'number-pad'
                  clearTextOnFocus
                  onChangeText = {drop_factor => setDropFactor(drop_factor)}
                />
              </View>
              <View style={styles.unitContainInput}>
                <Text style={styles.unitTitle}>{t('gtts_ml')}</Text>
              </View>
            </View>
            {/*end input contain*/}
            </View>
            <View style={styles.infoContain}>
              <Text style={styles.infoText}>{t('drop_factor_desc')}</Text>
            </View>
          {/*end from contain*/}

          {/*This is form container*/}
          <View style={styles.formContain}>
            {/*This is input contain*/}
            <View style={styles.inputContain}>
              <View style={styles.titleInput}>
                <Text style={styles.titleInputText}>{t('time')}</Text>
              </View>

              <View style={styles.inputContent}>
                <TextInput
                  style={styles.input}
                  placeholder = '0'
                  keyboardType = 'number-pad'
                  clearTextOnFocus
                  onChangeText = {min => setMin(min)}
                />
              </View>
              <View style={styles.unitContainInput}>
                <Text style={styles.unitTitle}>{t('min')}</Text>
              </View>
            </View>
            {/*end input contain*/}
            </View>
          {/*end from contain*/}

          {/*This is resulr contain*/}
          <View style={styles.resultContain}>

            <View style={styles.resultTitle}>
              <Text style={styles.resultTitleText}>{t('iv_drip_rate')}</Text>
              <Text style={styles.resultTitleDesc}></Text>
            </View>

                <View style={styles.resultContent}>
                  <Text style={styles.result}>{rates}</Text>
                  <View style={styles.unitContain}>
                    <Text style={styles.unit}>{unit}</Text>
                    <Text style={styles.superUnit}></Text>
                  </View>
                </View>
          </View>

          {/*end result contain*/}
          {/*This is resulr contain*/}
          <View style={styles.resultContain}>

            <View style={styles.resultTitle}>
              <Text style={styles.resultTitleText}>{t('infusion_pump')}</Text>
              <Text style={styles.resultTitleDesc}></Text>
            </View>
              {
                rates > 0 ?
                  <View style={styles.resultContent}>
                    <Text style={styles.result}>{infuPump}</Text>
                    <View style={styles.unitContain}>
                      <Text style={styles.unit}>mL/hr</Text>
                      <Text style={styles.superUnit}></Text>
                    </View>
                  </View>
                : null
              }

          </View>

          {/*end result contain*/}

          {/*info contain*/}
          <View style={styles.infoContain}>
            <Text style={styles.infoTextLink} onPress={() => navigation.navigate('count_drops')}>{t('count_drops')}</Text>
          </View>

          <View style={styles.infoContain}>
            <TouchableOpacity onPress={showInfo}>
              <View style={styles.titleInfoContain}>
                <Text style={styles.titleInfo}>{t('info')}</Text>
                <FontAwesome name="angle-down" size={24} color='#777' style={{marginTop: 6}}/>
              </View>
            </TouchableOpacity>

            {
              //if show = true, show, null
              show ?
                <View style={styles.infoContent}>
                  <Text style={styles.infoText}>{t('drip_rates_info_desc')}</Text>
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
