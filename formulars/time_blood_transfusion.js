import React, {useState} from 'react'
import {View, Text, TextInput, StyleSheet, KeyboardAvoidingView,
        TouchableWithoutFeedback, TouchableOpacity, Keyboard, ScrollView, Alert} from 'react-native'
import {styles} from '../styles_global/styles'
import { FontAwesome } from '@expo/vector-icons'


export default function TimeBloodTransfusion(){

  //Khai báo các giá trị
  const [volume, setVolume] = useState(volume)
  const [rate, setRate]     = useState(rate)
  const [hour, setHour]     = useState(hour)
  const [minute, setMinute] = useState(minute)
  const [endHour, setEndHour] = useState(endHour)
  const [endMinute, setEndMinute] = useState(endMinute)
  const [showCalcTrans, setShowCalcTrans] = useState(false)
  const [showNote, setShowNote] = useState(false)
  const [showGuide, setShowGuide] = useState(false)

  var timeTrans = 0
  var timeHour = 0
  var timeMinute = 0
  var timeEndHour = 0
  var timeEndMinute = 0
  var timePUSV = 0

  const btnShowNote = () => {
    setShowNote(!showNote)
    setShowGuide(false)
  }

  const btnShowGuide = () => {
    setShowGuide(!showGuide)
    setShowNote(false)
  }

  //condition review:
  if (hour < 0 || hour > 23) {
    Alert.alert('Giờ bạn nhập không đúng, vui lòng xem lại')
  }
  if (minute < 0 || minute > 59) {
    Alert.alert('Phút bạn nhập không đúng, vui lòng xem lại')
  }
  if (volume > 0 && rate > 0) {
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
    <ScrollView>
    <KeyboardAvoidingView style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>

          {/*This is header*/}
          <View style={styles.headerContain}>
            <Text style={styles.headerTitle}>Blood Tranfusion</Text>
            <Text style={styles.headerSubTitle}>Tính thời gian truyền máu</Text>
          </View>
          {/*End header*/}

          {/*This is description*/}
          <View style={styles.description}>
            <View style={styles.descButton}>
              <TouchableOpacity style={styles.buttonDesc} onPress = {btnShowNote}>
                <Text style={styles.buttonText}> Lưu ý </Text>
                <FontAwesome name = 'angle-down' size ={24} color = '#ccc' style={styles.icons}/>
              </TouchableOpacity>

              <TouchableOpacity style={styles.buttonDesc} onPress = {btnShowGuide}>
                <Text style={styles.buttonText}>Sử dụng</Text>
                <FontAwesome name = 'angle-down' size ={24} color = '#ccc' style={styles.icons}/>
              </TouchableOpacity>
            </View>
          </View>

            {
              showNote ?
                <View style={styles.descContent}>
                  <Text style={styles.contentInfo}>Cần tuân thủ các nguyên tắc truyền máu và theo dõi sát bệnh nhân trong quá trình truyền máu</Text>
                </View>
              : null
            }

            {
              showGuide ?
                <View style={styles.descContent}>
                  <Text style={styles.contentInfo}>Sử dụng để tính nhanh thời gian truyền máu, sử dụng dây truyền máu loại 20 giọt = 1mL</Text>
                </View>
              : null
            }
            {/*End description*/}

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
                  clearTextOnFocus
                />

                {
                  volume <= 0 || volume > 500?
                    <Text style={styles.alertText}>Lỗi </Text>
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
                <Text style={styles.titleInputText}>Tốc độ</Text>
              </View>

              <View style={styles.inputContent}>
                <TextInput
                  style={styles.input}
                  placeholder = '0'
                  keyboardType = 'number-pad'
                  onChangeText = {rate => setRate(rate)}
                  clearTextOnFocus
                />
                {
                  rate <= 0 ?
                    <Text style={styles.alertText}>Không để trống</Text>
                  : null
                }
              </View>

              <View style={styles.unitContainInput}>
                <Text style={styles.unitTitle}>g/p</Text>
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
                <Text style={styles.titleInputDesc}>Giờ bắt đầu truyền</Text>
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
                    <Text style={styles.alertText}>Lỗi</Text>
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
                    <Text style={styles.alertText}>Lỗi</Text>
                  : null
                }
              </View>

            </View>
            {/*end input contain*/}
          </View>
          {/*end from contain*/}

          <View style={styles.formInfo}>
            <Text style={styles.titleInfo}>Phản ứng sinh vật:</Text>
            <Text style={styles.contentInfo}>Cho chảy theo y lệnh 20ml, sau đó chảy chậm từ 8 – 10 g/p trong 5 phút.
            Nếu không có phản ứng gì, cho chảy theo y lệnh 20ml, sau đó cho chảy 8 – 10 g/p trong 5 phút.
            Ở đây sử dụng tốc độ 10 g/p</Text>
          </View>

          {/*This is form container*/}
          <TouchableOpacity style={styles.buttonDesc} onPress={volumTransedCalc}>
            <Text style={styles.titleInputText}>Tính lượng máu đã truyền</Text>
            <FontAwesome name='angle-down' style={styles.icons} color='#777' size ={24}/>
          </TouchableOpacity>

          <View style={styles.formInfo}>
            <Text style={styles.contentInfo}>Tính lượng máu đã truyền khi cần ngưng hoặc chuyển đi khoa khác</Text>
          </View>
          {
            showCalcTrans ?
              <View style={styles.formContain}>
                {/*This is input contain*/}
                <View style={styles.inputContain}>
                  <View style={styles.titleInput}>
                    <Text style={styles.titleInputText}>Giờ ngưng</Text>
                    <Text style={styles.titleInputDesc}>Tính lượng máu đã truyền</Text>
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
                        <Text style={styles.alertText}>Lỗi</Text>
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
                        <Text style={styles.alertText}>Lỗi</Text>
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
                <Text style={styles.rateContent}>Truyền xong lúc : </Text>
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
                  <Text style={styles.resultTitleText}>Lượng máu đã truyền</Text>
                </View>

                <View style={styles.resultContent}>
                  <Text style={styles.result}>{volumeTransed}</Text>
                  <Text style={styles.unit}>mL</Text>
                </View>

                <Text style = {styles.unit}>Lượng máu còn lại </Text>
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
    </KeyboardAvoidingView>
    </ScrollView>
  )
}
