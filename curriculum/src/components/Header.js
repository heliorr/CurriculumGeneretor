import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    render() {
        return (
            <div className="header">
            <h1>Formatador de Curriculo</h1>
           <div> <Link to="./"> Home </ Link> </div>
          <div>  <Link to="/personal"> Personal </ Link> </div>
            <div><Link to="/profissional"> Professional </ Link></div>
            <div><Link to="/curriculum"> Curriculum </ Link></div>
            </ div>
        );
    }
}

export default Header;