import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import {login, logout} from './features/user';
import {useSelector} from 'react-redux';

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
            { !user.name ? <button onClick={() => dispatch(login({name}))}>click to change name</button> :
            <button onClick={() => dispatch(logout())}>Change Name</button> }
        </div>
    )
}

export default Login