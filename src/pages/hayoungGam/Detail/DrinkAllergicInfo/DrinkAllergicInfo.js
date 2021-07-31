import { Component } from 'react';
import './DrinkAllergicInfo.scss';

class DrinkAllergicInfo extends Component {
  render() {
    const { allergic } = this.props;
    return (
      allergic && (
        <div className="drink-allergic-info">
          <p>알레르기 유발 요인 : {allergic}</p>
        </div>
      )
    );
  }
}

export default DrinkAllergicInfo;
