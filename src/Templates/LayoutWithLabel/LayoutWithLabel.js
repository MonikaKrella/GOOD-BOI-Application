import { Outlet } from 'react-router-dom';
import GreyLabel from '../../Atoms/GreyLabel/GreyLabel';
import Footer from '../../Molecules/Footer/Footer';
import NavElement from '../../Organisms/NavElement/NavElement';

const LayoutWithLabel = () => {
  return (
    <>
      <NavElement text="WannaBe" />
      <GreyLabel text="Make me Dynamic Please!" />
      <Outlet />
      <Footer />
    </>
  );
};

export default LayoutWithLabel;
