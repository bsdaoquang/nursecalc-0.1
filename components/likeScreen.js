import React, {useState} from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, TouchableOpacity, Alert, ScrollView} from 'react-native';
import Constants from 'expo-constants';
import {styles} from '../styles_global/styles'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import AdMob from '../screens/admob_Screen'
import {FOMULAS, LIKE} from './data'

function Item({ title }) {
  return (
    <View style={styles.buttonDesc}>
      <Text style={styles.titleInputText}>{title}</Text>
    </View>
  );
}

export default function LikeScreen({navigation}) {
  const [selectId, setSelectId] = useState()

  function unlike(id){
    //set like(id) = false
    FOMULAS[id - 1].like = false

    //delete from LIKE(id)
    LIKE.splice(LIKE.indexOf(id))

    //set selecteid to reload data
    setSelectId(id)
  }
  return (
    <View style={styles.container}>
      <View style={styles.inner, {marginTop:45, padding: 8}}>
        {/*this is formulars list*/}
          <FlatList
            data={LIKE}
            extraData={selectId}
            renderItem={({ item }) => (
              <View style={styles.listContainer}>
                <TouchableOpacity
                  style={{flexDirection:'row', flex: 9}}>
                  <View style={styles.listContent}>
                    <Text style={styles.listTitle}>{item.title}</Text>
                    <Text style={styles.infoText}>{item.desc}</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity style={{flex:1}} onPress={() => unlike(item.id)}>
                  <Ionicons name="md-star" size={30} color="#00bfa5" style={{marginTop: 5}}/>
                </TouchableOpacity>
              </View>
            )}
            keyExtractor={item => item.id}
          />
        {/*end list*/}
      </View>
    </View>
  );
}
