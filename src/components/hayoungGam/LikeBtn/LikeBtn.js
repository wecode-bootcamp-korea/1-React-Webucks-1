import { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons';
import './LikeBtn.scss';

class LikeBtn extends Component {
  constructor() {
    super();
    this.state = {
      isClicked: false,
    };
  }

  toggleLikeBtn = () => {
    this.setState({ isClicked: !this.state.isClicked });
  };

  render() {
    return (
      <FontAwesomeIcon
        onClick={this.toggleLikeBtn}
        icon={this.state.isClicked ? fasHeart : farHeart}
      />
    );
  }
}

export default LikeBtn;
