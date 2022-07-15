import { useDispatch } from "react-redux/es/exports"
import { addTodo } from "../../store/todos/todo-action"

export function Form(){
    const dispatch  = useDispatch()
    const handleSubmit = (e)=>{
        e.preventDefault()
        if(e.target.title.value.trim()){
            dispatch(addTodo(e.target.title.value))
            e.target.reset()
            return
        }
        alert('Empty line')
    }
    return(
            <form className="mb-14 shadow-xl" onSubmit={handleSubmit}>
                <input
                className='bg-neutral-800 h-16 w-full text-center text-white rounded-xl text-xl'
                type='text'
                name='title'
                placeholder='add new todos'/>
            </form>
    )
}