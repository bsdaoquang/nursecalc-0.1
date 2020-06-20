import React, {useState} from 'react'
import {View, Text, TextInput, StyleSheet, KeyboardAvoidingView,
        TouchableWithoutFeedback, Keyboard} from 'react-native'
import {FontAwesome} from '@/expo/vector-icons'
import {styles} from '../styles_global/styles'
export default function BMICalc(){
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
                />
              </View>

              <View style={styles.unitContain}>
                <Text style={styles.unitTitle}>Kg</Text>
                <FontAwesome name="exchange" size={24} color="black" />
              </View>
            </View>
            {/*end input contain*/}

            <Text>This is including(gồm) 3 part : name, input and change unit</Text>
          </View>
          {/*end from contain*/}
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}
