import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Contents from '../components/Contents';

class Home extends React.Component {
    render() {
        return(
            <div className="homeDiv">
                <Header />
                <Contents />
                <Footer />
            </div>
        );
    }
}

export default Home;