import { Component } from 'react';
import { Link } from 'react-router-dom';
import './DetailTitle.scss';

class DetailTitle extends Component {
  render() {
    return (
      <>
        <h2 className="drink-category-title">콜드 브루</h2>
        <nav className="breadcrumbs">
          <ul className="breadcrumbs__list">
            <li className="breadcrumbs__item">
              <Link className="breadcrumbs__link" to="/">
                홈
              </Link>
            </li>
            <li className="breadcrumbs__item">
              <Link className="breadcrumbs__link" to="/">
                MENU
              </Link>
            </li>
            <li className="breadcrumbs__item">
              <Link className="breadcrumbs__link" to="/list-hayoung">
                음료
              </Link>
            </li>
            <li className="breadcrumbs__item">
              <Link className="breadcrumbs__link" to="/">
                콜드 브루
              </Link>
            </li>
            <li className="breadcrumbs__item">제주 유기농 말차로 만든 라떼</li>
          </ul>
        </nav>
      </>
    );
  }
}

export default DetailTitle;
