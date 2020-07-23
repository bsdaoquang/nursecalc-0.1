import React, {useState} from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, TouchableOpacity, Alert, ScrollView} from 'react-native';
import Constants from 'expo-constants';
import {styles} from '../styles_global/styles'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import AdMob from '../screens/admob_Screen'
import {showAdInter} from '../components/intersititialAdmob'
import {FOMULAS, LIKE} from '../components/data'
import * as Linking from 'expo-linking'
import {fireBase} from '../components/firebaseConfig'

function Item({ title }) {
  return (
    <View style={styles.buttonDesc}>
      <Text style={styles.titleInputText}>{title}</Text>
    </View>
  );
}

var Fomulars = [];
const onValueChange = fireBase.database()
      .ref().child('countClick')
      .on('value', snapshot => {
          Fomulars.push( snapshot.val());
      });

export default function MyList({navigation}) {

  const [selectedId, setSelectedId] = useState();

  function like(id){ //Like item with item.id
    //set like or unlike item
    FOMULAS[id - 1].like = !FOMULAS[id - 1].like //id - 1 to get index in FOMULAS
    //change to reload data
    setSelectedId(FOMULAS[id - 1].like)
  }

  //show ads on click item, and then move to screen formulars
  // then +1 to fomular to count user used formulars
  //get count form firebase
  function moveScreen(title, id){
    //get count
    var countClick = Fomulars[0][title]['count']

    //update and set count title to the firebase
    fireBase.database().ref('countClick').child(title).set({
      count: countClick + 1
    })

    //move screen with title screen  //
    showAdInter(), setTimeout(() => {navigation.navigate(title)}, 2000)
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

        <View style={{marginTop: 15, flexDirection:'row'}}>
          <Text style={styles.infoText}>Không thấy cái bạn cần?</Text>

          <TouchableOpacity onPress={() => Linking.openURL('mailto:bsdaoquangadmod@gmai.com?subject=Trợ lý Điều Dưỡng - Yêu cầu thêm công cụ tiện ích&body=Viết công thức bạn muốn ở đây')}>
            <Text style={styles.infoText}> Bấm vào đây</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View>
        <AdMob />
      </View>
    </View>
  );
}
