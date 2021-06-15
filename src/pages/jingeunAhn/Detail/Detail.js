import { Component } from 'react';

class Detail extends Component {
  render() {
    return (
      <>
        <nav class="detail_nav_container">
          <h6 class="nav_title">WeCoffeeTalgia</h6>
          <ul class="nav_list">
            <li><a href="#">coffee</a></li>
            <li><a href="#">menu</a></li>
            <li><a href="#">store</a></li>
            <li><a href="#">what's new</a></li>
          </ul>
        </nav>
        <main class="detail_main_container">
          <section class="main_category">
            <h6 class="main_title">에스프레소</h6>
            <ul class="main_category_map">
              <li><a href="login.html">Home</a></li>
              <li>Menu</li>
              <li>Drinks</li>
              <li>Espresso</li>
            </ul>
          </section>

          <section class="main_content">
            <div class="main_content_img">
              <img class="coffee_img" src="./커피이미지/아메리카노.jpg" alt="아메리카노이미지" />
            </div>
            <div class="main_info">
              <div class="info_title">
              <div>
                <P class="info_title_kor" 아메리카노 />
                <P class="info_title_eng" Americano />
              </div>
              <div>
                <button class="heart"></button>
              </div>  
            </div>

            <div class="설명">
              <p>진한 에스프레소와 뜨거운 물을 섞어 깔끔하고 강렬한 에스프레소를 가장 부드럽게 잘 느낄 수 있는 커피</p>
            </div>

            <div class="영양정보">
              <p>제품영양정보</p>
              <p>Tall(톨)/355ml(12 fl oz)</p>
            </div>
            <div class="세부영양정보">
              <div class="세부영양정보1">
                <ol class="월">
                  <li>1회 제공량 (kcal)</li>
                  <li>10</li>
                  </ol>
                  <ol class="월">
                    <li>포화지방 (g)</li>
                    <li>0</li>
                  </ol>
                  <ol class="월">
                    <li>단백질 (g)</li>
                    <li>1</li>
                  </ol>
                </div>
                <div class="세부영양정보2">
                  <ol class="월">
                    <li>나트륨 (mg)</li>
                    <li>5</li>
                  </ol>
                  <ol class="월">
                    <li>당류 (g)</li>
                    <li>0</li>
                  </ol>
                  <ol class="월">
                    <li>카페인 (mg)</li>
                    <li>150</li>
                  </ol>
                </div>
              </div>  

            <div class="알러지">
              <P>알레르기 유발 요인: 우유</P>
            </div>
            <div class="리뷰">
              리뷰
            </div>
            </div>
          </section>
        </main>
      </>
    );
  }
}

export default Detail;
