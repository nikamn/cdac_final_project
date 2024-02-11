import missionImage1 from "../../assets/mission/mission-image1.png";
import missionImage2 from "../../assets/mission/mission-image2.png";
import missionImage3 from "../../assets/mission/mission-image4.png";
import "./Mission.css";
import organicMakingIcon from "../../assets/mission/organic-making-icon.png";
import certifiedProductIcon from "../../assets/mission/certified-products-icon.png";
import fastDeliveryIcon from "../../assets/mission/fast-delivery-icon.png";

const Mission = () => {
  return (
    <section className="mission-section">
      <div className="mission-description">
        <h2>Our Mission: Cultivating Green Lifestyles</h2>
        <p className="mission-statement">
          At GreenLife Gardens, we believe in fostering a connection with nature
          and promoting sustainable living through terrace gardening. Our
          mission is to provide expert guidance, quality products, and a
          supportive community, empowering individuals to embrace the joy of
          cultivating their own organic kitchen gardens. Together, let&apos;s
          sow the seeds of a healthier, greener future.
        </p>
        <div className="mission-icons">
          <div>
            <img src={organicMakingIcon} alt="icon" />
            <h3>Organic making</h3>
          </div>
          <div>
            <img src={certifiedProductIcon} alt="icon" />
            <h3>Certified products</h3>
          </div>
          <div>
            <img src={fastDeliveryIcon} alt="icon" />
            <h3>Fast delivery</h3>
          </div>
        </div>
      </div>
      <div className="mission-img-container">
        <div>
          <img
            src={missionImage2}
            alt="Mission Image"
            className="mission-image m2"
          />
        </div>
        <div className="mission-img-subcontainer">
          <img
            src={missionImage1}
            alt="Mission Image"
            className="mission-image"
          />
          <img
            src={missionImage3}
            alt="Mission Image"
            className="mission-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Mission;
