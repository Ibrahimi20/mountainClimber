import {
  createBrowserRouter,
  Outlet,
  ScrollRestoration,
} from 'react-router-dom';

import MyNavbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';

import MyStory from './pages/speach';
import Store from './pages/Store';
import ContactUs from './pages/ContactUs';
import ClimbWithMe from './pages/movewithme';
import RunWithMe from './pages/runwithme';
import Checkout from './pages/Checkout';

const router = createBrowserRouter([
  {
    element: (
      <>
        <MyNavbar />
        <ScrollRestoration />
        {/* 👇 THIS IS REQUIRED */}
        <Outlet />
        <Footer />
      </>
    ),
    children: [
      { path: '/', element: <Home /> },
      { path: '/My_Story', element: <MyStory /> },
      { path: '/shop', element: <Store /> },
      { path: '/contact', element: <ContactUs /> },
      { path: '/climb_with_me', element: <ClimbWithMe /> },
      { path: '/run_with_me', element: <RunWithMe /> },
      { path: '/checkout', element: <Checkout /> },
    ],
  },
]);

export default router;
