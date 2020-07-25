import React, {useState} from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, TouchableOpacity, Alert, ScrollView, AsyncStorage} from 'react-native';
import Constants from 'expo-constants';
import {styles} from '../styles_global/styles';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import AdMob from '../screens/admob_Screen';
import {showAdInter} from '../components/intersititialAdmob';
import {FOMULAS} from '../components/data';
import * as Linking from 'expo-linking';
import {fireBase} from '../components/firebaseConfig';

function Item({ title }) {
  return (
    <View style={styles.buttonDesc}>
      <Text style={styles.titleInputText}>{title}</Text>
    </View>
  );
}

export default function MyList({navigation}) {

  const [selectedId, setSelectedId] = useState();

  //Thông báo yêu cầu đánh giá ứng dụng
  const alertReviewApp = () =>
  Alert.alert(
    "Đánh giá",
    "Nhằm nâng cao chất lượng phục vụ, Bạn vui lòng đánh giá ứng dụng nhé!",
    [
      {
        text: "Không hiện lại",
        onPress: () => alertShow()//chuyển biến showAlert thành 'no'
      },
      {
        text: "Để sau",
        onPress: () => console.log("Để sau"),
        style: "cancel"
      },
      { text: "Đánh giá", onPress: () => Linking.openURL('https://play.google.com/store/apps/details?id=com.bsdaoquang.trolydieuduong')}
    ],
    { cancelable: false }
  );
  //hết thông báo

//kiểm tra biến show
  const alerCheked = async () => {
    const value = await AsyncStorage.getItem('TASK');
    if (value == null) {// nếu value = null thì sẽ hiện yêu cầu đánh giá, ngược lại thì không, dù có cài lại
      alertReviewApp()
    }
  };

  alerCheked()

  function moveScreen(title, id){
    
    showAdInter()
    navigation.navigate(title)
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
              </View>
            )}
            keyExtractor={item => item.id}
          />
        {/*end list*/}

        <View style={{marginTop: 15, flexDirection:'row'}}>
          <Text style={styles.infoText}>Không thấy cái bạn cần?</Text>

          <TouchableOpacity onPress={() => Linking.openURL('mailto:bsdaoquang@gmai.com?subject=Trợ lý Điều Dưỡng - Yêu cầu thêm công cụ tiện ích&body=Viết công thức bạn muốn ở đây')}>
            <Text style={styles.infoText}> Bấm vào đây</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.bottomBanner}>
        <AdMob />
      </View>
    </View>
  );
}
