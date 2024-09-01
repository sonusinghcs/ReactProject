import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = {
  todo:[{id:1,text:'hello world',}]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text:action.payload
            }
            state.todo.push(todo)
        },
        removeTodo:(state,action)=>{
            state.todo = state.todo.filter(todo=>todo.id!==action.payload)
        },
        updateTodo:(state,action)=>{
            const {id,text} = action.payload;
            const todo = state.todo.find(todo=>todo.id===id)
            if(todo){
                todo.text = text
            }
        }
    }
})

export const {addTodo, removeTodo,updateTodo} = todoSlice.actions

export default todoSlice.reducer;