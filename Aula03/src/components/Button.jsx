import React from 'react'
const Button = () => {

    const handleClick =() =>{
        console.log('Clicou')
    }

    return (
        <button onClick={handleClick}>Enviar</button>
    )
}

export default Button