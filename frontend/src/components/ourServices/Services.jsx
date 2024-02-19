import services from "../../data/servicesData.js";
import ServiceCard from "./ServiceCard.jsx";

const Services = () => {
  return (
    <section className="w-full flex flex-col  items-center bg-[#f2eee9] py-8">
      <h2 className="w-auto">Our Services</h2>
      <div className="flex justify-evenly flex-wrap p-10 max-w-[2000px]">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
