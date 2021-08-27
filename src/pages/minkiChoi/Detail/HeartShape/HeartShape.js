import { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import './HeartShape.scss';

class HeartShape extends Component {
  constructor() {
    super();
    this.state = {
      isActive: false,
    };
  }

  Active = () => {
    this.setState({
      isActive: !this.state.isActive,
    });
  };

  render() {
    return (
      <div
        className={this.state.isActive ? 'heartActive' : ''}
        onClick={this.Active}
      >
        <FontAwesomeIcon
          icon={this.state.isActive ? faHeartSolid : faHeartRegular}
          size="1x"
        />
      </div>
    );
  }
}

export default HeartShape;
