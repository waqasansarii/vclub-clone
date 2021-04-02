import React from 'react'
import {useDispatch} from 'react-redux'
import {login} from '../state/reducer'

const LoginScreen = () => {
    
   const dispatch = useDispatch()

    const handleLogin = ()=>{
        dispatch(login(true))
    }
    return (
        <div>
            <div>
                <input type='text' placeholder='name'  />
                <button onClick={handleLogin}> Login</button>
            </div>
        </div>
    )
}

export default LoginScreen
