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
        adUnitID = "ca-app-pub-3940256099942544/6300978111"
        serverPersonallizedAds = {false}
      />
    </View>
  )
}
