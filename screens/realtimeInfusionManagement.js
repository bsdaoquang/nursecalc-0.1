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
			const value = await AsyncStorage.getItem('@keyDatabase')
			if(value !== null) {
		      // value previously stored
		      	setKeyDatabase(value)
		  	}
		} catch(e) {
		    console.log(e)
		}
	}

	getData()

	return(
		<SafeAreaView>
			<View style={styles.container}>
				
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container:{
		flex: 1
	}
})
