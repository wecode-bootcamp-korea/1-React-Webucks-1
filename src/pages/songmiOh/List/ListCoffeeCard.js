import React, { Component } from 'react';
import './ListCoffeeCard.scss';

class ListCoffeeCard extends Component {
  render() {
    return (
      <div className="coffeeImageCard">
        <section className="productImage">
          <img className="coffeeProduct" src={this.props.img} />
          {this.props.name}
        </section>
      </div>
    );
  }
}

export default ListCoffeeCard;
