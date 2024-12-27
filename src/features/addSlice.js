import { createSlice } from "@reduxjs/toolkit";

let initialTask;

    try {
    initialTask =JSON.parse(localStorage.getItem('tasks') || '[]');
    } catch{
        initialTask = [];
    }

let addTodoSlice = createSlice({
    name: "addTodo",
    initialState:{
        tasks:initialTask,
        editData:null,
        isEditAble:false,
        editIndex:null,
    },
    reducers:{
        Add:(state,action)=>{
            state.tasks.push(action.payload);
            localStorage.setItem('tasks',JSON.stringify(state.tasks))
        },
        Delete:(state,action)=>{
            state.tasks.splice(action.payload , 1);
            localStorage.setItem('tasks',JSON.stringify(state.tasks))
        },
        Mark:(state,action)=>{
            let obj = state.tasks
            obj[action.payload].isMraked = true;
            localStorage.setItem('tasks',JSON.stringify(obj))
        },
        Edit:(state, action)=>{
            state.isEditAble = true;
            state.editIndex = action.payload
            let obj = JSON.parse(localStorage.getItem('tasks'))
            state.editData = obj[state.editIndex]
        },
        Update:(state, action)=>{
            state.editData = null;
            state.isEditAble = false;
            let obj  = JSON.parse(localStorage.getItem('tasks'));
            obj[state.editIndex] = action.payload;
            state.editIndex = null;
            state.tasks = obj;
            localStorage.setItem('tasks',JSON.stringify(obj));
        }

    }
})
export const {Add,Delete,Mark,Edit,Update} = addTodoSlice.actions
export default addTodoSlice.reducer;