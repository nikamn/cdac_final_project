import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../assets/logo/png/Color logo - no background.png";
import {
  faBullseye,
  faHandsHoldingCircle,
  faLeaf,
} from "@fortawesome/free-solid-svg-icons";
const AboutUs = () => {
  return (
    <section>
      <div className="flex h-[500px] justify-center items-center flex-col ">
        <div className="w-full h-full about-us-bg-img bg-cover bg-center">
          <div className="w-full h-full flex flex-col justify-center items-center backdrop-brightness-50">
            <h1 className="my-4 text-white text-6xl text-justify md:w-1/2 md:text-center">
              About Us
            </h1>
            <span className="text-white text-4xl w-[280px]  text-center md:w-1/2 ">
              Welcome to RootToRoof Organics, your ultimate destination for
              embracing the organic way of life and cultivating a healthier,
              greener world right from your own home.
            </span>
          </div>
        </div>
      </div>

      <div className="p-4 flex flex-col justify-evenly flex-wrap  md:flex-row md:justify-center md:gap-4 ">
        <div className="p-10  mt-5 mx-3 shadow-md rounded-xl md:w-[30%] md:max-w-[600px]">
          <h2 className="text-3xl">
            <FontAwesomeIcon icon={faBullseye} className="pe-4" />
            Our Mission
          </h2>
          <p className="text-base font-medium text-justify py-3 md:text-[1.4rem] md:leading-relaxed">
            At RootToRoof Organics, we are on a mission to empower health
            enthusiasts and gardening enthusiasts alike to embark on a journey
            towards sustainable living. We believe that fostering a connection
            with nature and understanding the source of our food is essential
            for well-being.
          </p>
        </div>
        <div className="p-10  mt-5 mx-3 shadow-md rounded-xl md:w-[30%] md:max-w-[600px]">
          <h2 className="text-3xl">
            <FontAwesomeIcon icon={faLeaf} className="pe-4" />
            Our Commitment to Sustainability:
          </h2>
          <p className="text-base font-medium text-justify py-3 md:text-[1.4rem] md:leading-relaxed">
            We are committed to fostering sustainable practices. Our products
            are sourced responsibly, and our services are designed to help you
            create an eco-friendly, self-sustaining oasis at home.
          </p>
        </div>
        <div className="p-10 mt-5 mx-3 shadow-md rounded-xl md:w-[30%] md:max-w-[600px]">
          <h2 className="text-3xl">
            <FontAwesomeIcon icon={faHandsHoldingCircle} className="pe-4" />
            Our Offerings
          </h2>
          <ul className="list-square list-inside marker:text-[#023F3A] marker:text-2xl py-3 md:text-[1.4rem] md:leading-relaxed">
            <li>
              Organic Seeds Dispatching: Choose from a variety of organic seeds
              carefully selected for your kitchen garden.
            </li>

            <li>
              Rooftop Gardening Equipment: Explore our range of high-quality
              equipment designed for rooftop gardens and urban spaces.
            </li>

            <li>
              Expert Services: Consult with our terrace-gardening experts, avail
              services like setting up gardening layouts, and benefit from soil
              checking and treatment solutions.
            </li>
          </ul>
        </div>
      </div>

      {/* outside flex */}
      <div className="p-6 px-11 bg-[#023F3A]">
        <h2 className="text-3xl text-white text-center">
          Join Us on the Organic Journey
        </h2>
        <p className="text-slate-100 text-base font-medium text-justify py-3 md:text-[1.4rem] md:w-[500px] md:text-center mt-4 m-auto md:leading-relaxed">
          Whether you&apos;re a seasoned gardener or just starting, RootToRoof
          Organics is here to guide you on your organic journey. Let&apos;s
          cultivate a healthier, more sustainable future together, from the root
          to the roof.
        </p>
        <p className="text-slate-100 text-base font-medium text-justify py-3 md:text-[1.4rem] md:text-center mt-4 m-auto">
          Thank you for choosing RootToRoofOrganics!
          <span>
            <img src={logo} alt="logo" className="w-20 inline-block" />
          </span>
        </p>
      </div>
    </section>
  );
};
export default AboutUs;
