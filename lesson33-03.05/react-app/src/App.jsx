import { useState } from 'react';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import Classroom from './components/Classroom';

function App() {
  const [form, setForm] = useState("register");
  const [classroom, setClassroom] = useState(null);

  function handleLogin() {
    setForm(null);
    setClassroom('classroom');
  }

  return (
    <>
      {!classroom && (
        form === 'register' ?
          <Register setForm={setForm} setClassroom={setClassroom} /> :
          <Login setForm={setForm} setClassroom={handleLogin} />
      )}
      {classroom === 'classroom' && <Classroom/>}
    </>
  );
}

export default App;
