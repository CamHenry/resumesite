import Footbar from './footer';
import Navbar from './navbar';

const Layout = ({children}:{children:unknown}) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footbar />
    </div>
  );
};

export default Layout;
