import React, {useState} from 'react'
import {
	Text, View, StyleSheet, SafeAreaView, TextInput,
 	TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView,
	TouchableOpacity
} from 'react-native'
import RIMScreen from './realtimeInfusionManagement'
import IMScreen from './infusionManagement'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {firebaseApp} from '../components/firebaseConfig'

import NetInfo from '@react-native-community/netinfo';

export default function WellComeScreen({navigation}){

	const [status, setStatus] = useState(false)
	const [name, setName] = useState('')
	const [getName, setGetName] = useState('')
	const [count, setCount] = useState()

	//Kiểm tra kết nối mạng
	NetInfo.fetch().then(state => {
		setStatus(state.isConnected)
	});

	//kiểm tra xem có biến name đã được lưu hay chưa
	//Hàm lấy ra giá trị đã lưu
	const getData = async () => {
		try {
			const value = await AsyncStorage.getItem('@getName')
			if(value !== null && status == false) {
		      // value previously stored
		      	setGetName(value)
		  	}
		} catch(e) {
		    console.log(e)
		}
	}

	getData()

	//nếu máy có mạng -> kiểm tra 

	//Yêu cầu người dùng nhập tên và lưu vào thiết bị
	//Lưu vào trong bộ nhớ máy
	
	function checkName(name){
		//Kiểm tra khả dụng trước khi tiến hành lưu trong trường hợp có mạng
		if (status == true) {
			//kiểm tra xem trong firebase có tên này chưa
			firebaseApp.database().ref().child('user').orderByChild('userName').equalTo(name).on('value', snap => {
				if (snap.val() !== null) {
					//đã tồn tại trên firebase
					//yêu cầu người dùng đặt tên mới
					alert('Tên đăng nhập này đã có, hãy chọn tên đặng nhập mới hoặc số điện thoại của bạn')
				}else{
					//chưa có trên firebase
					//tạo mới và lưu vào storage
					firebaseApp.database().ref().child('user').push({
						userName: name
					})

					saveData(name)
				}
				
			})
		}else{
			//không có mạng thì cứ thế mà lưu vào máy thôi
			saveData(name)
		}
	}
		
	const saveData = async (name) => {
		try {
			await AsyncStorage.setItem('@getName', name)
		} catch (e) {
			console.log(e)
		}
	}

	return(
		<View style={styles.container}>
		 	<KeyboardAvoidingView>
				<TouchableWithoutFeedback onPress={Keyboard.dismiss}> 
					<View style={{flex: 1, justifyContent: 'center'}}>
					{
						getName == '' ?
						<View>
							<Text>Xin chào bạn! Đây là lần đầu tiên sử dụng của bạn.</Text>
							<Text>Nhập tên đăng nhập hoặc số điện thoại của bạn ở bên dưới nhé</Text>
							<TextInput
								style={{
									borderWidth: 1,
									borderRadius: 5,
									borderColor: '#212121',
									padding: 5,
									width: '100%',
									marginVertical: 10
								}}
									placeholder = 'Tên đăng nhập hoặc số điện thoại của bạn'
									onChangeText={name => setName(name)}
							/>

							<View style={{alignItems: 'center'}}>
								<TouchableOpacity style={{
								marginVertical: 15,
								backgroundColor: '#3495ed',
								padding: 8,
								width: '50%',
								borderRadius: 5,
								alignItems: 'center',
								}}

								onPress={() => checkName(name)}>
									<Text style={{color: '#fafafa'}}>Đồng ý</Text>
								</TouchableOpacity>
							</View>								
						</View>
						:
				 			status == true ? <RIMScreen /> : <IMScreen />
					}
					</View>	
				</TouchableWithoutFeedback>
			</KeyboardAvoidingView>
		</View>
		
	)
}

const styles = StyleSheet.create({
	container:{
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 10
	},
})
