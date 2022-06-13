import React from 'react';
import helio from '../data/img/helio.png';
import patrick from '../data/img/patrick.png';

class Contents extends React.Component {
    render() {
        return (
            <div className="content">
                <div>
                    <p>Projeto desenvolvido para demonstração de habilidades Referente a utilização de React, React Route e Redux.</p>
                    <p>O projeto se trata de uma aplicação para criação de um curriculo com base nos dados passados pelo usuario e que no final permitir a impressão do curriculo.</p>
                </div>
                <div>
                    <h3>Desenvolvedores</h3>
                    <h5>Helio Souza</h5>
                    <img className="imageDev" src={ helio } alt="helio"/>
                    <h5>Patrick Zumach</h5>
                    <img className="imageDev" src={ patrick } alt="patrick"/>
                </div>
            </div>
        );
    }
}

export default Contents;