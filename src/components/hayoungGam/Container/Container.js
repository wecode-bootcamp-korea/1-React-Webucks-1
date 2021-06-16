import { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Container.scss';

class Container extends Component {
  render() {
    const {
      location: { pathname },
      children,
    } = this.props;
    return (
      <>
        {!(pathname === '/login-hayoung') && <Header />}
        <div
          className={
            pathname === '/login-hayoung' ? 'container--login' : 'container'
          }
        >
          {children}
        </div>
        {!(pathname === '/login-hayoung') && <Footer />}
      </>
    );
  }
}

export default withRouter(Container);
