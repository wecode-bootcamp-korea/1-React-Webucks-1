import { Component } from 'react';
import { Link } from 'react-router-dom';
import './FooterLink.scss';

class FooterLink extends Component {
  render() {
    const { link_name } = this.props;
    return (
      <small className="footer-menu__item">
        <Link className="footer-menu__link" to="/">
          {link_name}
        </Link>
      </small>
    );
  }
}

export default FooterLink;
