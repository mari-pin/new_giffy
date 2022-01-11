import React, {useEffect, useState} from "react";
import Gif from "./Gif";
import getGifs from "../services/getGifs";



export default function ListOfGifs ({params}){
    const{ keyword} = params

    const [gifs, setGifs] =  useState ([])

    useEffect( function(){
        //utilizamos las keywords para buscar lo k queremos ver
        getGifs({keyword}).then(gifs => setGifs(gifs))},[keyword])
      

    return <div>{
        
        gifs.map(({id, title, url}) => 
            <Gif 
                key =  {id}//id unica siempre 
                title={title} 
                url={url} 
                id={id}
            />
        
        )
    }
        
        </div>
    }
