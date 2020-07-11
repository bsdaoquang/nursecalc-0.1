// In App.js in a new project

import * as React from 'react';
import { View, Text, Button, Share } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/homeScreen'
import BMICalc from './formulars/bmicalc'
import TimeBloodTransfusion from './formulars/time_blood_transfusion'
import TimeFusion from './formulars/time_fusion'
import InfusionPump from './formulars/infusion_pump'
import DoseCalc from './formulars/dose_calc'
import CountDrops from './formulars/count_drops'
import DesiredDose from './formulars/desired_dose'
import DripReateCalc from './formulars/drip_rate_calc'
import IntersititialAdmob from './components/intersititialAdmob'
import { FontAwesome } from '@expo/vector-icons'
import {t} from './locales/index'

const onShare = async () => {
    try {
      const result = await Share.share({
        title: t('nurseAssistant'),
        message:
          t('nurseDesc'),
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

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen}
          options={{
          title: t('nurseAssistant'),
          headerStyle: {
            backgroundColor: '#00bfa5',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerRight:() => (
            <FontAwesome name="share-square-o" size={28} color='white' style={{marginRight: 24}} onPress={onShare} />
          ),
        }}
        />
        <Stack.Screen name='interAdmob' component={IntersititialAdmob}/>

        <Stack.Screen name='Tính thời gian truyền dịch' component={TimeFusion}/>
        <Stack.Screen name='Tính thời gian truyền máu' component={TimeBloodTransfusion}/>
        <Stack.Screen name='Tính BMI & BSA' component={BMICalc}/>
        <Stack.Screen name='Tính tốc độ truyền bơm tiêm điện' component={InfusionPump}/>
        <Stack.Screen name='Tính liều thuốc bơm tiêm điện' component={DoseCalc}/>
        <Stack.Screen name='Máy đếm giọt dịch truyền' component={CountDrops}/>
        <Stack.Screen name='Tính liều khả dụng' component={DesiredDose}/>
        <Stack.Screen name='Tính tốc độ dịch truyền' component={DripReateCalc}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
