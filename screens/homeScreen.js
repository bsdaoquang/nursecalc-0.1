import React, {useState} from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, TouchableOpacity, Alert, ScrollView} from 'react-native';
import Constants from 'expo-constants';
import {styles} from '../styles_global/styles'
import { FontAwesome } from '@expo/vector-icons'
import AdMob from '../screens/admob_Screen'
import {t} from '../locales/index'

import {showAdInter} from '../components/intersititialAdmob'

const DATA = [
  {id: '1',title: 'Tính BMI & BSA', desc: 'Tính chỉ số khối cơ thể (BMI) & diện tích bề mặt (BSA)'},
  {id: '2',title: 'Tính thời gian truyền máu', desc: 'Thời gian truyền hết 1 lượng máu'},
  {id: '3',title: 'Tính thời gian truyền dịch', desc: 'Thời gian truyền hết 1 lượng dịch'},
  {id: '4',title: 'Tính tốc độ truyền bơm tiêm điện', desc: 'Tính tốc độ để được liều thuốc cần thiết'},
  {id: '5',title: 'Tính liều thuốc bơm tiêm điện', desc: 'Tính liều thuốc đang được sử dụng'},
  {id: '6', title: 'Máy đếm giọt dịch truyền', desc: 'Tính tốc độ dịch truyền đang chảy'},
  {id: '7', title: 'Tính liều khả dụng', desc: 'Chia nhỏ liều thuốc ở Nhi khoa'},
  {id: '8', title: 'Tính tốc độ dịch truyền', desc: 'Tốc độ cần để truyền hết 1 lượng dịch'},
];


function Item({ title }) {
  return (
    <View style={styles.buttonDesc}>
      <Text style={styles.titleInputText}>{title}</Text>
    </View>
  );
}


export default function MyList({navigation}) {

  const nextScreen = () => {
    
    console.log(title)
    // showAdInter()
    // setTimeout(() => {navigation.navigate('Tính BMI & BSA')},3000)
  }

  return (
    <View style={styles.container}>
      <View style={styles.inner}>

        {/*this is formulars list*/}
          <FlatList
            data={DATA}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={nextScreen}
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
