import './Imc.scss';
import React from "react";
import ReactDOM from 'react-dom/client';
//import Logo from '../images/grafico.png'

function IMC() {
   // const [peso] = useState(0);
   // const [altura] = useState(0); 

    function calculo() {
        var altura = document.getElementById("altura").value / 100;
        var peso = document.getElementById("peso").value;

        var imc = peso / (altura * altura);

        var text = "";

        if (imc < 17) {
            text= "Você está muito abaixo do peso! Valor: " + imc
          } else if (imc < 18.49) {
            text= "Você está abaixo do peso! Valor: " + imc
          } else if (imc < 24.99) {
            text="Você está com peso normal! Valor: " + imc
          } else if (imc < 29.9) {
            text="Você está acima do peso! Valor: " + imc
          } else if (imc < 34.9) {
            text="Você está com obesidade mórbida I! Valor: " + imc
          }else if (imc < 39.9) {
            text="Você está com obesidade mórbida II! Valor: " + imc
          }else if (imc > 34.9) {
            text="Você está com obesidade mórbida III! Valor: " + imc
          }
          document.getElementById("text_area").innerText=text
        
    }

    return(
        <div className="massa"> 
            <div className="inputs">
                <div className="altura">
                     Altura
                    <span> ex.: 170 </span>
                    <br />
                    <input type="number" id='altura' className="input_altura" 
                     /*onChange={(e) => setPeso(+e.target.value)}*/ placeholder="Altura"/>
                </div>
                <br />
                <div className="peso">
                     Quilos
                    <span> ex.: 75,2 </span>
                    <br />
                    <input type="number" id='peso' className="input_peso"
                     /*onChange={(e) => setAltura(+e.target.value)}*/ placeholder="Peso"/>
                </div>
            </div>
            <br />
            <button type="button" onClick={calculo}> Calcular </button>
            <textarea name="" id="text_area" rows="8"></textarea>
        </div>
    );
}

export default IMC;