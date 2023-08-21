import { Outlet } from 'react-router-dom';
import Home from './Home';

export default function App() {

  return (
    <>
      <Outlet />
      <Home />
    </>
  );
}