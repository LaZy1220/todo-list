import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from "./todo-const"

export const todos = (state=[],action)=>{
    switch(action.type){
        case ADD_TODO:{
            return [
                ...state,
                {
                    id:Math.random(),
                    title:action.title,
                    complited:false,
                }
            ]
        }
        case REMOVE_TODO:{
            return state.filter(todo=>todo.id!==action.id)
        }
        case TOGGLE_TODO:{
            return state.map(todo=>
                todo.id===action.id?{...todo,complited:!todo.complited}:todo
            )
        }
        default:{
            return state
        }
    }
}