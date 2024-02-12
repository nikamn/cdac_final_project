import services from "../../data/servicesData.js";
import ServiceCard from "./ServiceCard.jsx";

import "./Services.css";

const Services = () => {
  return (
    <section className="services-section">
      <h2 className="heading-section">Our Services</h2>
      <div className="services-container">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
