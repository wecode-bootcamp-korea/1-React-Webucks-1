import { Component } from 'react';
import Header from 'components/hayoungGam/Header/Header';
import Footer from 'components/hayoungGam/Footer/Footer';
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
