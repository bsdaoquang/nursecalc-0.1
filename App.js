// In App.js in a new project

import * as React from 'react';
import { View, Text, Button, Share } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer'
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

//Admob ads
import IntersititialAdmob from './components/intersititialAdmob'

//icons
import { FontAwesome, Ionicons } from '@expo/vector-icons'

//Drawer navigation screens
import About from './components/about'
import Contact from './components/contact'

const onShare = async () => {
    try {
      const result = await Share.share({
        title: 'Trợ Lý Điều Dưỡng',
        message:
          'Công cụ tiện ích hữu hiệu nhất dành cho Điều Dưỡng',
        url: 'https://play.google.com/store/apps/details?id=com.bsdaoquang.trolydieuduong'
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

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function StackNavigation({navigation}) {
  return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen}
          options={{
          title: 'Trợ Lý Điều Dưỡng',
          headerStyle: {
            backgroundColor: '#00bfa5',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerLeft:() => (
            <Ionicons name="ios-menu" size={28} color='white' style={{marginLeft: 15, marginTop: 5}} onPress={() => navigation.openDrawer()}/>
          )
        }}
        />
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
          <Drawer.Screen name='Thêm công thức' component={() => Linking.openURL('mailto:bsdaoquang@gmai.com?subject=Trợ lý Điều Dưỡng - Yêu cầu thêm công cụ tiện ích&body=Viết yeey cầu của bạn ở đây')}/>
          <Drawer.Screen name='Chia sẻ' component={onShare}/>
        </Drawer.Navigator>
      </NavigationContainer>
    )
}
