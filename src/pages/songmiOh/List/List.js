import { Component } from 'react';
import ListCoffeeCard from './ListCoffeeCard';
import NaviBar from './NaviBar';
import CoffeeData from '../../../data/CoffeeData';
import './List.scss';

class List extends Component {
  render() {
    return (
      <>
        <NaviBar />
        <div className="coffeeDataCard">
          {CoffeeData.map(product => (
            <ListCoffeeCard
              key={product.id}
              img={product.img}
              name={product.name}
            />
          ))}
        </div>
      </>
    );
  }
}

export default List;
