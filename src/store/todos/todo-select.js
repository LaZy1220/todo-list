export const selectAllTodo = state=>state.todos

export const selectActiveTodo = (state,filter)=>{
    switch(filter){
        case 'all':{
            return state.todos
        }
        case 'active':{
            return state.todos.filter(todo=>!todo.complited)
        }
        case 'complited':{
            return state.todos.filter(todo=>todo.complited)
        }
        default:{
            return state.todos
        }
    }
}