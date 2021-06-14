import { Component } from 'react';
import './DrinkDetailImageViewer.scss';

class DrinkDetailImageViewer extends Component {
  render() {
    const { props } = this;
    return (
      <div className="drink-img">
        <img className="drink-img__file" alt={props.name} src={props.img} />
      </div>
    );
  }
}

export default DrinkDetailImageViewer;
