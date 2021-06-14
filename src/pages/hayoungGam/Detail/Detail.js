import { Component } from 'react';
import Header from 'components/hayoungGam/Header/Header';
import Footer from 'components/hayoungGam/Footer/Footer';
import DetailTitle from './DetailTitle/DetailTitle';
import DrinkDetailImageViewer from './DrinkDetailImageViewer/DrinkDetailImageViewer';
import DrinkInfo from './DrinkInfo/DrinkInfo';
import DrinkReview from './DrinkReview/DrinkReview';
import './Detail.scss';

class Detail extends Component {
  render() {
    return (
      <>
        <Header />
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
        <Footer />
      </>
    );
  }
}

export default Detail;
