import New from "./new"
import styled from "styled-components"
import {data} from "./products"
import logo from './images/logo.jpg';
import Nav from "./Components/nav.jsx";
import Login from "./Login.js";
import Profile from "./profile.js";
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import { userSlice } from './features/user.js';
import { themeSlice } from './features/Theme.js';

const store = configureStore({
  reducer: {
    user : userSlice.reducer,
    theme : themeSlice.reducer
  }
})
function App(){
  console.log(data)
  
  return (
    <div>
      <Maincontainer>
          <LogoImage src={logo} />
          <h3>Phone Store</h3>
      </Maincontainer>
      <TopContainer>
          <Provider store = {store}>
            <Profile />
            <Login />
          </Provider>
      </TopContainer>
      <TopContainer>
          <Nav />
      </TopContainer>
      <GridContainer>
        {data.map((data)=>
        <New data={data} />
        )}  
 
      </GridContainer>
      
    </div>

  )
};

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
export default App  
const Maincontainer = styled.div`
  background-color: #CBD5C8;  
  color: Dark blue;
  display : flex;
`;
const LogoImage = styled.img`
  max-height: 5%;
  max-width: 5%;
  margin-right: 20px; /* Adjust margin as needed */
`;

const TopContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const GridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;