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
        adUnitID="ca-app-pub-3940256099942544/6300978111" //quảng cáo test
        //adUnitID="ca-app-pub-6209888091137615/1563055691" // quảng cáo thật
        onDidFailToReceiveAdWithError={(e) => bannerError(e)}
        onAdMobDispatchAppEvent={(e) => bannerError(e)} />
    </View>
  )
}
