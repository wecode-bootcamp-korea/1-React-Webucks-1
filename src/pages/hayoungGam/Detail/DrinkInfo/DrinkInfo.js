import { Component } from 'react';
import LikeBtn from 'components/hayoungGam/LikeBtn/LikeBtn';
import './DrinkInfo.scss';

class DrinkInfo extends Component {
  render() {
    const { name, eng_name, description } = this.props;
    return (
      <>
        <div className="drink-name">
          <h3 className="drink-name__text">{name}</h3>
          <p className="drink-name__eng-text">{eng_name}</p>
          <div className="drink-like-btn">
            <LikeBtn />
          </div>
        </div>
        <p className="drink-desc">{description}</p>
      </>
    );
  }
}

export default DrinkInfo;
