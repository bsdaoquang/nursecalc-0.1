import React, {useState} from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'

import {styles} from '../styles_global/styles'
import AdMob from '../screens/admob_Screen'

import { FontAwesome } from '@expo/vector-icons'

import {t} from '../locales/index'

export default function CountDrops(){

	const [rate, setRate] = useState(0)
	const [count, setCount] = useState(0)

	const [lastTime, setLastTime] = useState(0)
	var newTime
	var time

	const countDrop = () => {
		var  a = count + 1
		setCount(a)

		var date = new Date()

		newTime = date.getTime()

		if (lastTime != null) {

			time = newTime - lastTime

			var rated = (60000/time).toFixed(0)

			setRate(rated)
		}

		setLastTime(newTime)
	}

	const repeat = () => {
		setCount(0)
		setRate(0)
		setLastTime(0)
	}

	return (
		<View style={styles.container}>
			<View style={styles.inner}>

				{/*this is header*/}
	          <View style={styles.headerContain}>
	            <Text style={styles.headerTitle}>{t('count_drops')}</Text>
	            <Text style={styles.headerSubTitle}>{t('count_drops_desc')}</Text>
	          </View>
	          {/*End header*/}

	      	{/*This is result form*/}
			<View style={styles.resultContain}>
				<Text style={styles.resultTitleText}>{t('iv_drip_rate')}</Text>
				<View style={local_styles.resultConatiner}>
					<Text style={local_styles.resultText}>{rate}</Text>
					<Text style={local_styles.unit}>{t('gtts_min')}</Text>
				</View>
			</View>
	  		{/*end result form*/}

	  		{/*This is rerult count*/}
	  		<View style={local_styles.countForm}>
	  			<Text style={local_styles.countTitle}>{count}</Text>
	  			<View style={local_styles.btnCountForm}>
	  				<TouchableOpacity
	  					onPress = {countDrop}
	  					style={local_styles.btnCount}
	  				>
	  					<Text style={local_styles.btnCountText}>+1 {t('drop')} </Text>
	  				</TouchableOpacity>
	  				<TouchableOpacity
	  					onPress = {repeat}
	  					style={local_styles.btnReset}
	  				>
	  					<FontAwesome name="repeat" size={30} color="#777"/>
	  				</TouchableOpacity>
	  			</View>
	  		</View>
	  		{/*end result count*/}

	  		<View style={styles.formInfo}>
            <Text style={styles.titleInfo}>{t('info')}</Text>
            <Text style={styles.contentInfo}>{t('count_drops_info')}</Text>
          </View>

			</View>
			<View>
				<AdMob />
			</View>
		</View>
	)
}

const local_styles = StyleSheet.create({
	resultConatiner:{
		flexDirection: 'row'
	},
	resultText:{
		textAlign: 'right',
		fontSize: 64,
		fontWeight: 'bold',
		color: '#fafafa',
		flex: 1,
		fontFamily: 'sans-serif'
	},
	unit:{
		fontSize: 18,
		fontWeight: 'bold',
		color: '#fafafa',
		marginTop: 46,
		marginLeft: 8,
		fontFamily: 'sans-serif'
	},
	countForm:{
		marginVertical: 15,
		padding: 8,
	},
	countTitle:{
		fontSize: 35,
		fontWeight: 'bold',
		color: '#00bfa5',
		fontFamily: 'sans-serif',
		textAlign: 'center'
	},
	btnCountForm:{
		flexDirection: 'row',
		marginTop: 15
	},
	btnCount:{
		flex: 1,
		marginHorizontal: 50,
		padding: 8,
		borderRadius: 5,
		backgroundColor: '#00bfa5',
	},
	btnCountText:{
		textAlign: 'center',
		color: '#fafafa'
	},
	btnReset:{
		margin: 5
	}
})
