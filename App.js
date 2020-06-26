// In App.js in a new project

import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/homeScreen'
import BMICalc from './formulars/bmicalc'
import TimeBloodTransfusion from './formulars/time_blood_transfusion'
import TimeFusion from './formulars/time_fusion'



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
        <Stack.Screen name="Tính thời gian truyền dịch" component={TimeFusion} />
        <Stack.Screen name="Tính thời gian truyền máu" component={TimeBloodTransfusion} />
        <Stack.Screen name="Tính chỉ số BMI & BSA" component={BMICalc} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
