import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import TotalExpense from '../components/total-expense'
import Expense from '../components/expense'
import ExpensesList from '../components/expenses-list'
import { dummyData } from '../data/expenses-data'

const RecentExpensesScreen = () => {
  let total = 0;
  const recentExpenses = dummyData.filter((item) => {
    const now = new Date();
    const sevenDaysAgo = new Date(new Date().setDate(now.getDate() - 7));
    return item.date.getDate() > sevenDaysAgo.getDate();
  })

  recentExpenses.forEach((item) => (total += item.amount))

  return (
    <View style={styleSheet.rootContainer}>
      <TotalExpense title='Recent 7 days' total={total}/>
      <View style={styleSheet.expensesView}>
        <ExpensesList items={recentExpenses}/>
      </View>
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
    },
    expensesView: {
      marginVertical: 20,
      gap: 8,
      padding: 10
    }
})