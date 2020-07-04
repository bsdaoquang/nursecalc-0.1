import React, {useState} from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, TouchableOpacity, Alert, ScrollView} from 'react-native';
import Constants from 'expo-constants';
import {styles} from '../styles_global/styles'
import { FontAwesome } from '@expo/vector-icons'
import AdMob from '../screens/admob_Screen'


import {t} from '../locales/index'

const DATA = [
  {id: '1',title: 'bmi_calc', desc: t('bmi_desc')},
  {id: '2',title: 'blood_transfusion', desc: t('time_blood_trans')},
  {id: '3',title: 'infusion_time', desc: t('infusion_time')},
  {id: '4',title: 'infusion_pump', desc: t('infusion_pump_desc')},
  {id: '5',title: 'dose_calc', desc: t('dose_calc_desc')},
  {id: '6', title: 'count_drops', desc:t('count_drops_desc')},
  {id: '7', title: 'desired_dose', desc: t('desired_dose_desc')},
  {id: '8', title: 'drip_rates', desc: t('drip_rates')},
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
    <View style={styles.container}>
      <View style={styles.inner}>

        {/*this is formulars list*/}
          <FlatList
            data={DATA}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => navigation.navigate(item.title)}
                style={styles.listContainer}>

                <View style={styles.listContent}>
                  <Text style={styles.listTitle}>{t(item.title)}</Text>
                  <Text style={styles.infoText}>{item.desc}</Text>
                </View>

                <FontAwesome name="angle-double-right" size={24} color="#00bfa5" style={styles.iconRight}/>

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
    </View>
  );
}
