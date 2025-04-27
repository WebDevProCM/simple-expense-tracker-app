import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import TotalExpense from '../components/total-expense'

const RecentExpensesScreen = () => {
  return (
    <View style={styleSheet.rootContainer}>
      <TotalExpense title='Recent 7 days' total='500'/>
    </View>
  )
}

export default RecentExpensesScreen

const styleSheet = StyleSheet.create({
    rootContainer: {
        // justifyContent: "center",
        // alignItems: "center",
        flex: 1,
        padding: 30
    }
})