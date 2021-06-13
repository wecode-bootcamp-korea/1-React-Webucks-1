import { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import './DrinkReviewComment.scss';

class DrinkReview extends Component {
  render() {
    const { props } = this;
    return (
      <li className="drink-review__comment">
        <span className="drink-review__comment__reviewer-id">{props.id}</span>
        <p className="drink-review__comment__content">{props.comment}</p>
        <FontAwesomeIcon icon={farHeart} />
        <button className="drink-review__comment__remove-btn">❌</button>
      </li>
    );
  }
}

export default DrinkReview;
