import { Component } from 'react';
import DetailTitle from '../DetailTitle/DetailTitle';
import DrinkDetailImageViewer from '../DrinkDetailImageViewer/DrinkDetailImageViewer';
import DrinkInfo from '../DrinkInfo/DrinkInfo';
import DrinkReview from '../DrinkReview/DrinkReview';
import './DetailContents.scss';

class DetailContents extends Component {
  render() {
    const { props } = this;
    return (
      <>
        <DetailTitle category={props.category} name={props.name} />
        <section className="drink-detail-area">
          <DrinkDetailImageViewer name={props.name} img={props.img} />
          <div className="drink-infos">
            <DrinkInfo {...props} />
            <DrinkReview />
          </div>
        </section>
      </>
    );
  }
}

export default DetailContents;
