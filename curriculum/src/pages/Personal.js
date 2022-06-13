import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Label from '../components/Label';
import cepSearch from '../services/api';
import { submitPersonal } from '../redux/actions/actions';

class Personal extends React.Component {
    state = {
        name: '',
        idade: 0,
        sobre: '',
        telefone: '',
        email: '',
        linkedin: '',
        cep: 0,
        cidade: '',
        estado: '',
        bairro: '',
        rua: '',
        number: 0,
        image: '',
    };

    handleChange = async ({target: { name, value }}) => {
        if (name === 'cep' && value.length > 7) {
            const endereco = await cepSearch(value);
            this.setState({
                cep: value,
                cidade: endereco.localidade,
                estado: endereco.uf,
                bairro: endereco.bairro,
                rua: endereco.logradouro,
            });
        } else {
            this.setState({ [name]: value});
        }
    }

    submitRedux = () => {
        const {dispatch, history} = this.props;
        dispatch(submitPersonal(this.state));
        history.push('/profissional');
    }

    render() {
        const { name, idade, telefone,
            email, linkedin, cep,
            cidade, estado, bairro,
            rua, number, image, sobre
        } = this.state;
        return(
            <>
                <Header />
                <div className="layout">
                <div className="form">
                <p>Dados Pessoais</p>
                <form>
                    <Label
                      textLabel="Nome Completo:"
                      name="name"
                      value={ name }
                      onChange={ this.handleChange }
                      type="text"
                    />
                    <Label
                      textLabel="Link da foto:"
                      name="image"
                      value={ image }
                      onChange={ this.handleChange }
                      type="text"
                    />
                    <Label
                      textLabel="Idade:"
                      name="idade"
                      value={ idade }
                      onChange={ this.handleChange }
                      type="number"
                    />
                    <label>
                    Sobre:
                    </label>
                    <textarea
                      name="sobre"
                      value={ sobre }
                      onChange={ this.handleChange }
                      type="textbox"
                    />
                    <Label
                      textLabel="Telefone:"
                      name="telefone"
                      value={ telefone }
                      onChange={ this.handleChange }
                      type="text"
                    />
                    <Label
                      textLabel="Email:"
                      name="email"
                      value={ email }
                      onChange={ this.handleChange }
                      type="email"
                    />
                    <Label
                      textLabel="Linkedin:"
                      name="linkedin"
                      value={ linkedin }
                      onChange={ this.handleChange }
                      type="text"
                    />
                    <Label
                      textLabel="Cep:"
                      name="cep"
                      value={ cep }
                      onChange={ this.handleChange }
                      type="text"
                    />
                    <Label
                      textLabel="Cidade:"
                      name="cidade"
                      value={ cidade }
                      onChange={ this.handleChange }
                      type="text"
                    />
                    <Label
                      textLabel="Estado:"
                      name="estado"
                      value={ estado }
                      onChange={ this.handleChange }
                      type="text"
                    />
                    <Label
                      textLabel="Bairro:"
                      name="bairro"
                      value={ bairro }
                      onChange={ this.handleChange }
                      type="text"
                    />
                    <Label
                      textLabel="Rua:"
                      name="rua"
                      value={ rua }
                      onChange={ this.handleChange }
                      type="text"
                    />
                    <Label
                      textLabel="Numero:"
                      name="number"
                      value={ number }
                      onChange={ this.handleChange }
                      type="number"
                    />
                </form>
                <button onClick={ this.submitRedux }>Salvar Dados</button>
                </div>
                <div>
                    <h2>{ name }</h2>
                    <img src={ image } alt={ name } />
                    <p>Idade: { idade }</p>
                    <p>Sobre: { sobre }</p>
                    <h3>Contato</h3>
                    <p>Email: { email }</p>
                    <p>Telefone: { telefone }</p>
                    <h3>Endereço</h3>
                    <p>Cidade: { cidade }</p>
                    <p>Bairro: { bairro }</p>
                    <p>Rua: { rua }</p>
                    <p>Numero: {number }</p>  
                </div>
                </div>
                <Footer />
            </>
        );
    }
}

export default connect()(Personal);