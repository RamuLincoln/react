
import './sass/new.css';

function New(props) {
  console.log("props data",props)
  const{data} = props
  console.log(data)
  const{heading, heading1, text, image} = data


  return (
        <div className="block">
           
           <div className='Heading1'>
                <h3>{heading}</h3>
                <h2>{heading1}</h2>
                <p>{text}</p>
            </div>
           <div className='image'>
                <img src={image} ></img> 
            </div> 

        </div>
  );
}

export default New;
