import { Component } from 'react';
import './List.scss';

class List extends Component {
  render() {
    return (
      <div className="List">
        <div className="container">
          <nav className="navi">
            <a className="naviTitle" href="">
              Webucks
            </a>
            <div className="naviMenu">
              <a href="">COFFEE</a>
              <a href="">MENU</a>
              <a href="">STORE</a>
              <a href="">WHAT'S NEW</a>
            </div>
          </nav>
          <header className="menuIntro">
            <p className="menuName">콜드 브루 커피</p>
            <img src="./Images/minkiChoi/coffee-cup.png" alt="coffee-cup" />
            <p className="menuDescription">
              디카페인 에스프레소 샷 추가 기능 (일부 음료 제외)
            </p>
          </header>
          <section className="menuImage">
            <div>
              <a href="">
                <img src="./Images/minkiChoi/ringo.jpg" alt="" />
              </a>
              <div className="shopProductName">ddd</div>
            </div>
            <div>
              <a href="">
                <img src="./Images/minkiChoi/vetty.jpg" alt="" />
              </a>
              <div className="shopProductName">ddd</div>
            </div>
            <div>
              <a href="">
                <img src="./Images/minkiChoi/deva.jpg" alt="" />
              </a>
              <div className="shopProductName">ddd</div>
            </div>
            <div>
              <a href="">
                <img src="./Images/minkiChoi/glory.jpg" alt="" />
              </a>
              <div className="shopProductName">ddd</div>
            </div>
            <div>
              <a href="">
                <img src="./Images/minkiChoi/liny.jpg" alt="" />
              </a>
              <div className="shopProductName">ddd</div>
            </div>
            <div>
              <a href="">
                <img src="./Images/minkiChoi/malo.jpg" alt="" />
              </a>
              <div className="shopProductName">ddd</div>
            </div>
            <div>
              <a href="">
                <img src="./Images/minkiChoi/plain.jpg" alt="" />
              </a>
              <div className="shopProductName">ddd</div>
            </div>
            <div>
              <a href="">
                <img src="./Images/minkiChoi/walter.jpg" alt="" />
              </a>
              <div className="shopProductName">ddd</div>
            </div>
            <div>
              <a href="">
                <img src="./Images/minkiChoi/breanna.jpg" alt="" />
              </a>
              <div className="shopProductName">ddd</div>
            </div>
            <div>
              <a href="">
                <img src="./Images/minkiChoi/cecil.jpg" alt="" />
              </a>
              <div className="shopProductName">ddd</div>
            </div>
          </section>
          <header className="menuIntro">
            <p className="menuName">브루드 커피</p>
            <img src="./Images/minkiChoi/coffee-cup.png" alt="coffee-cup" />
            <p className="menuDescription">
              디카페인 에스프레소 샷 추가 기능 (일부 음료 제외)
            </p>
          </header>
          <section className="menuImage">
            <a href="">
              <div className="wrapper">
                <img src="./Images/minkiChoi/ryo.jpg" alt="" />
              </div>
              <div className="shopProductName">ddd</div>
            </a>
            <a href="">
              <div className="wrapper">
                <img src="./Images/minkiChoi/duncan.jpg" alt="" />
              </div>
              <div className="shopProductName">ddd</div>
            </a>
          </section>
        </div>
      </div>
    );
  }
}

export default List;
