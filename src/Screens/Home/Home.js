import React  from 'react'
import {View,Text,Button} from 'react-native'


  const Home =({navigation})=> {
    

  return (
    <View>
        <Text>homecreen</Text>
        <Button onPress={()=>navigation.navigate('Profile',{title:"subscribe my channel"}) } title="go to proofile"/>
    </View>
  )
}

export default Home;