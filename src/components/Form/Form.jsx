
export function Form(){
    return(
            <form className="mb-14 shadow-xl">
                <input
                className='bg-neutral-800 h-16 w-full text-center text-white rounded-xl text-xl'
                type='text'
                name='title'
                placeholder='add new todos'/>
            </form>
    )
}