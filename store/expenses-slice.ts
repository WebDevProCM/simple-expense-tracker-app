import { createSlice } from "@reduxjs/toolkit";
import { dummyData } from "../data/expenses-data";

const initialState = dummyData

const expensesSlice = createSlice({
    initialState: initialState,
    name: "expensesSlice",
    reducers: {
        addExpense: (state, action) =>{
            state.push({title: action.payload.title, amount: action.payload.amount, date: new Date(action.payload.date), id: state.length + 1});
        },
        removeExpense: (state, action) =>{
            const newState = state.filter((expense) => expense.id != action.payload.id);
            return newState;
        },
        updateExpense: (state, action) =>{
            const {id, title, amount, date} = action.payload;
            const expense = state.find((expense) => expense.id === id);
            if(expense){
                Object.assign(expense, {title, amount, date:new Date(date)});
            }
        },
    }
})

export const expenseReducer = expensesSlice.reducer;
export const {addExpense, removeExpense, updateExpense} = expensesSlice.actions