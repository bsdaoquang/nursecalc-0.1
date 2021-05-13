import React, {useState} from 'react'
import {Text, View, StyleSheet, SafeAreaView, FlatList} from 'react-native'
import { firebaseApp } from '../components/firebaseConfig'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function RIMScreen({navigation}){

	//Máy có kết nối mạng
	//kiểm tra xem người dùng đã kết nối đến database chưa
	/*
		có rồi thì thôi
		chưa có thì kêu người dùng quét mã để kết nối
	*/

	const [keyDatabase, setKeyDatabase] = useState()
	const [name, setName] = useState()
	const [userKey, setUserKey] = useState()

	//Lưu vào trong bộ nhớ máy
	const storeData = async (value) => {
		try {
			await AsyncStorage.setItem('@keyDatabase', value)
		} catch (e) {
			console.log(e)
		}
	}

	//Hàm lấy ra giá trị đã lưu
	const getData = async () => {
		try {
			const keyDatabase = await AsyncStorage.getItem('@keyDatabase')
			if(keyDatabase !== null) {
		      // value previously stored
		      	setKeyDatabase(keyDatabase)
		  	}

		  	//get name
		  	const name = await AsyncStorage.getItem('@getName')
			if(name !== null) {
		      // value previously stored
		      	setName(name)
		  	}
		} catch(e) {
		    console.log(e)
		}
	}

	getData()
	var key
	//Lấy id của tên này trong firebase để lưu và lấy dữ liệu
	firebaseApp.database().ref().child('user').orderByChild('userName').equalTo('Đào Quang').once('value', snap => {
		if (snap.val() !== null) {
			snap.forEach(item => {
				key = item.key	
			})
		}
	})

	setUserKey(key)

	return(
		<SafeAreaView>
			<View style={styles.container}>
				<Text>Xin chào {name}</Text>
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container:{
		flex: 1
	}
})
