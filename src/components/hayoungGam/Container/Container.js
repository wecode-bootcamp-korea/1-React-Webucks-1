import { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { LOGIN_PAGE_PATHNAME } from 'pathnames';
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
        {!(pathname === LOGIN_PAGE_PATHNAME) && <Header />}
        <div
          className={
            pathname === LOGIN_PAGE_PATHNAME ? 'container--login' : 'container'
          }
        >
          {children}
        </div>
        {!(pathname === LOGIN_PAGE_PATHNAME) && <Footer />}
      </>
    );
  }
}

export default withRouter(Container);
