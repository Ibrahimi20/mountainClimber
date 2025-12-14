// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyNavbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import My_Story from "./pages/speach";
//dfgvhbjnk,
const App = () => {
  return (
    <div>
      <Router>
        <MyNavbar />
        {/* <Hero /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/My_Story" element={<My_Story />} />

          {/* <Route path="/My_Story" element={<></>} /> */}
          {/* <Route path="/my-story/" element={<About />} />
        <Route path="/expeditions" element={<Expeditions />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} /> */}
        </Routes>
        {/* urlsSection:[
        "my story":"https://www.nellyattar.com/my-story/",
        "climb with me":"https://www.nellyattar.com/climb-with-me/",
        ""RUN with me"":"https://www.nellyattar.com/train-with-me/",
        "partnerships":"https://www.nellyattar.com/partnerships/",
        "Podcast":"https://www.nellyattar.com/https://www.nellyattar.com/in-media//",        
        "media":"",

      ] */}

        <Footer />
      </Router>
    </div>
  );
};

export default App;
