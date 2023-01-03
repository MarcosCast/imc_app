import './Conteudo.scss';
import Logo from '../images/grafico.png'

function Conteudo() {
    return(
        <div className="post">
            <h1>Indice de Massa Corporal</h1>
            <h3>Cálculo IMC</h3>
            <p>IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde 
                para calcular o peso ideal de cada pessoa.</p>
            <p>O índice é calculado da seguinte maneira: divide-se o peso do paciente pela sua altura elevada ao quadrado. 
                Diz-se que o indivíduo tem peso normal quando o resultado do IMC está entre 18,5 e 24,9.</p>
            <p>Quer descobrir seu IMC? Insira seu peso e sua altura nos campos abaixo e compare com os índices da tabela. 
                Importante: siga os exemplos e use pontos como separadores.</p>
            <figure>
              <img src={Logo} alt="Gráfico IMC" />
              <figcaption>Informações da Figura</figcaption>
            </figure>
            
        </div>
    );
}

export default Conteudo;