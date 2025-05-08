import { View, Text, FlatList, StyleSheet } from 'react-native'
import React, { Key } from 'react'
import { dummyData, ExpenseData } from '../data/expenses-data'
import Expense from './expense'

const ExpensesList = ({items}: {items:ExpenseData[]}) => {
  return (
    <FlatList 
      style={styleSheet.rootContainer}
      data={items}
      renderItem={(itemData) => (
          <Expense data={itemData.item}/>
      )}
      keyExtractor={(item) => item.id.toString()}
    />
  )
}

const styleSheet = StyleSheet.create({
  rootContainer: {
    padding: 5,
    paddingHorizontal: 15
  }
})

export default ExpensesList