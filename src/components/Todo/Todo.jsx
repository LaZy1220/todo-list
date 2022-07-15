import {Form} from '../Form/Form'
import { TodoList } from '../TodoList/TodoList'
export function Todo(){
    return(
        <div className='pt-10 w-6/12'>
            <h1 className="text-white text-4xl mb-4 tracking-widest">TODO</h1>
            <Form/>
            <TodoList/>
        </div>
    )
}