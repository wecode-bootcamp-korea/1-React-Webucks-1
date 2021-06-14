import { Component } from 'react';
import { Link } from 'react-router-dom';
import LikeBtn from 'components/LikeBtn/LikeBtn';
import './DrinkItem.scss';

class DrinkItem extends Component {
  render() {
    return (
      <div className="drinks__item">
        <Link to={`/detail-hayoung/`} className="drinks__item__link">
          <img
            className="drinks__item__img"
            alt="제주 유기농 말차로 만든 라떼"
            src="/images/hayoungGam/matcha-latte.jpg"
          />
        </Link>
        <div className="drinks__item__name">
          <p className="drinks__item__name__text">
            제주 유기농 말차로 만든 라떼
          </p>
          <LikeBtn />
        </div>
      </div>
    );
  }
}

export default DrinkItem;
