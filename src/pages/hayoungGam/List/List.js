import { Component } from 'react';
import Container from 'components/hayoungGam/Container/Container';
import DrinkSection from './DrinkSection/DrinkSection';
import './List.scss';

class List extends Component {
  render() {
    return (
      <>
        <Container>
          <DrinkSection />
        </Container>
      </>
    );
  }
}

export default List;
