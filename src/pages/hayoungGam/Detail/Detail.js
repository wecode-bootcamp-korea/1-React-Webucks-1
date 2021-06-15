import { Component } from 'react';
import Container from 'components/hayoungGam/Container/Container';
import DetailContents from './DetailContents/DetailContents';
import BEVERAGE_DATA from 'data/hayoungGam/mockData';
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
        <Container>
          {BEVERAGE_DATA.filter(data => data.id === parseInt(id)).map(drink => (
            <DetailContents key={drink.id} {...drink} />
          ))}
        </Container>
      </>
    );
  }
}

export default Detail;
