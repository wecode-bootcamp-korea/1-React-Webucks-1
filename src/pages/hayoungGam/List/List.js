import { Component } from 'react';
import DrinkSection from './DrinkSection/DrinkSection';
import './List.scss';

class List extends Component {
  render() {
    return (
      <div className="container">
        <DrinkSection />
      </div>
    );
  }
}

export default List;
