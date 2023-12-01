

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
  
  const Alerttitle = (heading1) => {
     alert(heading1)
  }
  return (
        <div className="block">
           
           <div className='Heading1'>
                
                <img src={image} ></img>
                <h3>{heading} {heading1}</h3> 
                <p>{text}</p>
                <button type='button' onClick={() => Alerttitle(text)}>click</button>
            </div>
            <Newphonedata />
        </div>
  );
}

export default New;
