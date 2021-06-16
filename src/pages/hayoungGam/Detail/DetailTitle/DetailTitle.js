import { Component } from 'react';
import getData from 'utils/fetch';
import BreadcrumbLink from '../BreadcrumbLink/BreadcrumbLink';
import './DetailTitle.scss';

class DetailTitle extends Component {
  constructor() {
    super();
    this.state = {
      breadcrumbs: [],
    };
  }

  async componentDidMount() {
    let { breadcrumbs } = await getData();
    this.setState({ breadcrumbs });
  }

  render() {
    const { breadcrumbs } = this.state;
    const { category, name } = this.props;
    return (
      <>
        <h2 className="drink-category-title">{category}</h2>
        <nav className="breadcrumbs">
          <ul className="breadcrumbs__list">
            {breadcrumbs.map(data => (
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
