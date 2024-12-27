import { configureStore } from "@reduxjs/toolkit";
import addTodoReducer from '../features/addSlice'
export const store = configureStore({
    reducer:{
        AddTodo:addTodoReducer,
    }
})

