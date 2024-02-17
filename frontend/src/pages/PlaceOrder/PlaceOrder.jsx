import Address from "../../components/Address/Adress";
import Cart from "../../components/Cart/Cart";

const PlaceOrder = () => {
  return (
    <section className="sm:mt-3  relative max-w-[1000px] grid grid-cols-1 md:grid-cols-2 mx-auto  rounded-md">
      <div className="w-full h-auto p-5 flex justify-center items-center bg-[#1D2E28] md:rounded-l-md">
        <Address />
      </div>

      <div className="w-full bg-[#CBD5C0] flex flex-col justify-center items-center p-5 md:rounded-r-md">
        <Cart />
      </div>
    </section>
  );
};

export default PlaceOrder;
