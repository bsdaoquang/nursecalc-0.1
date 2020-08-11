import React from 'react'
import {View, Text, Alert} from 'react-native';
import {styles} from '../styles_global/styles'
import {AdMobBanner} from 'expo-ads-admob'

export default function AdMob(){

  const bannerError = (e) => {
    Alert.alert(e);
  }
  return(
    <View>
      <AdMobBanner
        bannerSize = "fullBanner"
        adUnitID = "ca-app-pub-6209888091137615/1563055691" //quảng cáo thật
        //adUnitID = "ca-app-pub-3940256099942544/6300978111" //Quảng cáo thử nghiệm
        serverPersonallizedAds = {true}
        onDidFailToReceiveAdwithError = {(e) => bannerError(e)}
      />
    </View>
  )
}
