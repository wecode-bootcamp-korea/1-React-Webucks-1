import { Component } from 'react';
import HeartShape from './HeartShape/HeartShape';
import Comment from './Comment/Comment';
import './Detail.scss';

class Detail extends Component {
  render() {
    return (
      <div className="Detail">
        <div className="container">
          <div className="detailContainer">
            <nav className="navi">
              <a className="naviTitle" href="/">
                Webucks
              </a>
              <ul className="naviMenu">
                <li>
                  <a href="/">COFFEE</a>
                </li>
                <li>
                  <a href="/">MENU</a>
                </li>
                <li>
                  <a href="/">STORE</a>
                </li>
                <li>
                  <a href="/">WHAT'S NEW</a>
                </li>
              </ul>
            </nav>
            <div className="productHead">
              <h2>콜드 브루</h2>
              <ul className="siteMap">
                <li>
                  <a href="/">홈</a>
                </li>
                <li>l</li>
                <li>
                  <a href="/">MENU</a>
                </li>
                <li>l</li>
                <li>
                  <a href="/">음료</a>
                </li>
                <li>l</li>
                <li>
                  <a href="/">에스프레소</a>
                </li>
                <li>l</li>
                <li>
                  <a href="/">화이트 초콜렛 모카</a>
                </li>
              </ul>
            </div>
            <div className="productContents">
              <div className="productImage">
                <img src="./Images/minkiChoi/ringo.jpg" alt="/" />
              </div>
              <div className="productDetail">
                <div className="productDetailContainer">
                  <div className="productName">
                    <h3>화이트 초콜릿 모카</h3>
                    <h4>White Chocolate Mocha</h4>
                  </div>
                  <HeartShape />
                </div>
                <div className="productDescription">
                  <p>
                    달콤하고 부드러운 화이트 초콜릿 시럽과 에스프레소를
                    스팀밀크와 섞어 휘핑크림으로 마무리한 음료로 달콤함과 강렬한
                    에스프레소가 부드럽게 어우러진 커피
                  </p>
                </div>
                <div className="productInfo">
                  <div className="productInfoDetail">
                    <p>제품 영양 정보</p>
                    <p>Tall(톨) / 355ml (12 fl oz)</p>
                  </div>
                  <div className="productNutriInfo">
                    <ul>
                      <li className="kcal">
                        <dl>
                          <dt>1회 제공량 (kcal)</dt>
                          <dd>345</dd>
                        </dl>
                      </li>
                      <li className="satFat">
                        <dl>
                          <dt>포화지방 (g)</dt>
                          <dd>11</dd>
                        </dl>
                      </li>
                      <li className="protein">
                        <dl>
                          <dt>단백질 (g)</dt>
                          <dd>11</dd>
                        </dl>
                      </li>
                    </ul>
                    <ul>
                      <li className="sodium">
                        <dl>
                          <dt>나트륨(mg)</dt>
                          <dd>150</dd>
                        </dl>
                      </li>
                      <li className="sugars">
                        <dl>
                          <dt>당류 (g)</dt>
                          <dd>150</dd>
                        </dl>
                      </li>
                      <li className="caffeine">
                        <dl>
                          <dt>카페인 (mg)</dt>
                          <dd>75</dd>
                        </dl>
                      </li>
                    </ul>
                  </div>
                  <div className="productFactor">
                    <p>알레르기 유발 요인: 우유</p>
                  </div>
                  <div className="review">
                    <p>리뷰</p>
                  </div>
                  <div className="inputReview">
                    <Comment />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer>
            <div className="footerWrapper">
              <ul>
                <li>
                  <a href="/">COMPANY</a>
                </li>
                <li>
                  <a href="/">한눈에 보기</a>
                </li>
                <li>
                  <a href="/">스타벅스 사명</a>
                </li>
                <li>
                  <a href="/">스타벅스 소개</a>
                </li>
                <li>
                  <a href="/">국내 뉴스룸</a>
                </li>
                <li>
                  <a href="/">세계의 스타벅스</a>
                </li>
                <li>
                  <a href="/">글로벌 뉴스룸</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="/">CORPORATE SALES</a>
                </li>
                <li>
                  <a href="/">단체 및 기업 구매 안내</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="/">PARTNERSHIP</a>
                </li>
                <li>
                  <a href="/">신규 입점 제의</a>
                </li>
                <li>
                  <a href="/">협력 고객사 등록 신청</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="/">ONLINE COMMUNITY</a>
                </li>
                <li>
                  <a href="/">페이스북</a>
                </li>
                <li>
                  <a href="/">트위터</a>
                </li>
                <li>
                  <a href="/">유튜브</a>
                </li>
                <li>
                  <a href="/">블로그</a>
                </li>
                <li>
                  <a href="/">인스타그램</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="/">RECRUIT</a>
                </li>
                <li>
                  <a href="/">채용 소개</a>
                </li>
                <li>
                  <a href="/">채용 지원하기</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="/">WEBUCKS</a>
                </li>
              </ul>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

export default Detail;
