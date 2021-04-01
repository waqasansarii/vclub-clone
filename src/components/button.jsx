import React from 'react'
import './styles/btn.css'

const Button = ({onclick,className,value}) => {
    return (
        <div>
            <button className={`glb_btn ${className}`} onClick={onclick} >{value}</button>
        </div>
    )
}

export default Button
