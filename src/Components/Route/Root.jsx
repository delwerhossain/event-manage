
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import { Toaster } from 'react-hot-toast';

const Root = () => {
    return (
      <div className="2xl:w-10/12 mx-auto">
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
        <div>
          <Toaster />
        </div>
      </div>
    );
};

export default Root;