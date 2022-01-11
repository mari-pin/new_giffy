import React from 'react';
import './App.css';
import ListOfGifs from './Components/ListOfGifs';
import { Link,Route } from "wouter";

/* import { useState } from 'react'; */


export default function App() {

 /*  const [keyword, setKeyword] = useState('panda') */

  return (

    <div className="App">
      <section className="App-content">
        <h1 className='title'>App de Gifs</h1>
        <Link 
        to='/gif/panda'>Gif de Pandas</Link>
        <Link 
        to='/gif/cats'>Gif de Gatos</Link>
        <Link 
        to='/gif/dogs'>Gif de Perros</Link>
        <Link 
        to='/gif/mapache'>Gif de Mapaches</Link>
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


