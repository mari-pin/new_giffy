import React from "react";

export default function Gif ({title, id, url}){
    return(
        <div>
           <h3>{title}</h3>
           <h5>id: {id}</h5>
           <img alt = {title} src={url}/>

        </div>
    )
}