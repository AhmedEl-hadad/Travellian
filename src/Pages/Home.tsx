import { NavbarDemo } from "../Layout/Navbar";
import Destinations from "../Section/Destinations";
import HeroSection from "../Section/HeroSection";

const Home = () => {
  return (
    <>
      <NavbarDemo />
      <HeroSection />
      <Destinations />
      <div className="w-full h-screen bg-primary"></div>
    </>
  );
};

export default Home;
