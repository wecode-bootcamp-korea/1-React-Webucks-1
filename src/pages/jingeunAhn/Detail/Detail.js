/* eslint-disable react/jsx-no-undef */
import { Component } from 'react';

class Detail extends Component {
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
        <main className="detail_main_container">
          <section className="main_category">
            <h6 className="main_title">에스프레소</h6>
            <ul className="main_category_map">
              <li>
                <a href="login.html">Home</a>
              </li>
              <li>Menu</li>
              <li>Drinks</li>
              <li>Espresso</li>
            </ul>
          </section>

          <section className="main_content">
            <div className="main_content_img">
              <img className="coffee_img" src=" " alt="아메리카노이미지" />
            </div>
            <div className="main_info">
              <div className="info_title">
                <div>
                  <p className="info_title_kor"> 아메리카노 </p>
                  <p className="info_title_eng"> Americano </p>
                </div>
                <div>
                  <button className="heart" 하트 />
                </div>
              </div>
              <div className="설명">
                <p>
                  진한 에스프레소와 뜨거운 물을 섞어 깔끔하고 강렬한
                  에스프레소를 가장 부드럽게 잘 느낄 수 있는 커피
                </p>
              </div>

              <div className="영양정보">
                <p>제품영양정보</p>
                <p>Tall(톨)/355ml(12 fl oz)</p>
              </div>
              <div className="세부영양정보">
                <div className="세부영양정보1">
                  <ol className="월">
                    <li>1회 제공량 (kcal)</li>
                    <li>10</li>
                  </ol>
                  <ol className="월">
                    <li>포화지방 (g)</li>
                    <li>0</li>
                  </ol>
                  <ol className="월">
                    <li>단백질 (g)</li>
                    <li>1</li>
                  </ol>
                </div>
                <div className="세부영양정보2">
                  <ol className="월">
                    <li>나트륨 (mg)</li>
                    <li>5</li>
                  </ol>
                  <ol className="월">
                    <li>당류 (g)</li>
                    <li>0</li>
                  </ol>
                  <ol className="월">
                    <li>카페인 (mg)</li>
                    <li>150</li>
                  </ol>
                </div>
              </div>
              <div className="알러지">
                <p>알레르기 유발 요인: 우유</p>
              </div>
              <div className="리뷰">리뷰</div>
            </div>
          </section>
        </main>
      </>
    );
  }
}

export default Detail;
