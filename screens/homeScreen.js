import * as React from 'react';
import { View, Text, Button } from 'react-native';

export default function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress = {() => navigation.navigate('Details', {
          itemId: 86,
          otherParam: 'This is my param',
        })}
      />
    </View>
  );
}
