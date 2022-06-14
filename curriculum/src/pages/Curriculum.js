import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { connect } from 'react-redux';

class Curriculum extends React.Component {
    render() {
        const { data } = this.props;
        return(
            <>
                <Header />
                <div className="curriculum">
                    <div className="headerCurriculum">
                        <img src={ data.image } alt={ data.name } />
                        <div>
                            <h2>{ data.name }</h2>
                            <p>Idade: { data.idade }</p>
                            <p>Sobre: { data.sobre }</p>
                        </div>
                    </div>
                    <div className="formarcao">
                        <h3>Formação</h3>
                        {
                        data.formacao.map((element, index) => (
                            <ul key={ index }>
                                <p>{index+1}° Formação</p>
                                <li>{ element.instituto }</li>
                                <li>{ element.curso }</li>
                                <li>{ element.ano }</li>
                            </ul>
                        ))
                    }
                    </div>
                    <div className="referencias">
                    <h3>Referencia</h3>
                        {
                            data.referencias.map((element, index) => (
                                <ul key={ index }>
                                    <li>{ element.empresa }</li>
                                    <li>{ element.periodo }</li>
                                    <li>{ element.referencia }</li>
                                </ul>
                            ))
                        }
                    </div>
                    <div className="habilidade">
                    <h3>Habilidades</h3>
                    <ul>
                        {
                            data.skills.map((element, index) => (
                                <li key={ index }>{ element }</li>
                            ))
                        }
                    </ul>
                    </div>
                    <div className="endereco">
                        <div className="info">
                            <h3>Endereço</h3>
                            <p>Cidade: { data.cidade }</p>
                            <p>Bairro: { data.bairro }</p>
                            <p>Rua: { data.rua }</p>
                            <p>Numero: {data.number }</p>
                        </div>
                        <div className="contatos">
                            <h3>Contato</h3>
                            <p>Email: { data.email }</p>
                            <p>Telefone: { data.telefone }</p>
                            {
                                data.linkedin && <a href={ data.linkedin }>{ data.linkedin }</a>
                            }
                            <br/>
                            {
                                data.github && <a href={ data.github }>{ data.github }</a>
                            }
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    data: state.myReducer,
  });

export default connect(mapStateToProps)(Curriculum);