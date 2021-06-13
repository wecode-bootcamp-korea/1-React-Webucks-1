import { Component } from 'react';
import './DrinkDetailImageViewer.scss';

class DrinkDetailImageViewer extends Component {
  render() {
    return (
      <div className="drink-img">
        <img
          className="drink-img__file"
          alt="제주 유기농 말차로 만든 라떼"
          src="/images/hayoungGam/matcha-latte.jpg"
        />
      </div>
    );
  }
}

export default DrinkDetailImageViewer;
