import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, KeyboardAvoidingView,
        TouchableWithoutFeedback, TouchableOpacity, Keyboard, ScrollView, Button} from 'react-native';
import {styles} from '../styles_global/styles';
import DateTimePicker from '@react-native-community/datetimepicker';
import AdMob from '../screens/admob_Screen';

export default function OxyVolCalc(){

    const [luuLuong, setLuuLuong] = useState(0)
    const [day, setDay] = useState(0)
    const [hour, setHour] = useState(0)
    const [min, setMin] = useState(0)
    var sumMin, sumVol

    if (min > 59 || min === null || min < 0) {
      setMin(0)
    }
    if (hour > 23 || hour === null || hour < 0) {
      setHour(0)
    }
    if (day === null || day < 0) {
      setDay(0)
    }

    if (luuLuong > 15 || luuLuong < 0 || luuLuong === null) {
      setLuuLuong(0)
    }else{
      sumMin = (day*24*60) + (hour*60) + min*1
      sumVol = sumMin * luuLuong
    }

    //datetime picker setting
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate || date;
      setShow(Platform.OS === 'ios');
      setDate(currentDate);
    };

    const showMode = currentMode => {
      setShow(true);
      setMode(currentMode);
    };

    const showDatepicker = () => {
      showMode('date');
    };

    const showTimepicker = () => {
      showMode('time');
    };

    console.log(date)
    //end datetime picker

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
                  luuLuong == null || luuLuong > 15 || luuLuong < 0?
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

          {/*datetimepicker*/}
           <View>
            <Button onPress={showDatepicker} title="Show date picker!" />
          </View>
          <View>
            <Button onPress={showTimepicker} title="Show time picker!" />
          </View>
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={mode}
              is24Hour={true}
              display="default"
              onChange={onChange}
            />
          )} 
          {/*end datetimepicker*/}

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
