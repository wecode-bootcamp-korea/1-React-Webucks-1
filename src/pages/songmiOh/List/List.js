import { Component } from 'react';
import './List.scss';

class List extends Component {
  render() {
    return (
      <div className="list">
        <div className="listBox">
          <nav className="naviBar">
            <a className="naviTitle" href="#">
              Wecafevin
            </a>
            <div className="cafeMenu">
              <a href="#">COFFEE</a>
              <a href="#">MENU</a>
              <a href="#">STORE</a>
              <a href="#">REWARDS</a>
              <a href="#">NEWITEM</a>
            </div>
          </nav>
          <header className="menuSelection">
            <p className="menuName">콜드 브루 커피</p>
            <p className="menuIntroduction">
              디카페인 에스프레소 샷 추가 기능(일부음료 제외)
            </p>
            <ListForm />
          </header>
        </div>
      </div>
    );
  }
}

export default List;
