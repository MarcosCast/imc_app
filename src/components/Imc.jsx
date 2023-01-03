import './Imc.scss';
import React, { useState } from "react";
//import Logo from '../images/grafico.png'

function IMC() {
    const {peso, setPeso} = useState(12);
    const {altura, setAltura} = useState(0); 

    const calculo = () => {
        const imc = peso / (altura * altura);
        const formattedImc = imc.toFixed(2);
        console.log(formattedImc);
    }

    return(
        <div className="massa">
            
            <div className="inputs">
                <div className="altura">
                     Altura
                    <span> ex.: 1,70 </span>
                    <br />
                    <input type="number" value={peso} className="input_altura" 
                     onChange={(e) => setPeso(+e.target.value)} placeholder="Altura"/>
                </div>
                <br />
                <div className="peso">
                     Quilos
                    <span> ex.: 75,2 </span>
                    <br />
                    <input type="number" value={altura} className="input_peso"
                     onChange={(e) => setAltura(+e.target.value)} placeholder="Peso"/>
                </div>
            </div>
            <br />
            <button onClick={calculo}> Calcular </button>
        </div>
    );
}

export default IMC;