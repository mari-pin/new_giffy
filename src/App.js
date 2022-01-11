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
        <h1 className='title'>App de Gifs</h1>
        <a href='/gif/panda'>Gif de Pandas</a>
        <a href='/gif/cats'>Gif de Gatos</a>
        <a href='/gif/dogs'>Gif de Perros</a>
        <a href='/gif/mapache'>Gif de Mapaches</a>
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


