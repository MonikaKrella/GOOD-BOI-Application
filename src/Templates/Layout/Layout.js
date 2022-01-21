import { Outlet } from 'react-router-dom';
import Footer from '../../Molecules/Footer/Footer';
import NavElement from '../../Organisms/NavElement/NavElement';

const Layout = () => {
  return (
    <>
      <NavElement text="WannaBe" />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
