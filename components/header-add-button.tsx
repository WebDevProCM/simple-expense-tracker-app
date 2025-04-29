import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';

const HeaderAddButton = () => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  const pressHandler = () =>{
    navigation.navigate("manage-expense");
  }

  return (
    <Pressable onPress={pressHandler} style={styleSheet.rootContainer} android_ripple={{color:"black"}}>
        <FontAwesome6 name="add" size={20} color="#EBEAFF" />
    </Pressable>
  )
}
export default HeaderAddButton

const styleSheet = StyleSheet.create({
    rootContainer: {
        marginHorizontal: 20
    }
})