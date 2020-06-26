import React, {useState} from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import {styles} from '../styles_global/styles'
import { FontAwesome } from '@expo/vector-icons'

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

export default function MyList({navigation}) {
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
                <FontAwesome name="angle-double-right" size={24} color="#777" styles={styles.iconRight}/>
              </TouchableOpacity>
            )}
            keyExtractor={item => item.id}
          />
        {/*end list*/}

      </View>

      {/*Admob form*/}
      <View>
        <Text>Admob</Text>
      </View>
      {/*end admob*/}

    </SafeAreaView>
  );
}
