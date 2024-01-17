import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign, FontAwesome5 } from '@expo/vector-icons'; 

const Header = ({title, navigation}) => {
  return (
    <View style={styles.headerContainer}>
      {
            navigation.canGoBack()
            ?
            <TouchableOpacity onPress={navigation.goBack}>
              <AntDesign name="leftcircleo" size={30} color="black" />
            </TouchableOpacity>
            :
            <View></View>
          }
        
        <TouchableOpacity onPress={navigation.popToTop}>
              <FontAwesome5 name="home" size={30} color="black" />  
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{title}</Text>
      
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    headerContainer: {
        height: 100,
        flexDirection:'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        alignItems:'center',
        backgroundColor: '#219ebc',
        paddingTop:30,        
    },
    headerTitle:{
      fontSize: 30,
    }
   
})