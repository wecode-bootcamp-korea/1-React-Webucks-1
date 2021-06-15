import { Component } from 'react';
import FooterMenu from './FooterMenu/FooterMenu';
import { FOOTER_DATA } from 'data/hayoungGam/mockData';
import './Footer.scss';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          {FOOTER_DATA.map(menu => (
            <FooterMenu key={menu.id} {...menu} />
          ))}
        </div>
      </footer>
    );
  }
}

export default Footer;
