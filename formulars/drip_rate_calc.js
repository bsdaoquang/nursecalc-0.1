import React, {useState} from 'react'
import {View, Text, TextInput, StyleSheet, KeyboardAvoidingView,
        TouchableWithoutFeedback, TouchableOpacity, Keyboard, ScrollView,
        Alert, Button
        } from 'react-native'
import {styles} from '../styles_global/styles'
import { FontAwesome } from '@expo/vector-icons'
import AdMob from '../screens/admob_Screen'

export default function DripReateCalc({navigation}){

  const [volume, setVolume] = useState(volume)
  const [drop_factor, setDropFactor] = useState(drop_factor)
  const [min, setMin] = useState(min)
  const [show, setShow] = useState(false)

  var unit, totalDrip, rates, infuPump

  if (volume != null && drop_factor != null && min != null) {
    totalDrip = volume * drop_factor
    rates = (totalDrip/min).toFixed(0)
    unit = 'giọt/phút'

    infuPump = ((rates/drop_factor)*60).toFixed(1)
  }else {
    rates = ''
    unit = 'Nhập đầy đủ thông tin để tính'
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
            <Text style={styles.headerSubTitle}>Tốc độ truyền dịch để truyền hết 1 lượng dịch</Text>
          </View>
          {/*End header*/}

          {/*This is form container*/}
          <View style={styles.formContain}>
            {/*This is input contain*/}
            <View style={styles.inputContain}>
              <View style={styles.titleInput}>
                <Text style={styles.titleInputText}>Lượng dịch</Text>
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
                <Text style={styles.titleInputText}>Hệ số giọt</Text>
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
                <Text style={styles.unitTitle}>giọt/mL</Text>
              </View>
            </View>
            {/*end input contain*/}
            </View>
            <View style={styles.infoContain}>
              <Text style={styles.infoText}>Thông tin này thường được ghi trên bao bì hoặc dây truyền dịch</Text>
            </View>
          {/*end from contain*/}

          {/*This is form container*/}
          <View style={styles.formContain}>
            {/*This is input contain*/}
            <View style={styles.inputContain}>
              <View style={styles.titleInput}>
                <Text style={styles.titleInputText}>Thời gian truyền</Text>
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
                <Text style={styles.unitTitle}>phút</Text>
              </View>
            </View>
            {/*end input contain*/}
            </View>
          {/*end from contain*/}

          {/*This is resulr contain*/}
          <View style={styles.resultContain}>

            <View style={styles.resultTitle}>
              <Text style={styles.resultTitleText}>Tốc độ truyền</Text>
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

            <Text style={styles.infoTextLink} onPress={() => navigation.navigate('Máy đếm giọt dịch truyền')}>Sử dụng máy đếm giọt</Text>

          <View style={styles.infoContain}>
            <TouchableOpacity onPress={showInfo}>
              <View style={styles.titleInfoContain}>
                <Text style={styles.titleInfo}>Thông tin</Text>
                <FontAwesome name="angle-down" size={24} color='#777' style={{marginTop: 6}}/>
              </View>
            </TouchableOpacity>

            {
              //if show = true, show, null
              show ?
                <View style={styles.infoContain}>
                  <Text style={styles.infoText}>Một số thuốc sử dụng qua đường truyền tĩnh mạch cần tính chính xác liều lượng sử dụng hoặc chia nhỏ liều thuốc trong nhi khoa</Text>
                </View>
              : null
            }
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
