import React from 'react'
import {useHistory} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {login} from '../state/reducer'

const LoginScreen = () => {
    
   const dispatch = useDispatch()

     const history = useHistory()
    const handleLogin = ()=>{
        dispatch(login(true))
         history.push('/news')
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
