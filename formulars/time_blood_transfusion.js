import React, {useState} from 'react'
import {View, Text, TextInput, StyleSheet, KeyboardAvoidingView,
        TouchableWithoutFeedback, TouchableOpacity, Keyboard, ScrollView, Alert} from 'react-native'
import {styles} from '../styles_global/styles'
import { FontAwesome } from '@expo/vector-icons'
import AdMob from '../screens/admob_Screen'

export default function TimeBloodTransfusion(){

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
  var timePUSV = 0

  //condition review:
  if (hour < 0 || hour > 23) {
    setHour('')
  }
  if (minute < 0 || minute > 59) {
    setMinute('')
  }
  if (endHour > 23 || endHour < 0) {
    setEndHour('')
  }
  if (endMinute > 59 || endMinute < 0) {
    setEndMinute('')
  }
  if (volume < 0) {
    setVolume('')
  }
  if (rate > 300 || rate < 0) {
    setRate('')
  }

  if (volume != '' && rate != '') {
    //tính thời gian
    timePUSV = (((400/parseInt(rate)) + 5)*2).toFixed(0)

    timeTrans = (((volume - 45)*20)/rate).toFixed(0)

    timeMinute = (timeTrans%60)
		timeHour = (timeTrans - timeMinute)/60

    timeEndHour = parseInt(hour) + timeHour
		timeEndMinute = parseInt(minute) + timeMinute*1 + timePUSV*1

		if (timeEndHour > 23) {
			timeEndHour = timeEndHour -	24
		}
		if (timeEndMinute > 59) {
			timeEndMinute = timeEndMinute - 60
			timeEndHour += 1
		}

  }else{
    timeHour = 0
    timeMinute = 0
  }

  if (showCalcTrans == true) {

    if (endHour > 23 || endHour < 0) {
      setEndHour('')
    }
    if (endMinute > 59 || endMinute < 0) {
      setEndMinute('')
    }
    if (endHour != '' && endMinute != '') {
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
    }else{
      timeEndHour = 0
      timeEndMinute = 0
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
            <Text style={styles.headerSubTitle}>Tính thời gian truyền máu và lượng máu đã truyền</Text>
          </View>
          {/*End header*/}

          {/*This is form container*/}
          <View style={styles.formContain}>
            {/*This is input contain*/}
            <View style={styles.inputContain}>
              <View style={styles.titleInput}>
                <Text style={styles.titleInputText}>Lượng máu</Text>
              </View>

              <View style={styles.inputContent}>
                <TextInput
                  style={styles.input}
                  placeholder = '0 ml'
                  keyboardType = 'number-pad'
                  onChangeText = {volume => setVolume(volume)}
                  value= {volume}
                />

                {
                  volume == ''?
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
                  placeholder = '0'
                  keyboardType = 'number-pad'
                  onChangeText = {rate => setRate(rate)}
                  value = {rate}
                />
                {
                  rate == ''?
                    <Text style={styles.errorText}>Lỗi</Text>
                  : null
                }
              </View>

              <View style={styles.unitContainInput}>
                <Text style={styles.unitTitle}>giọt/phút</Text>
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
                <Text style={styles.titleInputText}>Giờ truyền</Text>
              </View>

              <View style={styles.inputContent}>
                <TextInput
                  style={styles.input}
                  placeholder = '0'
                  keyboardType = 'number-pad'
                  onChangeText = {hour => setHour(hour)}
                  value = {hour}
                />
                {
                  hour == ''?
                    <Text style={styles.errorText}>Lỗi</Text>
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
                  value = {minute}
                />
                {
                  minute == '' ?
                    <Text style={styles.errorText}>Lỗi</Text>
                  : null
                }
              </View>

            </View>
            {/*end input contain*/}
          </View>
          {/*end from contain*/}

              <View style={styles.formInfo}>
                <Text style={styles.titleInfo}>Phản ứng sinh vật:</Text>
                <Text style={styles.infoText}>Cho chảy theo y lệnh 20ml, sau đó chảy chậm từ 8 – 10 g/p trong 5 phút. Nếu không có phản ứng gì, cho chảy theo y lệnh 20ml, sau đó cho chảy 8 – 10 g/p trong 5 phút. Ở đây sử dụng tốc độ 10 g/p</Text>
              </View>

          {/*This is form container*/}
          <TouchableOpacity style={styles.buttonDesc} onPress={volumTransedCalc}>
            <Text style={styles.titleInputText}>Tính lượng máu đã truyền</Text>
            <FontAwesome name='angle-down' style={styles.icons} color='#777' size ={24}/>
          </TouchableOpacity>

              <View style={styles.formInfo}>
                <Text style={styles.infoText}>Tính lượng máu đã truyền khi chuyển bệnh hoặc ngưng truyền</Text>
              </View>
          {
            showCalcTrans ?
              <View style={styles.formContain}>
                {/*This is input contain*/}
                <View style={styles.inputContain}>
                  <View style={styles.titleInput}>
                    <Text style={styles.titleInputText}>Giờ ngưng</Text>
                  </View>

                  <View style={styles.inputContent}>
                    <TextInput
                      style={styles.input}
                      placeholder = '0'
                      keyboardType = 'number-pad'
                      onChangeText = {endHour => setEndHour(endHour)}
                      value = {endHour}
                    />
                    {
                      endHour == '' ?
                        <Text style={styles.errorText}>Lỗi</Text>
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
                      value = {endMinute}
                    />
                    {
                      endMinute == '' ?
                        <Text style={styles.errorText}>Lỗi</Text>
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
                  <Text style={styles.resultTitleText}>Thời gian truyền máu</Text>
                </View>
                <Text style={styles.rateContent}>Phản ứng sinh vật: {timePUSV} phút</Text>

                <View style={styles.resultContent}>
                  <Text style={styles.rateContent}>Hết lúc : </Text>
                  <Text style={styles.result}>{timeEndHour} : {timeEndMinute}</Text>
                </View>
              </View>
          }
          {/*end result contain*/}

          {/*This is resulr contain*/}
          {
            showCalcTrans?
              <View style={styles.resultContain}>
                <View style={styles.resultContent}>
                  <Text style={styles.rateContent}>Lượng máu đã truyền: </Text>
                  <Text style={styles.result}>{volumeTransed}</Text>
                  <Text style={styles.unit}>mL</Text>
                </View>
                <View style={styles.resultContent}>
                  <Text style={styles.rateContent}>Còn lại : </Text>
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

      <View style={styles.bottomBanner}>
        <AdMob />
      </View>

    </View>
  )
}
