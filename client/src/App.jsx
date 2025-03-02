import { useState } from 'react'
import './App.css'
import InputTodo from './components/InputTodo'
import ListTodos from './components/ListTodos'

function App() {

  return (
    <>
      <div className='App '> 
        <div className="container max-w-[720px] mx-auto">
          <InputTodo/>      
          <ListTodos/>
        </div>

      </div>
    </>
  )
}

export default App
