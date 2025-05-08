import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import TotalExpense from '../components/total-expense'
import ExpensesList from '../components/expenses-list'
import { useAppSelector } from '../store/hook'

const AllExpensesScreen = () => {
  const expenses = useAppSelector((state) => state.expenseSlice);
  let total = 0;
  expenses.forEach((item) => (total += item.amount))

  return (
     <View style={styleSheet.rootContainer}>
      <TotalExpense title='Total Expenses' total={total}/>
      <View style={styleSheet.expensesView}>
        <ExpensesList items={expenses}/>
      </View>
    </View>
  )
}

export default AllExpensesScreen

const styleSheet = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 30
    },
    expensesView: {
      marginVertical: 20,
      gap: 8,
      padding: 10
    }
})