import * as React from 'react';
import { WebView } from 'react-native-webview';
import { View } from 'react-native'
import AdMob from '../screens/admob_Screen'

export default function ICD9(){
  return(
    <WebView source={{ uri: 'http://123.31.27.68/ICD/ICD9.htm' }}/>
  );
}
