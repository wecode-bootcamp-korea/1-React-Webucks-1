import { Component } from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="footer-menu">
            <h5 className="footer-menu__title">
              <Link className="footer-menu__link" to="/">
                company
              </Link>
            </h5>
            <small className="footer-menu__item">
              <Link className="footer-menu__link" to="/">
                한눈에 보기
              </Link>
            </small>
            <small className="footer-menu__item">
              <Link className="footer-menu__link" to="/">
                스타벅스 사명
              </Link>
            </small>
            <small className="footer-menu__item">
              <Link className="footer-menu__link" to="/">
                스타벅스 소개
              </Link>
            </small>
            <small className="footer-menu__item">
              <Link className="footer-menu__link" to="/">
                국내 뉴스룸
              </Link>
            </small>
            <small className="footer-menu__item">
              <Link className="footer-menu__link" to="/">
                세계의 스타벅스
              </Link>
            </small>
            <small className="footer-menu__item">
              <Link className="footer-menu__link" to="/">
                글로벌 뉴스룸
              </Link>
            </small>
          </div>
          <div className="footer__menu">
            <h5 className="footer-menu__title">
              <Link className="footer-menu__link" to="/">
                corporate sales
              </Link>
            </h5>
            <small className="footer-menu__item">
              <Link className="footer-menu__link" to="/">
                단체 및 기업 구매 안내
              </Link>
            </small>
          </div>
          <div className="footer__menu">
            <h5 className="footer-menu__title">
              <Link className="footer-menu__link" to="/">
                partnership
              </Link>
            </h5>
            <small className="footer-menu__item">
              <Link className="footer-menu__link" to="/">
                신규 입점 제의
              </Link>
            </small>
            <small className="footer-menu__item">
              <Link className="footer-menu__link" to="/">
                협력 고객사 등록신청
              </Link>
            </small>
          </div>
          <div className="footer__menu">
            <h5 className="footer-menu__title">
              <Link className="footer-menu__link" to="/">
                online community
              </Link>
            </h5>
            <small className="footer-menu__item">
              <Link className="footer-menu__link" to="/">
                페이스북
              </Link>
            </small>
            <small className="footer-menu__item">
              <Link className="footer-menu__link" to="/">
                트위터
              </Link>
            </small>
            <small className="footer-menu__item">
              <Link className="footer-menu__link" to="/">
                유튜브
              </Link>
            </small>
            <small className="footer-menu__item">
              <Link className="footer-menu__link" to="/">
                인스타그램
              </Link>
            </small>
          </div>
          <div className="footer__menu">
            <h5 className="footer-menu__title">
              <Link className="footer-menu__link" to="/">
                recruit
              </Link>
            </h5>
            <small className="footer-menu__item">
              <Link className="footer-menu__link" to="/">
                채용 소개
              </Link>
            </small>
            <small className="footer-menu__item">
              <Link className="footer-menu__link" to="/">
                채용 지원하기
              </Link>
            </small>
          </div>
          <div className="footer__menu">
            <h5 className="footer-menu__title">
              <Link className="footer-menu__link" to="/">
                webucks
              </Link>
            </h5>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
