import React, {useState} from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, TouchableOpacity} from 'react-native';
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
];

function Item({ title }) {
  return (
    <View style={styles.buttonDesc}>
      <Text style={styles.titleInputText}>t({title})</Text>
    </View>
  );
}

const bannerError = () => {
  console.log('An error')
}

export default function MyList({navigation}) {

  //Android banner: ca-app-pub-9163945640044646/8720309227
  //Android interstitial: ca-app-pub-9163945640044646/9583918468

  //iOS banner: ca-app-pub-9163945640044646/4655025414
  //iOS interstitial: ca-app-pub-9163945640044646/8436404045

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner}>
        <View style={styles.headerContain}>
          <Text style={styles.headerSubTitle}>{t('nurse_calc')}</Text>
        </View>

        {/*this is formulars list*/}
          <FlatList
            data={DATA}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => navigation.navigate(item.title)}
                style={styles.listContent}
                >
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
