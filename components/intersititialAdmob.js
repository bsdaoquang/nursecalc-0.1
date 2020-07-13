import React from 'react'
import {View, Text, Button} from 'react-native'
import {styles} from '../styles_global/styles'
import {AdMobInterstitial,} from 'expo-ads-admob';

// Display an interstitial
	export const showAdInter = async() => {
	await AdMobInterstitial.setAdUnitID('ca-app-pub-6209888091137615/1207407441');
	//await AdMobInterstitial.setAdUnitID('ca-app-pub-3940256099942544/1033173712');
	await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true});
	await AdMobInterstitial.showAdAsync();
	}

export default function IntersititialAdmob({route, navigation}){

	showAdInter()

	const title = route.params;
	
	const moveScreen = () => {
		setTimeout(() => {navigation.navigate(title)},3000)
	}

	moveScreen()

	return(
		<View style={{flex: 1, justifyContent:'center'}}>
			<Text style={{textAlign: 'center', fontSize: 23}}>Quảng cáo</Text>
			<Text style={{textAlign: 'center', fontSize: 16}}>Tự động chuyển màn hình</Text>
		</View>	
	)
}