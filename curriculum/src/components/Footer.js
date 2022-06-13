import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <h3>Desenvolvedores</h3>
                <Link><p>Helio Souza e Patrick Zumach</p></Link>
            </div>
        );
    }
}

export default Footer;