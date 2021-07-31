import { Component } from 'react';
import { Link } from 'react-router-dom';
import FooterLink from '../FooterLink/FooterLink';
import './FooterMenu.scss';

class FooterMenu extends Component {
  render() {
    const { category, links } = this.props;
    return (
      <div className="footer__menu">
        <h5 className="footer-menu__title">
          <Link className="footer-menu__link" to="/">
            {category}
          </Link>
        </h5>
        {links.map(link => (
          <FooterLink key={link.id} {...link} />
        ))}
      </div>
    );
  }
}

export default FooterMenu;
