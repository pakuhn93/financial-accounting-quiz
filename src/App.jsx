import { Outlet } from 'react-router-dom';
import Header from './Components/Header/Header.jsx';
import Footer from './Components/Footer/Footer.jsx';

export default function App() {

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}