import { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { pathnames } from 'utils/pathnames';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Container.scss';

class Container extends Component {
  render() {
    const {
      location: { pathname },
      children,
    } = this.props;
    const { loginUrl } = pathnames;
    return (
      <>
        {!(pathname === loginUrl) && <Header />}
        <div
          className={pathname === loginUrl ? 'container--login' : 'container'}
        >
          {children}
        </div>
        {!(pathname === loginUrl) && <Footer />}
      </>
    );
  }
}

export default withRouter(Container);
