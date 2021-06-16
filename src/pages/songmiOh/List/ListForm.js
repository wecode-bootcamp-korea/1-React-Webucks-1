import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ListForm.scss';

class ListForm extends Component {
  render() {
    return (
      <section className="menuImage">
        <a href="#">
          <div className="imagefist">
            <img src="./Images/songmiOh/coffee.jpg" alt="coffeeImage" />
          </div>
          <div className="productName">나이트로 바닐라 크림</div>
        </a>
        <a href="#">
          <div className="imagefist">
            <img src="./Images/songmiOh/coffee.jpg" alt="coffeeImage" />
          </div>
          <div className="productName">나이트로 바닐라 크림</div>
        </a>
        <a href="#">
          <div className="imagefirst">
            <img src="./Images/songmiOh/coffee.jpg" alt="coffeeImage1" />
          </div>
          <div className="productName">나이트로 바닐라 크림</div>
        </a>
        <a href="#">
          <div className="imagesecond">
            <img src="./Images/songmiOh/coffee.jpg" alt="coffeeImage2" />
          </div>
          <div className="productName">나이트로 바닐라 크림</div>
        </a>
        <a href="#">
          <div className="imagethird">
            <img src="./Images/songmiOh/coffee.jpg" alt="coffeeImage3" />
          </div>
          <div className="productName">나이트로 바닐라 크림</div>
        </a>
        <a href="#">
          <div className="imagefourth">
            <img src="./Images/songmiOh/coffee.jpg" alt="coffeeImage4" />
          </div>
          <div className="productName">나이트로 바닐라 크림</div>
        </a>
        <a href="#">
          <div className="imagefifth">
            <img src="./Images/songmiOh/coffee.jpg" alt="coffeeImage5" />
          </div>
          <div className="productName">나이트로 바닐라 크림</div>
        </a>
        <ListForm />
      </section>
    );
  }
}

export default LoginBox;
