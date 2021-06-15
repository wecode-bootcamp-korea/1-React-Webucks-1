import { Component } from 'react';
import './DrinkDetailImageViewer.scss';

class DrinkDetailImageViewer extends Component {
  render() {
    const { name, img } = this.props;
    return (
      <div className="drink-img">
        <img className="drink-img__file" alt={name} src={img} />
      </div>
    );
  }
}

export default DrinkDetailImageViewer;
