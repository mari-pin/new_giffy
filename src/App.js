import React from 'react';
import './App.css';
import ListOfGifs from './Components/ListOfGifs';
import { useState } from 'react';


export default function App() {

  const [keyword, setKeyword] = useState('panda')

  return (

    <div className="App">
      <section className="App-content">
     
      <button onClick = {() => setKeyword('mapache')}>Cambiar gifs</button>
       

        <ListOfGifs keyword ={keyword}/>
       
         
      </section>
    </div>
  );
}


