import React, {useState} from 'react';
import './App.css';


const GIFS = [
  'https://media3.giphy.com/media/ndeihy7lvAL9C/200w.webp?cid=ecf05e47tfbgwdeyz0pp4o1xc9172m2dhd33g4clqecvwzm7&rid=200w.webp&ct=g',
  'https://media2.giphy.com/media/uSYQsJQWEv6O4/200.webp?cid=ecf05e47tfbgwdeyz0pp4o1xc9172m2dhd33g4clqecvwzm7&rid=200.webp&ct=g'
]

const DIFFERENT_GIFS = [
  'https://media0.giphy.com/media/6Ze96VQjmecIo/giphy.webp?cid=ecf05e47tfbgwdeyz0pp4o1xc9172m2dhd33g4clqecvwzm7&rid=giphy.webp&ct=g']

function App() {

  const [gifs, setGifs] =  useState (GIFS)
  
  return (
    <div className="App">
      <section className="App-content">
        {
          gifs.map(singleGif =>  <img src={singleGif}/>)
        }
        <button onClick = {() => setGifs(DIFFERENT_GIFS)}>Cambiar gifs</button>
       
         
      </section>
    </div>
  );
}

export default App;
