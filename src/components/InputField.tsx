import React from 'react';
import './styles.css' ;

interface Props{
  todo: string;
  setTodo:  React.Dispatch<React.SetStateAction<string>>
}

const Input = ({todo,setTodo}:Props) => {
  return <form className= 'inputForm'>
    <input type ='input'
    value={todo}
    onChange={
      (e)=>setTodo(e.target.value)
    }
    placeholder='Enter a Task' className='input__box'></input>
    <button className='input_submit' type='submit'>Go</button>
      </form>
}

export default Input