import missionImage1 from "../../assets/mission/mission-image1.png";
import missionImage2 from "../../assets/mission/mission-image2.png";
import missionImage3 from "../../assets/mission/mission-image4.png";
import organicMakingIcon from "../../assets/mission/organic-making-icon.png";
import certifiedProductIcon from "../../assets/mission/certified-products-icon.png";
import fastDeliveryIcon from "../../assets/mission/fast-delivery-icon.png";

const Mission = () => {
  return (
    <section className="w-full flex flex-col  items-center justify-around p-10 md:flex-row 2xl:justify-center">
      <div className="w-[500px] flex flex-col p-5 2xl:w-[600px]">
        <h2 className="text-5xl font-medium underline underline-offset-8 leading-loose">
          Our Mission: Cultivating Green Lifestyles
        </h2>
        <p className="font-normal text-2xl mt-12 leading-snug">
          At RootToRoof, we believe in fostering a connection with nature and
          promoting sustainable living through terrace gardening. Our mission is
          to provide expert guidance, quality products, and a supportive
          community, empowering individuals to embrace the joy of cultivating
          their own organic kitchen gardens. Together, let&apos;s sow the seeds
          of a healthier, greener future.
        </p>
        <div className="w-auto flex justify-between flex-wrap">
          <div className="w-1/2 flex items-center gap-3 text-2xl py-5">
            <img src={organicMakingIcon} alt="icon" />
            <h3>Organic making</h3>
          </div>
          <div className="w-1/2 flex items-center gap-3 text-2xl py-5">
            <img src={certifiedProductIcon} alt="icon" />
            <h3>Certified products</h3>
          </div>
          <div className="w-1/2 flex items-center gap-3 text-2xl py-5">
            <img src={fastDeliveryIcon} alt="icon" />
            <h3>Fast delivery</h3>
          </div>
        </div>
      </div>
      <div className="w-auto md:p-14">
        <div className="w-auto flex justify-center items-center">
          <img
            src={missionImage2}
            alt="Mission Image"
            className="w-auto rounded-md shadow-lg"
          />
        </div>
        <div className="flex gap-2 mt-2 w-auto">
          <img
            src={missionImage1}
            alt="Mission Image"
            className="w-1/2 max-w-[250px] rounded-md shadow-lg"
          />
          <img
            src={missionImage3}
            alt="Mission Image"
            className="w-1/2  max-w-[250px] rounded-md shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Mission;
