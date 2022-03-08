import React  from 'react'
import {View,Text,Button} from 'react-native'


  const Home =({navigation})=> {
    
  return (
    <View>
        <Text>homecreen</Text>
        <Button onPress={()=>navigation.navigate('Profile')} title="go to profile"/>
    </View>
  )
}

export default Home;