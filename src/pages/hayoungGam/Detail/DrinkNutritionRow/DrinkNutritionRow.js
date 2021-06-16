import { Component } from 'react';
import './DrinkNutritionRow.scss';

class DrinkNutritionRow extends Component {
  render() {
    const { kor_name, unit, amount } = this.props;
    return (
      <div className="drink-nutrition__table__row">
        <dl className="drink-nutrition__table__desc-list">
          <dt>
            {kor_name} ({unit})
          </dt>
          <dd>{amount}</dd>
        </dl>
      </div>
    );
  }
}

export default DrinkNutritionRow;
