import React, {useState} from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, TouchableOpacity, Alert} from 'react-native';
import Constants from 'expo-constants';
import {styles} from '../styles_global/styles'
import { FontAwesome } from '@expo/vector-icons'
import AdMob from '../screens/admob_Screen'


import {t} from '../locales/index'

const DATA = [
  {id: '1',title: 'bmi_calc'},
  {id: '2',title: 'blood_transfusion'},
  {id: '3',title: 'infusion_time'},
  {id: '4',title: 'infusion_pump'},
  {id: '5',title: 'dose_calc'},
];

function Item({ title }) {
  return (
    <View style={styles.buttonDesc}>
      <Text style={styles.titleInputText}>t({title})</Text>
    </View>
  );
}


export default function MyList({navigation}) {

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner}>

        {/*this is formulars list*/}
          <FlatList
            data={DATA}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => navigation.navigate(item.title)}
                style={styles.listContent}>
                <Text style={styles.listTitle}>{t(item.title)}</Text>
                <FontAwesome name="angle-double-right" size={24} color="#00bfa5" styles={styles.iconRight}/>
              </TouchableOpacity>
            )}
            keyExtractor={item => item.id}
          />
        {/*end list*/}

      </View>

      {/*Admob form*/}
      <View style={styles.bottomBanner}>
        <AdMob />
      </View>
      {/*end admob*/}

    </SafeAreaView>
  );
}
