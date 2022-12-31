import './Imc.scss';

function IMC() {
    return(
        <div className="massa">
            <h1>Indice de Massa Corporal</h1>
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

