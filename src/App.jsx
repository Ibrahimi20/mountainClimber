// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyNavbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Store from './pages/Store';
import ContactUs from './pages/ContactUs';
import ClimbWithMe from './pages/climbwithme';
import RunWithMe from './pages/runwithme';
import StoryPage from './pages/StoryPage';
const App = () => {
  return (
    <div>
      <Router>
        <MyNavbar />
        {/* <Hero /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/My_Story" element={<StoryPage />} />
          <Route path="/shop" element={<Store />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/climb_with_me" element={<ClimbWithMe />} />
          <Route path="/run_with_me" element={<RunWithMe />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
