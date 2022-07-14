import './Form.css'

export function Form(){
    return(
        <div className="form">
            <form>
                <input
                type='text'
                name='title'
                placeholder='add new todos'/>
            </form>
        </div>
    )
}