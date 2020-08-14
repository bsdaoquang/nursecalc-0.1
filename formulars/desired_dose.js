import React, {useState} from 'react'
import {View, Text, TextInput, StyleSheet, KeyboardAvoidingView,
        TouchableWithoutFeedback, TouchableOpacity, Keyboard, ScrollView,
        Alert, Button
        } from 'react-native'
import {styles} from '../styles_global/styles'
import { FontAwesome } from '@expo/vector-icons'
import AdMob from '../screens/admob_Screen'

export default function DesiredDose(){

  const [odered, setOdered] = useState(odered)
  const [availableDose, setAvailableDose] = useState(availableDose)
  const [availableVolume, setAvailableVolume] = useState(availableVolume)
  const [show, setShow] = useState(false)

  var drawUpon = 0

  if (odered != '' && availableDose != '' && availableVolume != '') {
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
            <Text style={styles.headerSubTitle}>Chia nhỏ liều thuốc trong Nhi khoa</Text>
          </View>
          {/*End header*/}

          {/*This is form container*/}
          <View style={styles.formContain}>
            {/*This is input contain*/}
            <View style={styles.inputContain}>
              <View style={styles.titleInput}>
                <Text style={styles.titleInputText}>Liều mong muốn: </Text>
              </View>

              <View style={styles.inputContent}>
                <TextInput
                  style={styles.input}
                  placeholder = 'vd 350mg'
                  keyboardType = 'number-pad'
                  onChangeText = {odered => setOdered(odered)}
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
                <Text style={styles.titleInputText}>Liều sẵn có: </Text>
              </View>

              <View style={styles.inputContent}>
                <TextInput
                  style={styles.input}
                  placeholder = 'vd 1000mg'
                  keyboardType = 'number-pad'
                  onChangeText = {availableDose => setAvailableDose(availableDose)}
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
                <Text style={styles.titleInputText}>Pha trong: </Text>
              </View>

              <View style={styles.inputContent}>
                <TextInput
                  style={styles.input}
                  placeholder = 'vd 5ml'
                  keyboardType = 'number-pad'
                  onChangeText = {availableVolume => setAvailableVolume(availableVolume)}
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
              <Text style={styles.resultTitleText}>Liều khả dụng</Text>
              <Text style={styles.resultTitleDesc}>Lượng thuốc cần rút</Text>
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
            <View style={styles.titleInfoContain}>
              <Text style={styles.titleInfo}>Công thức</Text>
            </View>

            <View style={styles.infoContent}>
              <Text style={styles.infoText}>{'Thuốc cần rút = (Liều mong muốn/liều có sẵn) x lượng thuốc'}</Text>
            </View>
          </View>
        </View>

      </TouchableWithoutFeedback>
      </ScrollView>

      <View style={styles.bottomBanner}>
        <AdMob />
      </View>

    </View>

  )
}
