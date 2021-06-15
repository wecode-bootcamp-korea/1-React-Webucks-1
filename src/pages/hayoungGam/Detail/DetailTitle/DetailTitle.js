import { Component } from 'react';
import { BREADCRUMBS_DATA } from 'data/hayoungGam/mockData';
import BreadcrumbLink from '../BreadcrumbLink/BreadcrumbLink';
import './DetailTitle.scss';

class DetailTitle extends Component {
  render() {
    const { category, name } = this.props;
    return (
      <>
        <h2 className="drink-category-title">{category}</h2>
        <nav className="breadcrumbs">
          <ul className="breadcrumbs__list">
            {BREADCRUMBS_DATA.map(data => (
              <BreadcrumbLink
                key={data.id}
                {...data}
                category={category}
                productName={name}
              />
            ))}
          </ul>
        </nav>
      </>
    );
  }
}

export default DetailTitle;
