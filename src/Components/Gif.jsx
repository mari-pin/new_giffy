import React from "react";
import './Gif.css';


export default function Gif ({title, id, url}){
    return(
        <a  href = {`#${id}`} className="Gif">
           <h3>{title}</h3>
           <h5>id: {id}</h5>
           <img alt = {title} src={url}/>

        </a>
    )
}