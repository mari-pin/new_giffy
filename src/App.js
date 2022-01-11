import React from 'react';
import './App.css';
import ListOfGifs from './Components/ListOfGifs';
import { Route } from "wouter";

/* import { useState } from 'react'; */


export default function App() {

 /*  const [keyword, setKeyword] = useState('panda') */

  return (

    <div className="App">
      <section className="App-content">
        <h1>app</h1>
        <Route 
        component={ListOfGifs}
        path='/gif/:keyword'/>
     
     {/*  <button onClick = {() => setKeyword('mapache')}>Cambiar gifs</button> */}
       

        {/* <ListOfGifs keyword = 'panda' />
        */}
         
      </section>
    </div>
  );
}


