import React, {useState} from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, TouchableOpacity, Alert, ScrollView} from 'react-native';
import Constants from 'expo-constants';
import {styles} from '../styles_global/styles'
import { FontAwesome } from '@expo/vector-icons'
import AdMob from '../screens/admob_Screen'
import {showAdInter} from '../components/intersititialAdmob'
import {FOMULAS} from '../components/data'


function Item({ title }) {
  return (
    <View style={styles.buttonDesc}>
      <Text style={styles.titleInputText}>{title}</Text>
    </View>
  );
}


export default function MyList({navigation}) {

  return (
    <View style={styles.container}>
      <View style={styles.inner}>

        {/*this is formulars list*/}
          <FlatList
            data={FOMULAS}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => (showAdInter(), setTimeout(() => {navigation.navigate(item.title)},1000))}
                style={styles.listContainer}>

                <View style={styles.listContent}>
                  <Text style={styles.listTitle}>{item.title}</Text>
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
