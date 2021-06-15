import { Component } from 'react';
import DetailTitle from '../DetailTitle/DetailTitle';
import DrinkDetailImageViewer from '../DrinkDetailImageViewer/DrinkDetailImageViewer';
import DrinkInfo from '../DrinkInfo/DrinkInfo';
import DrinkReview from '../DrinkReview/DrinkReview';
import './DetailContents.scss';

class DetailContents extends Component {
  render() {
    const { category, name, img } = this.props;
    return (
      <>
        <DetailTitle category={category} name={name} />
        <section className="drink-detail-area">
          <DrinkDetailImageViewer name={name} img={img} />
          <div className="drink-infos">
            <DrinkInfo {...this.props} />
            <DrinkReview />
          </div>
        </section>
      </>
    );
  }
}

export default DetailContents;
