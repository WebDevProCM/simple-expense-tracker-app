import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

interface TotalExpenseProps{
    title: string;
    total: string
}

const TotalExpense = ({title, total}: TotalExpenseProps) => {
  return (
    <View style={styleSheet.rootContainer}>
      <Text style={styleSheet.title}>{title}</Text>
      <Text style={styleSheet.total}>Rs.{total}</Text>
    </View>
  )
}

export default TotalExpense

const styleSheet = StyleSheet.create({
    rootContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#EBEAFF",
        padding: 15,
        borderRadius: 5
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