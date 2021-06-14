import { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="container">
          <h1 className="logo">
            <Link to="/">Webucks</Link>
          </h1>
          <nav className="nav">
            <ul className="nav__list">
              <li className="nav__item">
                <Link to="/list-hayoung">coffee</Link>
              </li>
              <li className="nav__item">
                <Link to="/list-hayoung">menu</Link>
              </li>
              <li className="nav__item">
                <Link to="/list-hayoung">store</Link>
              </li>
              <li className="nav__item">
                <Link to="/list-hayoung">what's new</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
