import { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMugHot } from '@fortawesome/free-solid-svg-icons';
import DrinkItem from '../DrinkItem/DrinkItem';
import './DrinkSection.scss';

class DrinkSection extends Component {
  render() {
    return (
      <section className="drinks-area">
        <div className="drinks-title">
          <h2 className="drinks-title__text">콜드 브루</h2>
          <FontAwesomeIcon icon={faMugHot} />
          <p className="drinks-title__notice">
            디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)
          </p>
        </div>
        <div className="drinks">
          <DrinkItem />
        </div>
      </section>
    );
  }
}

export default DrinkSection;
