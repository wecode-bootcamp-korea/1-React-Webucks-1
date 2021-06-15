import { Component } from 'react';

class List extends Component {
  render() {
    return (
      <>
        <nav className="detail_nav_container">
          <h6 className="nav_title">WeCoffeeTalgia</h6>
          <ul className="nav_list">
            <li>
              <a href=" ">coffee</a>
            </li>
            <li>
              <a href=" ">menu</a>
            </li>
            <li>
              <a href=" ">store</a>
            </li>
            <li>
              <a href=" ">what's new</a>
            </li>
          </ul>
        </nav>
      </>
    );
  }
}

export default List;
