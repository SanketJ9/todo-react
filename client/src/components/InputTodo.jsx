import React,{useState} from 'react'
import { MdAdd } from "react-icons/md";

const InputTodo = () => {
    const [description, setDescription] = useState('');

    const onSubmitForm = async e => {
        e.preventDefault();
        try {

            if(!description) {
                return;
            }
            const body = { description };
            const response = await fetch('http://localhost:5000/todos', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            });

            window.location = '/';
        } catch (err) {
            console.error(err.message);
        }
    }   

  return (
    <>
        <div className='input-cont w-full'>
            <h1 className="text-center text-5xl font-display font-semibold text-primary text-dark">TaskList</h1>
            <form className="w-full flex flex-wrap mt-5 items-center justify-center gap-2" onSubmit={onSubmitForm}>
                <input 
                    type="text" 
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    className="flex-1 text-[1.2rem] text-dark font-bold bg-mid border-2 border-dark-theme border-b-4 border-b-dark-theme p-3 outline-none rounded-xl" />
                <button type='submit'
                className="btn btn-success text-3xl p-2 bg-theme rounded-xl text-mid border-2 border-dark-theme border-b-4 border-b-dark-theme hover:bg-dark-theme active:bg-light"><MdAdd className='font-bold'/></button>
            </form>
        </div>
    </>
  )
}

export default InputTodo
