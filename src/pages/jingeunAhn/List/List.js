import { Component } from 'react';

class List extends Component {
  render() {
    return (
      <>
        <header className="detail_nav_container">
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
        </header>

        <section class="coffee_int_bar">
          <h3 class="coffee_int_title"> Espresso </h3>
          <i class="coffee_int_icon"></i>
          <p class="coffee_int_detail"> 디카페인 에스프레소 샷 추가 가능 (일부 음료 제외) </p>
        </section>

        <div>
          <figure>
            <img src="./커피이미지/에스프레소.jpg">
            <figcaption>에스프레소</figcaption>
          </figure>

          <figure>
            <img src="./커피이미지/아메리카노.jpg">
            <figcaption>아메리카노</figcaption>
          </figure>

          <figure>
            <img src="./커피이미지/에스프레소 마키아또.jpg">
            <figcaption>에스프레소 마키아또</figcaption>
          </figure>

          <figure>
            <img src="./커피이미지/에스프레소 콘파냐.jpg">
            <figcaption>에스프레소 콘파냐</figcaption>
          </figure>

          <figure>
            <img src="./커피이미지/카페라떼.jpg">
            <figcaption>카페라떼</figcaption>
          </figure>

          <figure>
            <img src="./커피이미지/카페모카.jpg">
            <figcaption>카페모카</figcaption>
          </figure>

          <figure>
            <img src="./커피이미지/카푸치노.jpg">
            <figcaption>카푸치노</figcaption>
          </figure>

          <figure>
            <img src="./커피이미지/플랫 화이트.jpg">
            <figcaption>플랫화이트</figcaption>
          </figure>
        </div>
  <script src=""></script>  

      </>
    );
  }
}

export default List;
