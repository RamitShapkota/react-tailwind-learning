import { createSlice , nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{id:1 , text:"Hello world"}]
}

export const todoSlice = createSlice({
    name : "todo",
    initialState,
    reducers: {
        addTodo: (state,action) => { //to send the data to the store
            const todo = {
                id:nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo : (state,action) => {//to take data from the store
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },

        updateTodo : (state, action) => {
            // 1. Destructure the payload for easier reading
            const {id , text} = action.payload;

            // 2. Find the specific todo in our array
            const todo = state.todos.find((todo) => todo.id === id);

            // 3. If the todo exists, update its text
            if(todo){
                todo.text = text;
            }
        }
    }
    
})

export const {addTodo,removeTodo,updateTodo} = todoSlice.actions;

export default todoSlice.reducer;
