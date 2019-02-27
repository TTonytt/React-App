import React from 'react';//imr
import './css/style.css'

//sfc
const Button = (props) => {
    return (
        <button className="base-button">{props.label}</button>
     );
}

export default Button;