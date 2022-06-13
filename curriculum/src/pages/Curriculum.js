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
                    <h2>{ data.name }</h2>
                    <img src={ data.image } alt={ data.name } />
                    <p>Idade: { data.idade }</p>
                    <p>Sobre: { data.sobre }</p>
                    <h3>Contato</h3>
                    <p>Email: { data.email }</p>
                    <p>Telefone: { data.telefone }</p>
                    <h3>Endereço</h3>
                    <p>Cidade: { data.cidade }</p>
                    <p>Bairro: { data.bairro }</p>
                    <p>Rua: { data.rua }</p>
                    <p>Numero: {data.number }</p>
                    <h3>Formação</h3>
                    {
                        data.formacao.map((element, index) => (
                            <div key={ index }>
                                <p>{index+1}° Formação</p>
                                <p>{ element.instituto }</p>
                                <p>{ element.curso }</p>
                                <p>{ element.ano }</p>
                            </div>
                        ))
                    }
                    <div>
                        <h3>Referencia</h3>
                        {
                            data.referencias.map((element, index) => (
                                <div key={ index }>
                                    <p>{ element.empresa }</p>
                                    <p>{ element.periodo }</p>
                                    <p>{ element.referencia }</p>
                                </div>
                            ))
                        }
                    </div>
                    <div>
                        <h3>Habilidades</h3>
                        {
                            data.skills.map((element, index) => (
                                <div key={ index }>
                                    <p>{ element }</p>
                                </div>
                            ))
                        }
                    </div>
                    <h3>Redes Profisionais</h3>
                    {
                        data.linkedin && <a href={ data.linkedin }>Linkedin</a>
                    }
                    <br/>
                    {
                        data.github && <a href={ data.github }>Github</a>
                    }
                   
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