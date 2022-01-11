import React, {useEffect, useState} from 'react';
import './App.css';

const apiURL = 'https://api.giphy.com/v1/gifs/search?api_key=y3IBEetAnof9j12Oi5jD4rNzwcEd0c8n&q=animals&limit=10&offset=0&rating=g&lang=en'


function App() {

  const [gifs, setGifs] =  useState ([])

  useEffect( function(){
    console.log('actualizando gif')
    fetch( apiURL)
     .then(res => res.json())
     .then (response =>{
       const {data} = response 
       const gifs = data.map(image => image.images.downsized_medium.url)
       setGifs(gifs)
     })
    //setGifs(DIFFERENT_GIFS)
  },[])
  
  return (
    <div className="App">
      <section className="App-content">
        {
          gifs.map(singleGif =>  <img src={singleGif}/>)
        }
       {/*  <button onClick = {() => setGifs()}>Cambiar gifs</button> */}
       
         
      </section>
    </div>
  );
}

export default App;
