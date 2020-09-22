// In App.js in a new project

import React , {useEffect} from 'react';
import { View, Text, Button, Share, TouchableOpacity, Alert, BackHandler} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as Linking from 'expo-linking'
import HomeScreen from './screens/homeScreen'

//Fomulars screen
import BMICalc from './formulars/bmicalc'
import TimeBloodTransfusion from './formulars/time_blood_transfusion'
import TimeFusion from './formulars/time_fusion'
import InfusionPump from './formulars/infusion_pump'
import DoseCalc from './formulars/dose_calc'
import CountDrops from './formulars/count_drops'
import DesiredDose from './formulars/desired_dose'
import DripReateCalc from './formulars/drip_rate_calc'
import OxyVolCalc from './formulars/oxy_vol_cal';

//Admob ads
import {showAdInter} from './components/intersititialAdmob';
//icons
import { FontAwesome, FontAwesome5, Ionicons } from '@expo/vector-icons'

//Drawer navigation screens
import About from './components/about'
import Contact from './components/contact'

const thongBao = () =>
    Alert.alert(
      "Máy Tính Y Học",
      "Để thuận tiện cho việc update và cải thiện chất lượng người dùng, hạn chế quảng cáo, bạn chuyển sang phần mềm MÁY TÍNH Y HỌC để sử dụng nhé!!",
      [
        {
          text: "Tải về ngay",
          onPress: () => Linking.openURL('https://play.google.com/store/apps/details?id=com.bsdaoquang.maytinhyhoc'),
          style: "cancel"
        },
        { text: "Hủy" }
      ],
      { cancelable: false }
    );

thongBao()

const onShare = async () => {
    try {
      const result = await Share.share({
        title: 'Trợ Lý Điều Dưỡng',
        message:`'Trợ Lý Điều Dưỡng' \n\n 'Công cụ miễn phí hữu hiệu nhất dành cho Điều Dưỡng' \n\n 'Tính nhanh các công thức thường dùng trong lâm sàng'
          \n\n
          'Link tải: https://play.google.com/store/apps/details?id=com.bsdaoquang.trolydieuduong'`,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

const addFormula = () => {
  Linking.openURL('mailto:bsdaoquang@gmai.com?subject=Trợ lý Điều Dưỡng - Yêu cầu thêm công cụ tiện ích&body=Viết công thức bạn muốn ở đây')
}

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator()

function StackNavigation({navigation}) {

    //Phần này dùng hiện quảng cáo khi người dùng bấm thoát màn hình
    useEffect(() => {
      const backAction = () => {
        showAdInter()
      };

      const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

      return () => backHandler.remove();
    }, []);

  return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen}
          options={{
          title: 'Trang chủ',
          headerStyle: {
            backgroundColor: '#00bfa5',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerLeft:() => (
            <Ionicons name="ios-menu" size={28} color='white' style={{marginLeft: 15, marginTop: 5}} onPress={() => navigation.openDrawer()}/>
          ),
          headerRight: () => (
            <View style={{flexDirection: 'row'}} >
              <TouchableOpacity onPress={() => Linking.openURL('https://unghotoi.com/1590916101u1xls')}>
                <Text style={{color: 'white', fontSize: 18, margin: 6}}>Ủng hộ</Text>
              </TouchableOpacity>
              <Ionicons name="md-share" size={24} color='white' style={{marginHorizontal: 15, marginTop: 5}} onPress={onShare}/>
            </View>
          ),
        }}
        />
        <Stack.Screen name='Tính thể tích oxy' component={OxyVolCalc}/>
        <Stack.Screen name='Tính thời gian truyền dịch' component={TimeFusion}/>
        <Stack.Screen name='Tính thời gian truyền máu' component={TimeBloodTransfusion}/>
        <Stack.Screen name='Tính BMI & BSA' component={BMICalc}/>
        <Stack.Screen name='Tính tốc độ truyền bơm tiêm điện' component={InfusionPump}/>
        <Stack.Screen name='Tính liều thuốc bơm tiêm điện' component={DoseCalc}/>
        <Stack.Screen name='Máy đếm giọt dịch truyền' component={CountDrops}/>
        <Stack.Screen name='Tính liều khả dụng' component={DesiredDose}/>
        <Stack.Screen name='Tính tốc độ dịch truyền' component={DripReateCalc}/>
      </Stack.Navigator>
  );
}
export default function App(){
  return(
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name='Trang chủ' component={StackNavigation}/>
          <Drawer.Screen name='Giới thiệu' component={About}/>
          <Drawer.Screen name='Liên hệ' component={Contact}/>
          <Drawer.Screen name='Thêm công thức' component={addFormula}/>
          <Drawer.Screen name='Chia sẻ' component={onShare}/>
        </Drawer.Navigator>
      </NavigationContainer>
    )
}
