import { Component } from 'react';
import FooterMenu from './FooterMenu/FooterMenu';
import getData from 'utils/fetch';
import './Footer.scss';

class Footer extends Component {
  constructor() {
    super();
    this.state = {
      footers: [],
    };
  }

  async componentDidMount() {
    try {
      let { footers } = await getData();
      this.setState({ footers });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    const { footers } = this.state;
    return (
      <footer className="footer">
        <div className="container">
          {footers.map(menu => (
            <FooterMenu key={menu.id} {...menu} />
          ))}
        </div>
      </footer>
    );
  }
}

export default Footer;
