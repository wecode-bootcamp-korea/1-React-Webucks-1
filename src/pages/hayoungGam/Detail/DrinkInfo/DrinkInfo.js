import { Component } from 'react';
import LikeBtn from 'components/LikeBtn/LikeBtn';
import './DrinkInfo.scss';

class DrinkInfo extends Component {
  render() {
    return (
      <>
        <div className="drink-name">
          <h3 className="drink-name__text">제주 유기농 말차로 만든 라떼</h3>
          <p className="drink-name__eng-text">
            Malcha Latte from Jeju Organic farm
          </p>
          <div className="drink-like-btn">
            <LikeBtn />
          </div>
        </div>
        <p className="drink-desc">
          차광재배한 어린 녹찻잎을 곱게 갈아 깊고 진한 말차 본연의 맛과 향을
          부드럽게 즐길 수 있는 제주 유기농 말차로 만든 라떼
        </p>
        <div className="drink-nutrition">
          <div className="drink-nutrition__summary">
            <p>제품 영양 정보</p>
            <p>Tall(톨) / 355ml (12 fl oz)</p>
          </div>
          <div className="drink-nutrition__table">
            <ul className="drink-nutrition__table__list">
              <li className="drink-nutrition__table__row">
                <dl className="drink-nutrition__table__desc-list">
                  <dt>1회 제공량 (kcal)</dt>
                  <dd>205</dd>
                </dl>
              </li>
              <li className="drink-nutrition__table__row">
                <dl className="drink-nutrition__table__desc-list">
                  <dt>포화지방 (g)</dt>
                  <dd>5</dd>
                </dl>
              </li>
              <li className="drink-nutrition__table__row">
                <dl className="drink-nutrition__table__desc-list">
                  <dt>단백질 (g)</dt>
                  <dd>9</dd>
                </dl>
              </li>
            </ul>
            <ul className="drink-nutrition__table__list">
              <li className="drink-nutrition__table__row">
                <dl className="drink-nutrition__table__desc-list">
                  <dt>나트륨 (mg)</dt>
                  <dd>130</dd>
                </dl>
              </li>
              <li className="drink-nutrition__table__row">
                <dl className="drink-nutrition__table__desc-list">
                  <dt>당류 (g)</dt>
                  <dd>20</dd>
                </dl>
              </li>
              <li className="drink-nutrition__table__row">
                <dl className="drink-nutrition__table__desc-list">
                  <dt>카페인 (mg)</dt>
                  <dd>60</dd>
                </dl>
              </li>
            </ul>
          </div>
        </div>
        <div className="drink-allergic-info">
          <p>알레르기 유발 요인 : 우유</p>
        </div>
      </>
    );
  }
}

export default DrinkInfo;
