import LazyLoad from "react-lazyload";
import heroImage from "../../assets/vegetables.jpg";
import "./Home.css";
import Categories from "../../components/categories/Categories";
import Services from "../../components/ourServices/Services";
import Mission from "../../components/Mission/Mission";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="home">
      <section className="hero__section mt-0 lg:mt-[28px] bg-cover grid  grid-cols-1 md:grid-cols-2 place-items-center md:place-content-center gap-4 p-4 relative">
        <div className="hero__text-box w-auto max-w-[450px] flex flex-col items-center justify-center gap-3">
          <h1 className="heading-primary">
            <span className=" text-center heading-primary--main leading-relaxed font-bold text-5xl mb-4  lg:text-4xl">
              Welcome to RootToRoofOrganics
            </span>
            <span className="heading-primary--sub text-2xl text-center  leading-loose lg:text-xl">
              &ldquo;Your Haven for Organic Living! Discover a vibrant world
              where health meets home. Explore premium organic seeds, rooftop
              gardening essentials, and expert services tailored for your
              home-based organic kitchen garden. Let&apos;s sow the seeds of
              wellness together!&rdquo;
            </span>
          </h1>

          <Link to="products">
            <button
              role="button"
              className="cta-btn w-auto text-white px-5 py-3 text-2xl hover:bg-green-200 hover:bg-opacity-10 lg:text-xl"
            >
              Get Started
            </button>
          </Link>
        </div>

        <div className="hero__imageBox flex  justify-center items-end mt-44 md:mt-0 md:items-center">
          <LazyLoad height={200} offset={100}>
            <div className="relative mx-auto ">
              <img
                className="h-auto w-auto max-w-[350px] lg:max-w-[400px] rounded-lg shadow-2xl object-cover "
                src={heroImage}
                alt="Random image"
              />
              <div className="absolute inset-0 bg-gray-700 opacity-60 rounded-md"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h2 className="text-white text-2xl font-bold">
                  Grow Your Wellness:Where Health Meets Home
                </h2>
              </div>
            </div>
          </LazyLoad>
        </div>
      </section>

      <Categories />

      <Services />

      <Mission />
    </section>
  );
}

export default Home;
