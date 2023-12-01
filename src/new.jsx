

import { useState } from 'react';
import './sass/new.css';

function New(props) {
  console.log("props data",props)
  const{data} = props
  console.log(data)
  const{heading, heading1, text, image} = data
  const Newphonedata = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(datas => console.log(datas))
  .catch(error => console.error(error));}
  
  const [value, setValue] = useState(0)
  
  return (
        <div className="block">
           
           <div className='Heading1'>
                
                <img src={image} alt='img'></img>
                <h3>{heading} {heading1}</h3> 
                <p>{text}</p>
                <div className='but'>
                  {value>0 ?
                  <> <button type='button' onClick={() => setValue(value - 1)}> - </button> <button> {value}</button> <button type='button' onClick={() => setValue(value + 1)}>+</button></>:
                  <button type='button' onClick={() => setValue(value + 1)}> + </button>}
                 </div>
            </div>
            <Newphonedata />
        </div>
  );
}

export default New;
