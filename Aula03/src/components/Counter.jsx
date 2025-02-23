import { useState } from "react";

const Counter = () => {
    //Consultar, Alterar
    const [contador, setContador] = useState(0);
    return (
        <div>
            <h1>Contador</h1>
            <h2>{contador}</h2>
            <button onClick={() => setContador(contador + 1)}>+</button>
            <button onClick={() => setContador(contador - 1)}>-</button>
        </div>
    )
}
export default Counter;