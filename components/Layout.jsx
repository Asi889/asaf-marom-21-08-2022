// import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import NavBar from './NavBar';
// import NavBar from '../navbar/NavBar';

const Layout = function ({ children }) {
//   const { pathname } = useRouter();
  return (
    <section className="w-screen max-w-[470px] md:max-w-full">      
        <NavBar /> 
      <main className="">{children}</main>
    </section>
  );
};

Layout.prototype = {
  children: PropTypes.any,
};
export default Layout;
