import { Component } from 'react';
import './CoffeeCard.scss';
import HeartShape from '../../Detail/HeartShape/HeartShape';

class CoffeeCard extends Component {
  render() {
    return (
      <div className="CoffeeCard">
        <section className="menuImage">
          <a href="/">
            <img src={this.props.img} alt="" />
          </a>
          <div className="nameWrap">
            <span className="shopProductName">{this.props.name}</span>
            <HeartShape />
          </div>
        </section>
      </div>
    );
  }
}

export default CoffeeCard;
