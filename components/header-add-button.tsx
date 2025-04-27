import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const HeaderAddButton = () => {
  return (
    <Pressable style={styleSheet.rootContainer}>
        <FontAwesome6 name="add" size={20} color="#EBEAFF" />
    </Pressable>
  )
}
export default HeaderAddButton

const styleSheet = StyleSheet.create({
    rootContainer: {
        paddingHorizontal: 20
    }
})