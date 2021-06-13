import { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import './DrinkReview.scss';

class DrinkReview extends Component {
  render() {
    return (
      <div className="drink-review">
        <h4 className="drink-review__title">리뷰</h4>
        <ul className="drink-review__list">
          <li className="no-review-message">현재 등록된 리뷰가 없습니다.</li>
          <li className="drink-review__comment">
            <a className="drink-review__comment__reviewer-id" href="/">
              fsad
            </a>
            <p className="drink-review__comment__content">fads</p>
            <FontAwesomeIcon icon={farHeart} />
            <button className="drink-review__comment__remove-btn">❌</button>
          </li>
        </ul>
        <form className="review-form">
          <div className="review-fields">
            <label className="review-fields__label" htmlFor="review-id">
              ID
            </label>
            <input
              className="review-fields__input"
              name="reviewerId"
              type="text"
              placeholder="ID를 입력해주세요."
              maxLength="12"
            />
          </div>
          <div className="review-fields">
            <label className="review-fields__label" htmlFor="review-comment">
              COMMENT
            </label>
            <input
              className="review-fields__input"
              name="reviewComment"
              type="text"
              placeholder="리뷰를 입력해주세요."
              maxLength="300"
            />
          </div>
          <input className="review-form__submit-btn" type="submit" />
        </form>
      </div>
    );
  }
}

export default DrinkReview;
