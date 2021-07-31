import { Component } from 'react';
import './DrinkNutritionRow.scss';

class DrinkNutritionRow extends Component {
  render() {
    const { kor_name, unit, amount } = this.props;
    return (
      <dl className="drink-nutrition__table__row">
        <dt>
          {kor_name} ({unit})
        </dt>
        <dd>{amount}</dd>
      </dl>
    );
  }
}

export default DrinkNutritionRow;
