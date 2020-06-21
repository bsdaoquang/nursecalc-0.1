import React, {useState} from 'react'
import { View, Text, Button } from 'react-native'

export default function ShowHide (){

  const [showContent, setShowContent] = useState(true)

  const showHideContent = () => {
    setShowContent(!showContent)
  }
  return (
    <View style={{flex: 1, justifyContent: 'center', textAlign: 'center'}}>
      <Text style={{textAlign: 'center', marginVertical: 15}}>Click button to show/hide content </Text>
      {
        showContent?
        <Text style ={{fontWeight: 'bold', textAlign: 'center', marginVertical: 20, fontSize: 34}}>This is content</Text>
        : null
      }
      <Button title = 'Click to show/hide'
        onPress = {showHideContent}
      />
    </View>
  )
}
