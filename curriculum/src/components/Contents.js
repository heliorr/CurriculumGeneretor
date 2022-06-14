import React from 'react';
import helio from '../data/img/helio.png';
import patrick from '../data/img/patrick.png';
import modeloCurriculo from '../data/img/modeloCurriculo.png';

class Contents extends React.Component {
    render() {
        return (
            <div className="content">
                <div className="aplication">
                    <p>Projeto desenvolvido para demonstração de habilidades Referente a utilização de React, React Route e Redux.</p>
                    <p>O projeto se trata de uma aplicação para criação de um curriculo com base nos dados passados pelo usuario e que no final permitir a impressão do curriculo.</p>
                    <img src={ modeloCurriculo } alt="modeloCurriculo"/>
                </div>
                <div className="devs">
                    <h3>Desenvolvedores</h3>
                    <div className="dev">
                        <img className="imageDev" src={ helio} alt="helio"/>
                        <div>
                            <h4>Helio Souza</h4>
                            <p>Desenvolvedor frontEnd com habilidades em HTML, JS, CSS, React e Redux</p>
                            <a href="https://www.linkedin.com/in/helio-souza-09b991b9/" target="_blank" rel="opener noreferrer">Linkedin</a>
                            <a href="https://github.com/heliorr" target="_blank" rel="opener noreferrer">Github</a>
                        </div>
                    </div>
                    <div>
                    <div className="dev">
                    <img className="imageDev" src={ patrick } alt="patrick"/>
                        <div>
                            <h4>Patrick Zumach</h4>
                            <p>Desenvolvedor frontEnd com habilidades em HTML, JS, CSS, React e Redux</p>
                            <a href="https://www.linkedin.com/in/patrick-zumach-808222242/" target="_blank" rel="opener noreferrer">Linkedin</a>
                            <a href="https://github.com/zumachxd" target="_blank" rel="opener noreferrer">Github</a>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contents;