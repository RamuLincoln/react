import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import { changeColor } from './Theme';

function ColorSelector() {
    const [color,setColor] = useState('black');
    const dispatch = useDispatch();
  return (
    <div>NameColor
        <input type='color' value={color} onChange={(e)=>setColor(e.target.value)} />
        <button onClick={() => (dispatch(changeColor(color)))}>Change color</button>
    </div>
  )
}

export default ColorSelector