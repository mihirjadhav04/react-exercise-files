import { createContext, useContext } from "react";

//defining out todo context with attributes and methods.
export const TodoContext = createContext({
    //attributes
    todos: [
        {
            id: 1,
            todoTitle: "Todo message!",
            todoCompleted: false,
        }
    ],
    //methods
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    todoComplete: (id) => {}
})

export const useTodo = () => {
    //use context will always need the context about which we are/we want to talk.
    return useContext(TodoContext)
}

export const TodoContextProvider = TodoContext.Provider

