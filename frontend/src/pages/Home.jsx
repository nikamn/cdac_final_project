import LazyLoad from "react-lazyload";
import heroImage from "../assets/vegetables.jpg";
import "./Home.css";
import Categories from "../components/categories/Categories";
import Services from "../components/ourServices/Services";
import Mission from "../components/Mission/Mission";
function Home() {
  return (
    <main className="home">
      <section className="hero__section">
        <div className="hero__text-box">
          <h1 className="heading-primary">
            <span className="heading-primary--main">
              Welcome to RootToRoofOrganics
            </span>
            <span className="heading-primary--sub">
              &ldquo;Your Haven for Organic Living! Discover a vibrant world
              where health meets home. Explore premium organic seeds, rooftop
              gardening essentials, and expert services tailored for your
              home-based organic kitchen garden. Let&apos;s sow the seeds of
              wellness together!&rdquo;
            </span>
          </h1>

          <button role="button" className="cta-btn">
            Get Started
          </button>

          <div className="hero__imageBox">
            <LazyLoad height={400} offset={100}>
              <img
                src={heroImage}
                height={400}
                width={800}
                alt="hero section image"
              />
            </LazyLoad>
          </div>
        </div>
      </section>

      <Categories />

      <Services />

      <Mission />
    </main>
  );
}

export default Home;
