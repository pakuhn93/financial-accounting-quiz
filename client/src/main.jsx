import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// import router stuff
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Home.jsx';

// create the router (similar to express)
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
);