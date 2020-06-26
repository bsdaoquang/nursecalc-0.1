import React, {useState} from 'react'
import { View, Text } from 'react-native'

import {t} from '../locales/index'

export default function TestMulti(){
  return(
    <View>
      <Text>{t('hello_world')}</Text>
      <Text>{t('bye_world')}</Text>
    </View>
  )
}
