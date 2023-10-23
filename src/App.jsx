import { Outlet } from 'react-router-dom';
import Home from './Pages/Home/Home';

export default function App() {

  return (
    <>
      <Outlet />
      <h1>Successfully Hosted.</h1>
    </>
  );
}