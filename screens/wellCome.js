import React, {useState} from 'react'
import {
	Text, View, StyleSheet, SafeAreaView, TextInput,
 	TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView,
	TouchableOpacity
} from 'react-native'
import RIMScreen from './realtimeInfusionManagement'
import IMScreen from './infusionManagement'

import NetInfo from '@react-native-community/netinfo';

export default function WellComeScreen({navigation}){

	const [status, setStatus] = useState(false)


	//Kiểm tra kết nối mạng
	NetInfo.fetch().then(state => {
		setStatus(state.isConnected)
	});

	//Yêu cầu người dùng nhập tên và lưu vào thiết bị

	return(
		<View style={styles.container}>
		 	<KeyboardAvoidingView>
				<TouchableWithoutFeedback onPress={Keyboard.dismiss}> 
					<View style={styles.inner}>
						<View>
						<Text>Xin chào bạn! Đây là lần đầu tiên sử dụng của bạn. Hãy cho mình biết tên nhé!</Text>
							<TextInput
								style={{
									borderWidth: 1,
									borderRadius: 5,
									borderColor: '#212121',
									padding: 5,
									width: '100%',
									marginVertical: 10
								}}
								placeholder = 'nhập tên của bạn ở đây'
								/>

								<TouchableOpacity style={{
									marginVertical: 15,
									backgroundColor: '#3495ed',
									padding: 8,
									width: '50%',
									borderRadius: 5,
									alignItems: 'center'
								}}>
								<Text>Đồng ý</Text>
								</TouchableOpacity>
							</View>
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
	}
})
