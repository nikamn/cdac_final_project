/* eslint-disable react/prop-types */
import "./ServiceCard.css";
function ServiceCard({ service }) {
  return (
    <div className="service-card">
      <img src={service.icon} alt={`${service.title} Icon`} />
      <div className="service-card-desc">
        <h3>{service.title}</h3>
        <p>{service.description}</p>
      </div>
    </div>
  );
}

export default ServiceCard;
