import { Component } from 'react';
import LikeBtn from 'components/hayoungGam/LikeBtn/LikeBtn';
import './DrinkReviewComment.scss';

class DrinkReview extends Component {
  render() {
    const { id, userId, comment, removeReviews } = this.props;
    return (
      <li className="drink-review__comment" id={id}>
        <span className="drink-review__comment__reviewer-id">{userId}</span>
        <p className="drink-review__comment__content">{comment}</p>
        <LikeBtn />
        <button
          className="drink-review__comment__remove-btn"
          onClick={removeReviews}
        >
          ❌
        </button>
      </li>
    );
  }
}

export default DrinkReview;
