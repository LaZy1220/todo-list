import { ADD_TODO, REMOVER_COMPLITED, REMOVE_TODO, TOGGLE_TODO } from "./todo-const";

export const addTodo = (title)=>({
    type:ADD_TODO,
    title,
})
export const removeTodo = (id)=>({
    type:REMOVE_TODO,
    id,
})
export const toggleTodo = (id)=>({
    type:TOGGLE_TODO,
    id,
})
export const removeComplited = ()=>({
    type:REMOVER_COMPLITED,
})
