import { configureStore } from "@reduxjs/toolkit";
import { expenseReducer } from "./expenses-slice";


const store = configureStore({
    reducer: {expenseSlice: expenseReducer},
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck: false, // 👈 Not recommended unless you're confident
    }),
})


export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch