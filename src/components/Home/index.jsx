import Hero from "../../Hero/Hero";
import "./home.css";

const Home = () => {
  return (
    // <div className="container-fluid">
      <div className="container-fluid px-0">
        <div className="home">
          <Hero
            header={"Modern Interior Design Studio"}
            subHeader={
              "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique."
            }
          />
        </div>
      {/* </div> */}
    </div>
  );
};

export default Home;
