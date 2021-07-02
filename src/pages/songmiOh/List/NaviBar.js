import React, { Component } from 'react';

class NaviBar extends Component {
  render() {
    return (
      <div className="list">
        <div className="listbox">
          <nav className="naviBar">
            <a className="naviBarTitle" href="/">
              songbucks
            </a>
            <div className="cafeMenu">
              <a href="/">COFFEE</a>
              <a href="/">MENU</a>
              <a href="/">STORE</a>
              <a href="/">What's NEW</a>
            </div>
          </nav>
          <header className="memuSelection">
            <p className="menuName">스타벅스 피지오</p>
            <img src="../songmiOh/cupLogo.png" alt="cupLogo" />
            <p className="menuIntroduction">
              디카페인 에스프레소 샷 추가 기능 (일부 음료 제외)
            </p>
          </header>
        </div>
      </div>
    );
  }
}

export default NaviBar;
