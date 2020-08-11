import React, {useState} from 'react'
import {View, Text, TextInput, StyleSheet, KeyboardAvoidingView,
        TouchableWithoutFeedback, TouchableOpacity, Keyboard, ScrollView,
        Alert, Button
        } from 'react-native'
import {styles} from '../styles_global/styles'
import { FontAwesome } from '@expo/vector-icons'
import AdMob from '../screens/admob_Screen'
import AdMobPublish from '../screens/admob_publisher';


export default function InfusionPump({navigation}){

  const [weight, setWeight] = useState(weight)
  const [thuoc, setThuoc] = useState(thuoc)
  const [dich, setDich] = useState(dich)
  const [lieuDung, setLieuDung] = useState(lieuDung)
  const [showResult, setShowResult] = useState(false)

  var tocDoTruyen = 0

  if (weight*1 > 150 || weight*1 < 0) {
    setWeight('')
  }
  if (dich*1 < 0){
    setDich('')
  }
  if (thuoc*1 < 0){
    setThuoc('')
  }
  if (lieuDung*1 < 0){
    setLieuDung('')
  }

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

        var timePump = (dich/tocDomLphut).toFixed(0)

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
            <Text style={styles.headerSubTitle}>Tính tốc độ truyền bơm tiêm điện</Text>
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
                  placeholder = 'e.g 50Kg'
                  keyboardType = 'number-pad'
                  onChangeText = {weight => setWeight(weight)}
                  clearTextOnFocus
                  value={weight}
                />
                {
                  weight == ''?
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
                  placeholder = 'e.g 200mg'
                  keyboardType = 'number-pad'
                  onChangeText = {thuoc => setThuoc(thuoc)}
                  clearTextOnFocus
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
                  placeholder = 'e.g 50mL'
                  keyboardType = 'number-pad'
                  onChangeText = {dich => setDich(dich)}
                  clearTextOnFocus
                  value = {dich}
                />
                {
                  dich == ''?
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
          {
            dich > 50 ?
              <View style={styles.formInfo}>
                <Text style={styles.contentInfo}>{'Thể tích cần truyền > 50mL, Tính tốc độ truyền tĩnh mạch'}</Text>
              </View>
            : null
          }

          {/*This is form container*/}
          <View style={styles.formContain}>
            {/*This is input contain*/}
            <View style={styles.inputContain}>
              <View style={styles.titleInput}>
                <Text style={styles.titleInputText}>Liều cần dùng</Text>
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
                  lieuDung == '' || lieuDung < 0 ?
                    <Text style={styles.errorText}>Lỗi</Text>
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
                <View style={styles.resultContent}>
                  <Text style={styles.unit}>Tốc độ: </Text>
                  <Text style={styles.result}>{tocDoTruyen}</Text>
                  <Text style={styles.unit}>mL/h ({Math.floor(timePump/60)} : {timePump%60})</Text>
                </View>
              </View>

            : null
          }


          {
            dich > 50 ?
              <View style={styles.resultContain}>
                <View style={styles.resultTitle}>
                  <Text style={styles.resultTitleText}>Truyền tĩnh mạch</Text>
                  <Text style={styles.resultTitleDesc}></Text>
                </View>

                <View style={styles.resultContent}>
                  <Text style={styles.result}>{giotPhut}</Text>
                  <View style={styles.unitContain}>
                    <Text style={styles.unit}>giọt/phút</Text>
                    <Text style={styles.superUnit}></Text>
                  </View>
                </View>
              </View>
            : null
          }
          {/*end result contain*/}

          {
            dich > 50 ?
              <TouchableOpacity onPress = {() => navigation.navigate('Máy đếm giọt dịch truyền')}>
                <Text style={styles.infoTextLink}>Sử dụng máy đếm giọt</Text>
              </TouchableOpacity>
            :null
          }

          <TouchableOpacity onPress = {() => navigation.navigate('Tính liều thuốc bơm tiêm điện')}
          style={styles.btnLink}>
            <Text style={styles.link}>Tính liều thuốc đang sử dụng?</Text>
          </TouchableOpacity>

          <AdMobPublish />
        </View>

      </TouchableWithoutFeedback>
      </ScrollView>

      <View style={styles.bottomBanner}>
        <AdMob />
      </View>

    </View>
  )
}
