import { Component } from 'react';
import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import DrinkSection from './DrinkSection/DrinkSection';
import './List.scss';

class List extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="container">
          <DrinkSection />
        </div>
        <Footer />
      </>
    );
  }
}

export default List;
