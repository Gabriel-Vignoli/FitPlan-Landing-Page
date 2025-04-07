import AboutSection from "./components/AboutSection";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import MethodologySection from "./components/MethodologySection";
import PlansSection from "./components/PlansSection";
import SystemSection from "./components/SystemSection";
import WhoIsItForSection from "./components/WhoIsItForSection";

function App() {
  return (
    <>
    <Header></Header>
     <HeroSection></HeroSection>
     <WhoIsItForSection></WhoIsItForSection>
     <AboutSection></AboutSection>
     <MethodologySection></MethodologySection>
     <SystemSection></SystemSection>
     <PlansSection></PlansSection>
    </>
  );
}

export default App;