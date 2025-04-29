import { View, Text, FlatList } from 'react-native'
import React, { Key } from 'react'
import { dummyData, ExpenseData } from '../data/expenses-data'
import Expense from './expense'

const ExpensesList = ({items}: {items:ExpenseData[]}) => {
  return (
    <FlatList 
        data={items}
        renderItem={(itemData) => (
            <Expense data={itemData.item}/>
        )}
    />
  )
}

export default ExpensesList