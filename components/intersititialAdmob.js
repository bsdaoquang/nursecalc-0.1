import React from 'react'
import {View, Text, Button} from 'react-native'
import {styles} from '../styles_global/styles'
import {AdMobInterstitial,} from 'expo-ads-admob';

// Display an interstitial
	export const showAdInter = async() => {
<<<<<<< HEAD
	await AdMobInterstitial.setAdUnitID('ca-app-pub-3940256099942544/1033173712');
	//await AdMobInterstitial.setAdUnitID('ca-app-pub-6209888091137615/1207407441');
=======
	await AdMobInterstitial.setAdUnitID('ca-app-pub-6209888091137615/1207407441');
	//await AdMobInterstitial.setAdUnitID('ca-app-pub-3940256099942544/1033173712');
>>>>>>> b1c0a034f7a42afd535f9d517e1c1f7fb44c53f6
	await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true});
	await AdMobInterstitial.showAdAsync();
	}
