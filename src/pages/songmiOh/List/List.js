import { Component } from 'react';
import ListCoffeeCard from './ListCoffeeCard';
import NaviBar from './NaviBar';
import CoffeeData from '../../../data/CoffeeData';
import './List.scss';

class List extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/data.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(result => {
        this.setState({ data: result.coffeeData });
      });
    console.log('componentMount 실행!');
  }
  render() {
    return (
      <>
        <NaviBar />
        <div className="coffeeDataCard">
          {this.state.data.map(product => (
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
