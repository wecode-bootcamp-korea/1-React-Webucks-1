import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import DrinkReviewComment from '../DrinkReviewComment/DrinkReviewComment';
import './DrinkReview.scss';

class DrinkReview extends Component {
  constructor() {
    super();
    this.state = {
      reviews: [],
    };
  }

  removeReviews = comment => {
    const commentId = comment.target.parentNode.id;
    this.setState({
      reviews: this.state.reviews.filter(review => review.id !== commentId),
    });
  };

  saveInputValue = event => {
    event.preventDefault();
    const {
      target: {
        reviewerId: { value: userId },
      },
    } = event;
    const {
      target: {
        reviewComment: { value: comment },
      },
    } = event;

    if (!userId) {
      alert('ID를 입력해주세요🙂');
    } else if (!comment) {
      alert('리뷰를 입력해주세요🙂');
    } else if (userId && comment) {
      this.setState({
        reviews: [...this.state.reviews, { id: uuidv4(), userId, comment }],
      });
      event.target.reset();
    } else {
      return;
    }
  };

  render() {
    const { reviews } = this.state;
    return (
      <div className="drink-review">
        <h4 className="drink-review__title">리뷰</h4>
        <ul className="drink-review__list">
          {reviews.length ? (
            reviews.map(review => (
              <DrinkReviewComment
                key={review.id}
                {...review}
                removeReviews={this.removeReviews}
              />
            ))
          ) : (
            <li className="no-review-message">현재 등록된 리뷰가 없습니다.</li>
          )}
        </ul>
        <form className="review-form" onSubmit={this.saveInputValue}>
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
