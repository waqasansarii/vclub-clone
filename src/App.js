import React, { useState, useEffect} from 'react'
import Approuter from './router/Approuter'
import Validation from './pages/validationPage/validation'
import {useSelector} from 'react-redux'
import './App.css';

function App() {

  let [validate, setValidate] = useState(true)
  const selector = useSelector((state)=>{
    return state.userReducers.user
  })

  useEffect(() => {

    if (selector) {
      setTimeout(() => {
        setValidate(false)
      }, 1000)
    }
  })

  return (


      <div>

        {validate ?
          <Approuter />
          :
          <Validation />
        }
    </div>
  );
}

export default App;
