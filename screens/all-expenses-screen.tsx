import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import TotalExpense from '../components/total-expense'

const AllExpensesScreen = () => {
  return (
     <View style={styleSheet.rootContainer}>
      <TotalExpense title='All Expenses' total='500'/>
    </View>
  )
}

export default AllExpensesScreen

const styleSheet = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 30
    }
})