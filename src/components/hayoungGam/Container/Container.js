import { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { PATH } from 'utils/pathnames';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Container.scss';

class Container extends Component {
  render() {
    const {
      location: { pathname },
      children,
    } = this.props;
    const { login } = PATH;
    return (
      <>
        {!(pathname === login) && <Header />}
        <div className={pathname === login ? 'container--login' : 'container'}>
          {children}
        </div>
        {!(pathname === login) && <Footer />}
      </>
    );
  }
}

export default withRouter(Container);
