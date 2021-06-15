import { Component } from 'react';
import { Link } from 'react-router-dom';
import './DetailTitle.scss';

class DetailTitle extends Component {
  render() {
    const { category, name } = this.props;
    return (
      <>
        <h2 className="drink-category-title">{category}</h2>
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
                {category}
              </Link>
            </li>
            <li className="breadcrumbs__item">{name}</li>
          </ul>
        </nav>
      </>
    );
  }
}

export default DetailTitle;
