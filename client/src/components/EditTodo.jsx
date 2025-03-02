import React,{useState} from 'react'
import { MdEdit } from "react-icons/md";
import { MdClose } from "react-icons/md";

const EditTodo = ({todo}) => {

    const [description, setDescription] = useState(todo.description);

    const updateDescription = async (e) => {
        e.preventDefault();
        try{
            const body = {description};
            const response = await fetch(`${import.meta.env.backend_base_url}/todos/${todo.todo_id}`, {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(body)
            });

            window.location = '/';
        }catch(err){
            console.log(err.message);
        }
    }

    const [openModal, setOpenModal] = useState(false);

  return (
    <>
        <button 
        onClick={() => {
            setDescription(todo.description)
            setOpenModal(true)
        }}
        class="btn btn-primary text-2xl text-dark-theme hover:text-theme"
        >
            <MdEdit />
        </button>  
        
        {openModal && ( 
            <div 
            onClick={(e) => {
                e.preventDefault();
                if(e.target === e.currentTarget) {
                    setOpenModal(false);
                }
             
            }}
            class="fixed z-10 w-full h-full bg-black bg-opacity-80 inset-0 overflow-y-auto flex justify-center items-center" 
            >
                <div class="flex flex-col gap-3 items-center bg-light max-h-max rounded-2xl border-2 border-dark-theme border-b-8 border-b-dark-theme relative w-[80vw] max-w-[1080px] flex items-end  justify-center py-8 px-4  text-center ">
                    <h3 className='font-bold font-display text-4xl text-dark mb-4'>Edit Todo</h3>
                    <div className='modal-body w-full'>
                        <input 
                        type="text"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        className="form-control w-full text-[1.2rem] text-dark font-bold bg-mid border-2 border-dark-theme border-b-4 border-b-dark-theme p-3 outline-none rounded-xl"  
                        />
                    </div>
                    <div className='flex flex-row items-end gap-3'>
                        <button 
                        onClick={e =>  updateDescription(e)}
                        class="btn btn-success text-3xl p-2 bg-theme rounded-xl text-mid border-2 border-dark-theme border-b-4 border-b-dark-theme hover:bg-dark-theme active:bg-light">
                            <MdEdit/>
                        </button>
                        <button 
                        onClick={() => setOpenModal(false)}
                        class="btn btn-success text-3xl p-2 bg-theme rounded-xl text-mid border-2 border-dark-theme border-b-4 border-b-dark-theme hover:bg-dark-theme active:bg-light">
                            <MdClose/>
                        </button>
                    </div>
                </div>


            </div>
        )}
    </>
  )
}

export default EditTodo
