import { Component } from 'react';
import Container from 'components/hayoungGam/Container/Container';
import DetailContents from './DetailContents/DetailContents';
import getData from 'utils/fetch';
import './Detail.scss';

class Detail extends Component {
  constructor() {
    super();
    this.state = {
      beverages: [],
    };
  }

  async componentDidMount() {
    let { beverages } = await getData();
    this.setState({ beverages });
  }

  render() {
    const { beverages } = this.state;
    const {
      match: {
        params: { id },
      },
    } = this.props;
    return (
      <>
        <Container>
          {beverages
            .filter(data => data.id === parseInt(id))
            .map(drink => (
              <DetailContents key={drink.id} {...drink} />
            ))}
        </Container>
      </>
    );
  }
}

export default Detail;
