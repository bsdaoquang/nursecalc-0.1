import React, {useState} from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, TouchableOpacity, Alert, ScrollView} from 'react-native';
import Constants from 'expo-constants';
import {styles} from '../styles_global/styles'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import AdMob from '../screens/admob_Screen'
import {showAdInter} from '../components/intersititialAdmob'
import {FOMULAS, LIKE} from '../components/data'

function Item({ title }) {
  return (
    <View style={styles.buttonDesc}>
      <Text style={styles.titleInputText}>{title}</Text>
    </View>
  );
}

export default function MyList({navigation}) {

  const [selectedId, setSelectedId] = useState(true);

  function like(id){ //Like item with item.id
    //Thêm và xóa item ra khỏi LIKE
    setSelectedId(FOMULAS[id - 1].like)
    FOMULAS[id - 1].like = !FOMULAS[id - 1].like //id - 1 to get index in FOMULAS

    if (FOMULAS[id - 1].like == true) {
      LIKE.push(FOMULAS[id - 1])
    }else{
      LIKE.splice(LIKE.indexOf(id))
    }
  }

  //show ads on click item, and then move to screen formulars
  // then +1 to fomular to count user used formulars

  function moveScreen(title, id){
    //move screen with title screen
    showAdInter(), setTimeout(() => {navigation.navigate(title)},1000)
    FOMULAS[id -1].count += 1
  }

  return (
    <View style={styles.container}>
      <View style={styles.inner}>

        {/*this is formulars list*/}
          <FlatList
            data={FOMULAS}
            extraData={selectedId}
            renderItem={({ item }) => (
              <View style={styles.listContainer}>
                <TouchableOpacity
                  onPress={() => moveScreen(item.title, item.id)}
                  style={{flexDirection:'row', flex: 9}}>
                  <View style={styles.listContent}>
                    <Text style={styles.listTitle}>{item.title}</Text>
                    <Text style={styles.infoText}>{item.desc}</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity style={{flex:1}} onPress = {() => like(item.id)}>
                  <Ionicons name={item.like == true?"md-star":"md-star-outline"} size={30} color="#00bfa5" style={{marginTop: 5}}/>
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
