import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Label from '../components/Label';
import { submitProfissional } from '../redux/actions/actions';

class Profissional extends React.Component {
    state = {
        formacao: [],
        instituto: '',
        ano: '',
        curso: '',
        github: '',
        skills: [],
        skill: '',
        referencias: [],
        empresa: '',
        periodo: '',
        referencia: '',
    };

    handleChange = ({target: { name, value }}) => {
        this.setState({ [name]: value});
    }

    addFormation = (event) => {
        event.preventDefault();
        const { instituto, ano, curso } = this.state;
        this.setState((prev) => ({
            formacao: [...prev.formacao, {instituto, ano, curso}],
            instituto: '',
            ano: '',
            curso: '',
        }));
    }

    addReferencia = (event) => {
        event.preventDefault();
        const { empresa, periodo, referencia } = this.state;
        this.setState((prev) => ({
            referencias: [...prev.referencias, {empresa, periodo, referencia}],
            empresa: '',
            periodo: '',
            referencia: '',
        }));
    }

    addSkill = (event) => {
        event.preventDefault();
        const { skill } = this.state;
        this.setState((prev) => ({
            skills: [...prev.skills, skill],
            skill: '',
        }));
    }

    submitRedux = () => {
        const {dispatch, history} = this.props;
        dispatch(submitProfissional(this.state));
        history.push('/curriculum');
    }

    render() {
        const { formacao, instituto, ano, curso,
            github, skill, empresa, periodo, referencia,
        referencias, skills } = this.state;
        return(
            <>
                <Header />
                <div className="layout">
                <div className="form">
                <form>
                <h3>Dados Profissionais</h3>
                <h3>Formação</h3>
                    <Label
                      textLabel="Instituto:"
                      name="instituto"
                      value={ instituto }
                      onChange={ this.handleChange }
                      type="text"
                    />
                    <Label
                      textLabel="Ano:"
                      name="ano"
                      value={ ano }
                      onChange={ this.handleChange }
                      type="text"
                    />
                    <Label
                      textLabel="Curso:"
                      name="curso"
                      value={ curso }
                      onChange={ this.handleChange }
                      type="text"
                    />
                    <button onClick={ this.addFormation }>Adicionar Formação</button>
                    <h3>Referencias</h3>
                    <Label
                      textLabel="Empresa:"
                      name="empresa"
                      value={ empresa }
                      onChange={ this.handleChange }
                      type="text"
                    />
                    <Label
                      textLabel="Periodo:"
                      name="periodo"
                      value={ periodo }
                      onChange={ this.handleChange }
                      type="text"
                    />
                    <Label
                      textLabel="Referencias:"
                      name="referencia"
                      value={ referencia }
                      onChange={ this.handleChange }
                      type="text"
                    />
                    <button onClick={ this.addReferencia }>Adicionar Referencia</button>
                    <h3>Habilidades</h3>
                    <Label
                      textLabel="Habilidades:"
                      name="skill"
                      value={ skill }
                      onChange={ this.handleChange }
                      type="text"
                    />
                    <button onClick={ this.addSkill }>Adicionar Habilidades</button>
                    <h3>Portfolio</h3>
                    <Label
                      textLabel="GitHub:"
                      name="github"
                      value={ github }
                      onChange={ this.handleChange }
                      type="text"
                    />
                </form>
                <button onClick={ this.submitRedux }>Salvar Dados</button>
                </div>
                <div>
                <div className="preview">
                    <h3>Dados Profissionais</h3>
                    <h3>Formação</h3>
                    <div className="curriculumLayout">
                    {
                        formacao.map((element, index) => (
                            <div key={ index } className="preview">
                                <p>{ element.instituto }</p>
                                <p>{ element.curso }</p>
                                <p>{ element.ano }</p>
                            </div>
                        ))
                    }
                    </div>
                    <h3>Referencias</h3>
                    <div className="curriculumLayout">
                    {
                        referencias.map((element, index) => (
                            <div key={ index } className="preview">
                                <p>{ element.empresa }</p>
                                <p>{ element.periodo }</p>
                                <p>{ element.referencia }</p>
                            </div>
                        ))
                    }
                    </div>
                    <h3>Habilidades</h3>
                    <div className="">
                    {
                        skills.map((element, index) => (
                            <div key={ index } className="preview">
                                <p>{ element }</p>
                            </div>
                        ))
                    }
                    </div>
                    <h3>Portfolio</h3>
                    {
                        github && <a href={ github }>Github</a>
                    }
                </div>
                </div>
                </div>
                <Footer />
            </>
        );
    }
}

export default connect()(Profissional);