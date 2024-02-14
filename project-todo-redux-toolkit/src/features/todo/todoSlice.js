import { createSlice, nanoid } from "@reduxjs/toolkit";

// nanoid : to generate unique ids 
// createSlice: to create a Slice/Reducer

const initialState = {
    todos: [{
        id: 1,
        text: "Hello, World!"
    }]
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    // inside reducers you have properties and function.
    // here we also write the defination of the function which was not in context api.
    // inside which we always get access to 2 things: state(current state's value) and action.
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), // to generate unique id.
                text: action.payload, // to get the text from user.
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter( (todo) => todo.id !== action.payload )
        },
        //TODO: update todo.
    }
}) 

// needs to be export the functinality seperately as we will be using that to update our states.   
export const { addTodo, removeTodo } = todoSlice.actions

export default todoSlice.reducer
// now store needs to be informed witht eh list of reducers.
