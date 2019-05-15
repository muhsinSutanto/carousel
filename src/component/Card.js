import React from 'react';

const Card = ({image, title}) => {
    return (
    <div>  
        <img src={image} alt='picture'/>
        <p>{title}</p>
    </div>
    );
}
 
export default Card;