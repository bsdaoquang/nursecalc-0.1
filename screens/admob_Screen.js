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
        adUnitID = "ca-app-pub-6209888091137615/1563055691"
        serverPersonallizedAds = {false}
      />
    </View>
  )
}
