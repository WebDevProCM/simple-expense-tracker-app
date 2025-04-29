import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { ExpenseData } from '../data/expenses-data'
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native'

const Expense = ({data}: {data:ExpenseData}) => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  const pressHandler = () =>{
    navigation.navigate("manage-expense");
  }

  return (
    <Pressable onPress={pressHandler} android_ripple={{color:"black"}} style={styleSheet.rootContainer}>
    {/* <View style={styleSheet.rootContainer}> */}
      <Text style={styleSheet.title}>{data.title}</Text>
      <Text style={styleSheet.total}>Rs.{data.amount}</Text>
    {/* </View> */}
    </Pressable>
  )
}

export default Expense

const styleSheet = StyleSheet.create({
    rootContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#B5A8D5",
        padding: 15,
        borderRadius: 5,
        marginTop: 8
    },
    title: {
        fontWeight: "bold",
        color: "#002855"
    },
    total: {
        fontWeight: "bold",
        color: "#0353a4"
    }
})