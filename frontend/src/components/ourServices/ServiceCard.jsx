/* eslint-disable react/prop-types */

function ServiceCard({ service }) {
  return (
    <div className="relative w-[40%] min-w-[300px] max-w-[550px] bg-white rounded-2xl shadow-lg mx-auto my-8 px-5 py-4">
      <img
        src={service.icon}
        alt={`${service.title} Icon`}
        className="absolute -left-[5%] top-[35%] w-20"
      />
      <div className="m-4">
        <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
        <p className="text-lg">{service.description}</p>
      </div>
    </div>
  );
}

export default ServiceCard;
