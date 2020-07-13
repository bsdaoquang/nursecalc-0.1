import React from 'react'
import {View, Text, Button} from 'react-native'
import {styles} from '../styles_global/styles'
import {AdMobInterstitial,} from 'expo-ads-admob';

// Display an interstitial
	export const showAdInter = async() => {
	//await AdMobInterstitial.setAdUnitID('ca-app-pub-6209888091137615/1207407441');
	await AdMobInterstitial.setAdUnitID('ca-app-pub-3940256099942544/1033173712');
	await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true});
	await AdMobInterstitial.showAdAsync();
	}
