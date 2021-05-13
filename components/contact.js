import React from 'react'
import {Text, View, StyleSheet, SafeAreaView, Image } from 'react-native'
import {Ionicons, FontAwesome5} from '@expo/vector-icons'

export default function Contact(){
	return(
		<SafeAreaView style={styles.container}>
			<Text style={styles.title}> Liên hệ</Text>

      <Text style={styles.titleInfo}>Bs. Đào Quang</Text>
      <View style={styles.infoContain}>
        <FontAwesome5 name="search-location" size={22} color="#d50000" style={{marginRight: 10}} />
        <Text style={styles.textInfo}>Gia canh, Định quán, Đồng nai</Text>
      </View>

      <View style={styles.infoContain}>
        <Ionicons name="ios-mail" size={24} color="coral" style={{marginRight: 10}} />
        <Text style={styles.textInfo} onPress = {() => {Linking.openURL('mailto:bsdaoquangadmod@gmail.com?subject=SendMail&body=Description')}}>Email</Text>
      </View>
      <View style={styles.infoContain}>
        <Ionicons name="ios-call" size={24} color='#00bfa5' style={{marginRight: 10}} />
        <Text style={styles.textInfo} onPress = {() => {Linking.openURL('tel:+84328323686')}}>0328323686</Text>
      </View>
      <View style={styles.infoContain}>
        <Ionicons name="logo-facebook" size={24} color="#4267b2" style={{marginRight: 10}} />
        <Text style={styles.textInfo} onPress = {() => {Linking.openURL('https://www.facebook.com/bsdaoquanggmhs')}}>Facebook</Text>
      </View>
      <View style={styles.infoContain}>
        <FontAwesome5 name="facebook-messenger" size={24} color="#3578E5" style={{marginRight: 10}} />
        <Text style={styles.textInfo} onPress = {() => {Linking.openURL('https://www.messenger.com/t/100027844147731')}}>Messenger</Text>
      </View>
      <View style={styles.infoContain}>
        <Image style={{width: 24, height: 24, borderRadius: 5, marginRight: 10}} source={require('../assets/zalo.jpg')}/>
        <Text style={styles.textInfo} onPress = {() => {Linking.openURL('https://zalo.me/0328323686')}}>Zalo chat</Text>
      </View>
      <View>
        <Text> </Text>
      </View>
      <Text style={styles.textInfo}>Mình có thể giúp gì cho bạn, hãy để lại lời nhắn, mình sẽ liên hệ với bạn ngay khi có thể</Text>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		paddingHorizontal: 10,
		marginTop: 40,
		paddingVertical:10
	},
	title:{
		color: '#777',
		textAlign: 'center',
		fontSize: 24,
		fontWeight: 'bold',
		fontFamily: 'sans-serif',
		textTransform: 'uppercase',
    marginVertical: 15
	},
	desc:{
		color: '#777',
		textAlign: 'center',
		fontSize: 16,
		fontFamily: 'sans-serif',
	},
	titleInfo:{
		color: '#777',
		fontSize: 18,
		fontWeight: 'bold',
		fontFamily: 'sans-serif',
		marginVertical: 8
	},
	textInfo:{
		color: '#777',
		fontSize: 16,
		fontFamily: 'sans-serif',
	},
  infoContain:{
    flexDirection: 'row',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: '#e0e0e0',
    paddingHorizontal: 5,
  }
})
