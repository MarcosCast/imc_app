

import './Imc.scss';

//import Logo from '../images/grafico.png'

function IMC() {
    return(
        <div className="massa">
            
            <div className="inputs">
                <div className="altura">
                     Altura
                    <span> ex.: 1,70 </span>
                    <br />
                    <input type="text" className="input_altura" placeholder="Metros"/>
                </div>
                <br />
                <div className="peso">
                     Quilos
                    <span> ex.: 75,2 </span>
                    <br />
                    <input type="text" className="input_peso" placeholder="Quilos"/>
                </div>
            </div>
        </div>
    );
}

export default IMC;

