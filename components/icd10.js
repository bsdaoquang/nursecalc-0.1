import * as React from 'react';
import { WebView } from 'react-native-webview';

export default function ICD10(){
  return(
    <WebView source={{ uri: 'http://icd.kcb.vn/ICD/' }}/>
  );
}
