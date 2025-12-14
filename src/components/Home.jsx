import Story from './me';
import MoveWithMeSection from './movewithme';
import PartnershipsSection from './ParternerShip';
import ShopSection from './ShopSection';
import TalksSection from './talks';
import SplashHero from './SplashHero';
import Footer from './Footer';

import MyNavbar from '../components/Navbar';

const Home = () => {
  return (
    <div className="bg-black">
      {/* <MyNavbar /> */}
      <SplashHero></SplashHero>

      <Story />
      <MoveWithMeSection />
      <ShopSection />
      <TalksSection />
      {/* <Footer /> */}
      {/* <PartnershipsSection />  */}
    </div>
  );
};

export default Home;
