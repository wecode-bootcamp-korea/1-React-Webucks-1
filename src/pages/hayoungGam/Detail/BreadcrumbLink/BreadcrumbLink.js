import { Component } from 'react';
import { Link } from 'react-router-dom';
import './BreadcrumbLink.scss';

class BreadcrumbLink extends Component {
  render() {
    const { category, productName, link_name, link_url } = this.props;
    return (
      <li className="breadcrumbs__item">
        {link_url ? (
          <Link className="breadcrumbs__link" to={link_url}>
            {link_name === 'category' ? category : link_name}
          </Link>
        ) : (
          <p>{link_name === 'productName' && productName}</p>
        )}
      </li>
    );
  }
}

export default BreadcrumbLink;
