import { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Container.scss';

class Container extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="container">{this.props.children}</div>
        <Footer />
      </>
    );
  }
}

export default Container;
