import CallToAction from "../../components/CallToAction";
import Footer from "../../components/Footer";
import GrowthStats from "../../components/GrowthStats";
import Message from "../../components/Message";

const Home = () => {
  return (
    <>
      <div className="bg-[#100919]">
      <Message/>
        <GrowthStats/>
        <CallToAction/>
        <Footer/>
      </div>
     
    </>

  )
};

export default Home