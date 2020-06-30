// In App.js in a new project

import * as React from 'react';
import { View, Text, Button } from 'react-native';
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


import {t} from './locales/index'



const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen}
          options={{
          title: 'Medical Calculator',
          headerStyle: {
            backgroundColor: '#00bfa5',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        />
        <Stack.Screen name="infusion_time" component={TimeFusion}
          options={{
            title: t('infusion_time'),
            headerStyle:{
              backgroundColor: '#00bfa5'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen name="blood_transfusion" component={TimeBloodTransfusion}
          options={{title: t('blood_transfusion'),
            title: t('blood_transfusion'),
            headerStyle:{
              backgroundColor: '#00bfa5'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen name="bmi_calc" component={BMICalc}
          options={{title: t('bmi_calc'),
            title: t('bmi_calc'),
            headerStyle:{
              backgroundColor: '#00bfa5'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen name="infusion_pump" component={InfusionPump}
          options={{title: t('infusion_pump'),
            title: t('infusion_pump'),
            headerStyle:{
              backgroundColor: '#00bfa5'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen name="dose_calc" component={DoseCalc}
          options={{title: t('dose_calc'),
            title: t('dose_calc'),
            headerStyle:{
              backgroundColor: '#00bfa5'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen name="count_drops" component={CountDrops}
          options={{title: t('count_drops'),
            title: t('count_drops'),
            headerStyle:{
              backgroundColor: '#00bfa5'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen name="desired_dose" component={DesiredDose}
          options={{title: t('desired_dose'),
            title: t('desired_dose'),
            headerStyle:{
              backgroundColor: '#00bfa5'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen name="drip_rates" component={DripReateCalc}
          options={{title: t('drip_rates'),
            title: t('drip_rates'),
            headerStyle:{
              backgroundColor: '#00bfa5'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
