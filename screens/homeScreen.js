import React, {useState} from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, TouchableOpacity, Alert, ScrollView} from 'react-native';
import Constants from 'expo-constants';
import {styles} from '../styles_global/styles'
import { FontAwesome } from '@expo/vector-icons'
import AdMob from '../screens/admob_Screen'


import {t} from '../locales/index'

const DATA = [
  {id: '1',title: 'bmi_calc', desc: 'Body mass index and body subface'},
  {id: '2',title: 'blood_transfusion', desc: 'Thời gian truyền máu, lượng máu đã truyền'},
  {id: '3',title: 'infusion_time', desc: 'Thời gian truyền dịch, lượng dịch đã truyền'},
  {id: '4',title: 'infusion_pump', desc: 'Tính tốc độ truyền bơm tiêm điện'},
  {id: '5',title: 'dose_calc', desc: 'Tính liều dùng thuốc qua bơm tiêm điện'},
  {id: '6', title: 'count_drops', desc:'Đếm số giọt tính tốc độ dịch truyền'},
  {id: '7', title: 'desired_dose', desc: 'Chia nhỏ liều thuốc pha tiêm'},
  {id: '8', title: 'drip_rates', desc: 'Tính tốc độ cần thiết truyền hết dịch'},
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
    <ScrollView>
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
    </ScrollView>

      {/*Admob form*/}
      <View style={styles.bottomBanner}>
        <AdMob />
      </View>
      {/*end admob*/}
    </View>
  );
}
