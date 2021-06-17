import { Component } from 'react';
import CoffeeCard from './CoffeeCard/CoffeeCard';
import './List.scss';

class List extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/coffeeData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          products: data.coffeeData,
        });
      });
  }

  render() {
    return (
      <div className="List">
        <div className="container">
          <nav className="navi">
            <a className="naviTitle" href="/">
              Webucks
            </a>
            <div className="naviMenu">
              <a href="/">COFFEE</a>
              <a href="/">MENU</a>
              <a href="/">STORE</a>
              <a href="/">WHAT'S NEW</a>
            </div>
          </nav>
          <header className="menuIntro">
            <p className="menuName">콜드 브루 커피</p>
            <img src="./Images/minkiChoi/coffee-cup.png" alt="coffee-cup" />
            <p className="menuDescription">
              디카페인 에스프레소 샷 추가 기능 (일부 음료 제외)
            </p>
          </header>
          <div className="coffeeCard">
            {this.state.products.map((product, index) => {
              return (
                <CoffeeCard key={index} img={product.img} name={product.name} />
              );
            })}
          </div>
          <header className="menuIntro">
            <p className="menuName">브루드 커피</p>
            <img src="./Images/minkiChoi/coffee-cup.png" alt="coffee-cup" />
            <p className="menuDescription">
              디카페인 에스프레소 샷 추가 기능 (일부 음료 제외)
            </p>
          </header>
          <div className="coffeeCard">
            {this.state.products.map((product, index) => {
              return (
                <CoffeeCard key={index} img={product.img} name={product.name} />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default List;
