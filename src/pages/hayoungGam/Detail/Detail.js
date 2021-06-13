import { Component } from 'react';
import DetailTitle from './DetailTitle/DetailTitle';
import DrinkDetailImageViewer from './DrinkDetailImageViewer/DrinkDetailImageViewer';
import DrinkInfo from './DrinkInfo/DrinkInfo';
import DrinkReview from './DrinkReview/DrinkReview';
import './Detail.scss';

class Detail extends Component {
  render() {
    return (
      <div className="container">
        <DetailTitle />
        <section className="drink-detail-area">
          <DrinkDetailImageViewer />
          <div className="drink-infos">
            <DrinkInfo />
            <DrinkReview />
          </div>
        </section>
      </div>
    );
  }
}

export default Detail;
