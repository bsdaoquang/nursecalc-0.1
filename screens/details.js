import * as React from 'react';
import { View, Text, Button } from 'react-native';


export default function DetailsScreen({route, navigation}) {
  const {itemId} = route.params
  const {otherParam} = route.params
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>param: {JSON.stringify(otherParam)}</Text>
      <Button
        title="Go to About"
        onPress = {() => navigation.navigate('About')}
      />
    </View>
  );
}
