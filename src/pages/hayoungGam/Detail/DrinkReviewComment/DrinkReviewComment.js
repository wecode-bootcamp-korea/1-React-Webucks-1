import { Component } from 'react';
import LikeBtn from 'components/hayoungGam/LikeBtn/LikeBtn';
import './DrinkReviewComment.scss';

class DrinkReview extends Component {
  render() {
    const { props } = this;
    return (
      <li className="drink-review__comment" id={props.id}>
        <span className="drink-review__comment__reviewer-id">
          {props.userId}
        </span>
        <p className="drink-review__comment__content">{props.comment}</p>
        <LikeBtn />
        <button
          className="drink-review__comment__remove-btn"
          onClick={this.props.removeReviews}
        >
          ❌
        </button>
      </li>
    );
  }
}

export default DrinkReview;
