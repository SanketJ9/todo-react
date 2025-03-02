import React,{useEffect, useState} from 'react'
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import EditTodo from './EditTodo';

const ListTodos = () => {

    const [todos, setTodos] = useState([]);

    //get ALll Todods
    const getTodos = async () => {
        try {
            const response = await fetch('http://localhost:5000/todos');
            const jsonData = await response.json();
            setTodos(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    };

    const deleteTodo = async (id) => { 
        try {
            const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`, {
                method: 'DELETE'
            });
            
            setTodos(todos.filter(todo => todo.todo_id !== id));
        } catch (err) {
            console.error(err.message);
        }
    };


    useEffect(() => {
        getTodos();
    }, []);

    console.log(todos);

  return (
    <>
    <div className="relative mt-12 flex flex-col gap-2">
                {todos.map(todo => (

                    <div key={todo.todo_id} className='flex flex-row justify-between bg-mid border-2 gap-3 py-2 px-4 rounded-xl border-dark-theme border-b-4 border-b-dark-theme'>
                        <div>
                            <p className='text-[1.2rem] text-dark font-bold leading-1'>{todo.description}</p>
                        </div>
                        <div className='flex flex-row gap-3'>
                            <div>
                                <EditTodo todo={todo}/>
                            </div>
                            <div>
                                <button 
                                    onClick={() => deleteTodo(todo.todo_id)}
                                    class="btn text-2xl text-dark-theme hover:text-red-600"><MdDelete />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}

    </div>

    </>
  )
}

export default ListTodos
