import { Component } from 'react';
import Header from 'components/hayoungGam/Header/Header';
import Footer from 'components/hayoungGam/Footer/Footer';
import DetailContents from './DetailContents/DetailContents';
import BEVERAGE_DATA from 'data/mockData';
import './Detail.scss';

class Detail extends Component {
  render() {
    const {
      match: {
        params: { id },
      },
    } = this.props;

    return (
      <>
        <Header />
        <div className="container">
          {BEVERAGE_DATA.filter(data => data.id === parseInt(id)).map(drink => (
            <DetailContents key={drink.id} {...drink} />
          ))}
        </div>
        <Footer />
      </>
    );
  }
}

export default Detail;
