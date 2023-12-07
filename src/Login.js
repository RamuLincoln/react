import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import {login, logout} from './features/user';
import {useSelector} from 'react-redux';
import ColorSelector from "./features/ColorSelector.js";
import './login.css'

function Login() {
    const dispatch = useDispatch();
    const [name,setName] = useState('');
    const user = useSelector(state => state.user.value)
    return (
        <div>
            { !user.name && (
                <div>
                <label>Name</label>
                <input value={name} onChange={e=>setName(e.target.value)} />

                </div>    
            )}
            { !user.name ? <div className='login'><button onClick={() => dispatch(login({name}))}>Submit</button></div> :<div className='logout'>
            <button onClick={() => dispatch(logout())}>Change Name</button>
            <ColorSelector /></div> }
        </div>
    )
}

export default Login