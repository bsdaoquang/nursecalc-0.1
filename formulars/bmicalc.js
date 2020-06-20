import React, {useState} from 'react'
import {View, Text, TextInput, StyleSheet, KeyboardAvoidingView,
        TouchableWithoutFeedback, TouchableOpacity, Keyboard} from 'react-native'
import {styles} from '../styles_global/styles'
import { FontAwesome } from '@expo/vector-icons'

export default function BMICalc(){


    const [height, setHeight] = useState(height)
    const [weight, setWeight] = useState(weight)

    var ketqua = ''

    if (height != null && weight != null) {
      ketqua = height + weight
    }


  return(
    <KeyboardAvoidingView style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>

          {/*This is header*/}
          <View style={styles.headerContain}>
            <Text style={styles.headerTitle}>BMI Calculator</Text>
            <Text style={styles.headerSubTitle}>Body Mass Index (BMI)</Text>
          </View>
          {/*End header*/}

          {/*This is description*/}
          {/*This is description*/}

          {/*This is form container*/}
          <View style={styles.formContain}>
            {/*This is input contain*/}
            <View style={styles.inputContain}>
              <View style={styles.titleInput}>
                <Text style={styles.titleInputText}>Weight</Text>
              </View>

              <View style={styles.inputContent}>
                <TextInput
                  style={styles.input}
                  placeholder = '0'
                  keyboardType = 'number-pad'
                  onChangeText = {weight => setWeight(weight)}
                />
              </View>

              <View style={styles.unitContain}>
                <View style={styles.unitContainFlexDir}>
                  <Text style={styles.unitTitle}>Kg</Text>
                  <FontAwesome name = 'exchange' size={20} color = 'coral'/>
                </View>
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
                <Text style={styles.titleInputText}>Height</Text>
              </View>

              <View style={styles.inputContent}>
                <TextInput
                  style={styles.input}
                  placeholder = '0'
                  keyboardType = 'number-pad'
                  onChangeText = {height => setHeight(height)}
                />
              </View>

              <View style={styles.unitContain}>
                <View style={styles.unitContainFlexDir}>
                  <Text style={styles.unitTitle}>Cm</Text>
                  <FontAwesome name = 'exchange' size={20} color = 'coral'/>
                </View>
              </View>
            </View>
            <Text>{ketqua}</Text>
            {/*end input contain*/}
          </View>
          {/*end from contain*/}
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}
