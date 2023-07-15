import React, { useState } from 'react';
import './App.css';
import Input from './components/InputField';


const App: React.FC = () => {

  const [todo, setTodo] = useState<string>("");

  console.log(todo)

  return (
    <div className="App">
    <span className='Heading' > Taskify</span>
    <Input todo={todo} setTodo={setTodo}/>
    </div>
  );
}

export default App;
 