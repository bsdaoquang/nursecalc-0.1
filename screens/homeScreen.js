import React, {useState} from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, TouchableOpacity, Alert, ScrollView} from 'react-native';
import Constants from 'expo-constants';
import {styles} from '../styles_global/styles'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
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

  const [selectedId, setSelectedId] = useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.inner}>

        {/*this is formulars list*/}
          <FlatList
            data={FOMULAS}
            extraData={FOMULAS}
            renderItem={({ item }) => (
              <View style={styles.listContainer}>
                <TouchableOpacity
                  onPress={() => (showAdInter(), setTimeout(() => {navigation.navigate(item.title)},1000))}
                  style={{flexDirection:'row', flex: 9}}>
                  <View style={styles.listContent}>
                    <Text style={styles.listTitle}>{item.title}</Text>
                    <Text style={styles.infoText}>{item.desc}</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity style={{flex:1}} onPress={() => FOMULAS[item.id -1].like = !item.like}>
                  <Ionicons name={item.like === true?"md-star":"md-star-outline"} size={30} color="#00bfa5" style={{marginTop: 5}}/>
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
