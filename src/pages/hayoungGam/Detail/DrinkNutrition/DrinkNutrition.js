import { Component } from 'react';
import DrinkNutritionRow from '../DrinkNutritionRow/DrinkNutritionRow';
import './DrinkNutrition.scss';

class DrinkNutrition extends Component {
  render() {
    const { nutrient } = this.props;
    return (
      <div className="drink-nutrition">
        <div className="drink-nutrition__summary">
          <p>제품 영양 정보</p>
          <p>Tall(톨) / 355ml (12 fl oz)</p>
        </div>
        <div className="drink-nutrition__table">
          {nutrient.map(data => (
            <DrinkNutritionRow key={data.id} {...data} />
          ))}
        </div>
      </div>
    );
  }
}

export default DrinkNutrition;
