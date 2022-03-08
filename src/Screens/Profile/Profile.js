import React from 'react'
import {View,Text} from 'react-native'

export default function Profile({navigation,route}) {
console.log(route)
   const {title} = route.params
  console.log(title)
  return (
    <View>
        <Text>homecreen</Text>
        <Text>{title}</Text>
    </View>
  )
}
