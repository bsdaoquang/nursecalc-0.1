import React, {useState} from 'react'
import {View, Text, TextInput, StyleSheet, KeyboardAvoidingView,
        TouchableWithoutFeedback, TouchableOpacity, Keyboard, ScrollView} from 'react-native'
import {styles} from '../styles_global/styles'
import { FontAwesome } from '@expo/vector-icons'
import AdMob from '../screens/admob_Screen'

export default function OxyVolCalc(){

    const [luuLuong, setLuuLuong] = useState(0)
    const [day, setDay] = useState(0)
    const [hour, setHour] = useState(0)
    const [min, setMin] = useState(0)
    var sumMin, sumVol

    if (min > 59 || min === '' || min < 0) {
      setMin(0)
    }
    if (hour > 23 || hour === '' || hour < 0) {
      setHour(0)
    }
    if (day === '' || day < 0) {
      setDay(0)
    }

    if (luuLuong > 15 || luuLuong < 0 || luuLuong === '') {
      setLuuLuong(0)
    }else{
      sumMin = (day*24*60) + (hour*60) + min*1
      sumVol = sumMin * luuLuong
    }

  return(
    <View style={styles.container}>
    <ScrollView>
    <KeyboardAvoidingView>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>

          {/*This is header*/}
          <View style={styles.headerContain}>
            <Text style={styles.headerTitle}>Tính thể tích Oxy</Text>
            <Text style={styles.headerSubTitle}>Tổng lượng oxy đã sử dụng</Text>
          </View>
          {/*End header*/}

          {/*This is form container*/}
          <View style={styles.formContain}>
            {/*This is input contain*/}
            <View style={styles.inputContain}>
              <View style={styles.titleInput}>
                <Text style={styles.titleInputText}>Lưu lượng thở</Text>
              </View>

              <View style={styles.inputContent}>
                <TextInput
                  style={styles.input}
                  placeholder = '0'
                  keyboardType = 'number-pad'
                  onChangeText = {luuLuong => setLuuLuong(luuLuong)}
                  value = {luuLuong}
                />
                {
                  luuLuong == '' || luuLuong > 15 || luuLuong < 0?
                    <Text style={styles.errorText}>Kiểm tra lại</Text>
                  : null
                }

              </View>

              <View style={styles.unitContainInput}>
                <Text style={styles.unitTitle}>lít/phút</Text>
              </View>
            </View>
            {/*end input contain*/}
          </View>
          {/*end from contain*/}

          {/*This is form container*/}
          <View style={styles.formContain}>
            {/*This is input contain*/}
            <Text style={styles.titleInputText}>Thời gian sử dụng</Text>

            <View style={styles.inputContain}>
              <View style={{flexDirection: 'row', flex: 3}}>
                <TextInput
                  style={styles.input}
                  placeholder = '0'
                  keyboardType = 'number-pad'
                  onChangeText = {day => setDay(day)}
                  value = {day}
                />
                <Text style={styles.unitTitle}>ngày</Text>
              </View>

              <View style={{flexDirection: 'row', flex: 3}}>
                <TextInput
                  style={styles.input}
                  placeholder = '0'
                  keyboardType = 'number-pad'
                  onChangeText = {hour => setHour(hour)}
                  value = {hour}
                />
                <Text style={styles.unitTitle}>giờ</Text>
              </View>

              <View style={{flexDirection: 'row', flex: 3}}>
                <TextInput
                  style={styles.input}
                  placeholder = '0'
                  keyboardType = 'number-pad'
                  onChangeText = {min => setMin(min)}
                  value = {min}
                />
                <Text style={styles.unitTitle}>phút</Text>
              </View>
            </View>

            {/*end input contain*/}
          </View>
          {/*end from contain*/}


          {/*This is result contain*/}
          <View style={styles.resultContain}>
              <View style={styles.resultTitle}>
              <Text style={styles.resultTitleText}>Tổng : </Text>
              <Text style={styles.result}>{sumVol}</Text>
              <Text style={styles.unit}>lít</Text>
            </View>
          </View>
          {/*End result contain*/}

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
