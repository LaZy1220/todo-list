import { useSelector,useDispatch} from "react-redux"
import { selectAllTodo } from "../../store/todos/todo-select"
import { Link, useParams } from "react-router-dom";
import { removeComplited } from "../../store/todos/todo-action";

export function Filters(){
    let counter = 0;
    const dispatch = useDispatch()
    const todos = useSelector(selectAllTodo)
    todos.forEach(todo => {
        if(!todo.complited){
            counter++
        }
        return counter        
    });
    const {filter:activeFilter='all'}=useParams()
    return(
        <div className="flex justify-between bg-neutral-800 text-white rounded-b-xl text-center">
            <p className="m-5 text-xs">{counter} items left</p>
                <div className="flex flex-col justify-between mt-4 sm:flex-row">
                    <Link className="mr-3" to='/all' style={{color:activeFilter ==='all'?'rgb(6 182 212)':'white'}}>all</Link>
                    <Link className="mr-3"to='/active' style={{color:activeFilter ==='active'?'rgb(6 182 212)':'white'}}>active</Link>
                    <Link to='/complited ' style={{color:activeFilter ==='complited'?'rgb(6 182 212)':'white'}}>complited</Link>
                </div>
            <span className="cursor-pointer m-5 text-sm hover:text-cyan-500" onClick={()=>dispatch(removeComplited())}>Clear Complited</span>
        </div>
    )
}