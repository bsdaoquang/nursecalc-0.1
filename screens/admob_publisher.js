import React from 'react'
import {View, Text, Alert} from 'react-native';
import {styles} from '../styles_global/styles'
import {PublisherBanner} from 'expo-ads-admob'

export default function AdMobPublish(){

  const bannerError = (e) => {
    Alert.alert(e);
  }
  return(
    <View style={{marginVertical: 15, alignItems: 'center'}}>
      <PublisherBanner
        bannerSize="mediumRectangle"
        adUnitID="ca-app-pub-3940256099942544/6300978111" // Test ID, Replace with your-admob-unit-id
        onDidFailToReceiveAdWithError={(e) => bannerError(e)}
        onAdMobDispatchAppEvent={(e) => bannerError(e)} />
    </View>
  )
}
