import {AdMobInterstitial,} from 'expo-ads-admob';

//Display an interstitial
	export const showAdInter = async() => {
		await AdMobInterstitial.setAdUnitID('ca-app-pub-6209888091137615/7131245980'); //Quảng cáo thật
		//await AdMobInterstitial.setAdUnitID('ca-app-pub-3940256099942544/1033173712');
		await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true});
		await AdMobInterstitial.showAdAsync();
	}
