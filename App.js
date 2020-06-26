// In App.js in a new project

import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/homeScreen'
import BMICalc from './formulars/bmicalc'
import TimeBloodTransfusion from './formulars/time_blood_transfusion'
import TimeFusion from './formulars/time_fusion'
import TestMulti from './screens/test_multi_languages'

import {t} from './locales/index'



const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen}
          options={{
          title: 'Nurse Calculator',
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
          options={{title: t('infusion_time')}}
        />
        <Stack.Screen name="blood_transfusion" component={TimeBloodTransfusion}
          options={{title: t('blood_transfusion')}}
        />
        <Stack.Screen name="bmi_calc" component={BMICalc}
          options={{title: t('bmi_calc')}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
