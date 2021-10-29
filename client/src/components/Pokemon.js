import React from "react";

export default Pokemon = ( {name, avatar}) => {
    return (
        <figure> 
            <img src={avatar} alt={name}/>
            <figcaption> {name} </figcaption>
        </figure>
    );
}

