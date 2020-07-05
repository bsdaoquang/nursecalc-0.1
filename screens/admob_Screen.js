import React from 'react'
import {View, Text} from 'react-native';
import {styles} from '../styles_global/styles'
import {AdMobBanner} from 'expo-ads-admob'

export default function AdMob(){
  return(
    <View>
      <AdMobBanner
        style={styles.bottomBanner}
        bannerSize = "fullBanner"
        adUnitID = "ca-app-pub-3940256099942544/6300978111" //"ca-app-pub-6209888091137615/1563055691"
        serverPersonallizedAds = {false}
      />
    </View>
  )
}