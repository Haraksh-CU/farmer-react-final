import About from "../components/About";
import Farm from "../components/Farm";
import Header from "../components/Header";
import Latest from "../components/Latest";
import Shop from "../components/Shop";
import Testimonial from "../components/Testimonial";

const Home = () => {
  return (
    <>
      <div class="Home">
        <Header />
        <Latest />
        <About />
        <Shop />
        <Testimonial />
        <Farm />
      </div>
    </>
  );
};
export default Home;
