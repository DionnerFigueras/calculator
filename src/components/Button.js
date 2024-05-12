import React from "react";
import '../styles/Button.css'

function Button (props) {

    const isOperator = valor => {
        return isNaN(valor) && (valor !== '.') && (valor !== '=');
    };

    return (
        <div className={`content-button ${isOperator(props.children) ? 'operator' : null}`.trimEnd()} onClick={() => props.inputManager(props.children)}>
            {props.children}
        </div>
        
    )
}

export default Button;