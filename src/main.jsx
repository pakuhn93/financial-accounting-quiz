import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// import router stuff
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home/Home.jsx';

import Practice from './Pages/Practice/Practice.jsx';
import Flashcards from './Pages/Flashcards/Flashcards.jsx';
import Accounts from './Pages/Accounts/Accounts.jsx';

import Suggestions from './Pages/Suggestions/Suggestions.jsx';


import Test from './Pages/Test.jsx';
import About from './Pages/About/About.jsx';

// create the router (similar to express)
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'practice',
        element: <Practice />
      },
      {
        path: 'practice/flashcards',
        element: <Flashcards />
      },
      {
        path: 'practice/accounts',
        element: <Accounts />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'suggestions',
        element: <Suggestions />
      },
      {
        path: 'test',
        element: <Test />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
);