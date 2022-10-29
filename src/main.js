import Navbar from "./Components/Navbar/Navbar";
import Section1 from "./Components/Section1/Section1";
import Features from "./Components/Features/Features";
import Section2 from "./Components/Section2/Section2";
import Footer from "./Components/Footer/Footer";

function Main() {
  return (
    <div className="main">
      <Navbar />
      <Section1 />
      <Features />
      <Section2 />
      <Footer />
    </div>
  );
}

export default Main;
