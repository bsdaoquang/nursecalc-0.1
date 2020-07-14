import React, {useState} from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, TouchableOpacity, Alert, ScrollView} from 'react-native';
import Constants from 'expo-constants';
import {styles} from '../styles_global/styles'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import AdMob from '../screens/admob_Screen'
import {LIKE} from './data'

function Item({ title }) {
  return (
    <View style={styles.buttonDesc}>
      <Text style={styles.titleInputText}>{title}</Text>
    </View>
  );
}

export default function LikeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.inner}>

        {/*this is formulars list*/}
          <FlatList
            data={LIKE}
            renderItem={({ item }) => (
              <View style={styles.listContainer}>
                <TouchableOpacity
                  style={{flexDirection:'row', flex: 9}}>
                  <View style={styles.listContent}>
                    <Text style={styles.listTitle}>{item.title}</Text>
                    <Text style={styles.infoText}>{item.desc}</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity style={{flex:1}}>
                  <Ionicons name="md-star" size={30} color="#00bfa5" style={{marginTop: 5}}/>
                </TouchableOpacity>
              </View>
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
