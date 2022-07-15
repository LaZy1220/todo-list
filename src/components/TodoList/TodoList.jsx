export function TodoList(){
    const todos = [{title:'Max',complited:false, id:Math.random()},
    {title:'Max',complited:false, id:Math.random()},
    {title:'Max',complited:false, id:Math.random()},
    {title:'Max',complited:false, id:Math.random()},]
    return(
        <ul className="shadow-xl">
            {
                todos.map(todo=>(
                <li className='flex justify-between bg-neutral-800 w-full text-center text-white text-xl' style={{borderBottom: '1px solid white'}} key={todo.id}>
                        <div className="m-6">
                        <input className="mr-4" type='checkbox'/>
                        {todo.title}
                        </div>
                        <i className= "cursor-pointer text-white m-6 ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="#494C6B" fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/></svg>
                        </i>
                    </li>
                ))
            }
        </ul>
    )
}