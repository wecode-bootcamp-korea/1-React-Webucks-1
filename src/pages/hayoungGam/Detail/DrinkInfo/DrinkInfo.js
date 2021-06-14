import { Component } from 'react';
import LikeBtn from 'components/hayoungGam/LikeBtn/LikeBtn';
import './DrinkInfo.scss';

class DrinkInfo extends Component {
  render() {
    const { props } = this;
    return (
      <>
        <div className="drink-name">
          <h3 className="drink-name__text">{props.name}</h3>
          <p className="drink-name__eng-text">{props.eng_name}</p>
          <div className="drink-like-btn">
            <LikeBtn />
          </div>
        </div>
        <p className="drink-desc">{props.description}</p>
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
                  <dd>{props.kcal}</dd>
                </dl>
              </li>
              <li className="drink-nutrition__table__row">
                <dl className="drink-nutrition__table__desc-list">
                  <dt>포화지방 (g)</dt>
                  <dd>{props.fat}</dd>
                </dl>
              </li>
              <li className="drink-nutrition__table__row">
                <dl className="drink-nutrition__table__desc-list">
                  <dt>단백질 (g)</dt>
                  <dd>{props.protein}</dd>
                </dl>
              </li>
            </ul>
            <ul className="drink-nutrition__table__list">
              <li className="drink-nutrition__table__row">
                <dl className="drink-nutrition__table__desc-list">
                  <dt>나트륨 (mg)</dt>
                  <dd>{props.sodium}</dd>
                </dl>
              </li>
              <li className="drink-nutrition__table__row">
                <dl className="drink-nutrition__table__desc-list">
                  <dt>당류 (g)</dt>
                  <dd>{props.sugars}</dd>
                </dl>
              </li>
              <li className="drink-nutrition__table__row">
                <dl className="drink-nutrition__table__desc-list">
                  <dt>카페인 (mg)</dt>
                  <dd>{props.caffeine}</dd>
                </dl>
              </li>
            </ul>
          </div>
        </div>
        <div className="drink-allergic-info">
          <p>알레르기 유발 요인 : {props.allergic}</p>
        </div>
      </>
    );
  }
}

export default DrinkInfo;
