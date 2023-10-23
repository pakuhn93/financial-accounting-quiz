import { Outlet } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Header from './Components/Header';

export default function App() {

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}