import React from 'react';

function Product (props) {
    return (
        <div>
            <h2>{props.name}</h2>
            <p>{props.price}</p>
            <p>
                {props.description}
                <img src = {props.image} alt={props.alt} />
            </p>
        </div>
    )

}

export default Product;