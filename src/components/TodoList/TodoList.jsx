import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck } from "@fortawesome/free-solid-svg-icons"
import { useSelector,useDispatch } from "react-redux"
import { selectActiveTodo } from "../../store/todos/todo-select"
import { removeTodo,toggleTodo } from "../../store/todos/todo-action"
import {useParams} from 'react-router-dom'
import { Filters } from "../Filters/Filters"

export function TodoList(){
    const dispatch = useDispatch()
    const {filter='all'}= useParams()
    const todos = useSelector(state=>selectActiveTodo(state,filter))
    return(
    <>
        <ul className="shadow-xl ">
            {
                todos.map(todo=>(
                    <li className=' break-all flex justify-between sm: bg-neutral-800 w-full text-center text-white text-xl  break-normal' style={{borderBottom: '1px solid white'}} key={todo.id}>
                        <div className="m-6 flex ">
                        <label className="relative bottom-1 cursor-pointer">
                        <input id="check-box" className=" appearance-none h-7 w-7 rounded-full border-2  relative top-1" type='checkbox' checked={todo.complited} onChange={()=>dispatch(toggleTodo(todo.id))}/>
                        <FontAwesomeIcon icon={faCheck}
                        className='text-lx h-5 w-5 text-white absolute right-1 top-2 text-opacity-0 check-1 transition'/>
                        </label>
                        <label className="ml-4">
                        {todo.title}
                        </label>
                        </div>
                        <i className= "cursor-pointer text-white mr-8 mt-8 " onClick={()=>dispatch(removeTodo(todo.id))}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="#494C6B" fillRule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/></svg>
                        </i>
                    </li>
                ))
            }
        </ul>
        <Filters/>
    </>
    )
}