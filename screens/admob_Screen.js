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
        adUnitID = "ca-app-pub-9163945640044646/8720309227"
        serverPersonallizedAds = {false}
      />
      <View>
        <Text>This is admob banner</Text>
      </View>
    </View>
  )
}
