import React, {useState} from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, TouchableOpacity, Platform } from 'react-native';
import Constants from 'expo-constants';
import {styles} from '../styles_global/styles'
import { FontAwesome } from '@expo/vector-icons'
import {AdMobBanner} from 'expo-ads-admob'

const DATA = [
  {id: '1',title: 'Tính chỉ số BMI & BSA',},
  {id: '2',title: 'Tính thời gian truyền máu',},
  {id: '3',title: 'Tính thời gian truyền dịch',}
];

function Item({ title }) {
  return (
    <View style={styles.buttonDesc}>
      <Text style={styles.titleInput}>{title}</Text>
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
          <Text style={styles.headerSubTitle}>Máy tính điều dưỡng</Text>
        </View>

        {/*this is formulars list*/}
          <FlatList
            data={DATA}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => navigation.navigate(item.title)}
                style={styles.listContent}
                >
                <Text style={styles.listTitle}>{item.title}</Text>
                <FontAwesome name="angle-double-right" size={24} color="#00bfa5" styles={styles.iconRight}/>
              </TouchableOpacity>
            )}
            keyExtractor={item => item.id}
          />
        {/*end list*/}

      </View>

      {/*Admob form*/}
      <View>
        <AdMobBanner
          style={styles.bottomBanner}
          bannerSize = "fullBanner"
          adUnitID = "ca-app-pub-9163945640044646/8720309227"
          serverPersonallizedAds = {false}
          testDeviedID = 'EMULATOR'
          onDidFailToReceiveAdWithError={bannerError}
        />
        <Text>This is admob banner</Text>
      </View>
      {/*end admob*/}

    </SafeAreaView>
  );
}
