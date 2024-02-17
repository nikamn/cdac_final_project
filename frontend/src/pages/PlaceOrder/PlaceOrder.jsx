import Address from "../../components/Address/Adress";
import Cart from "../../components/Cart/Cart";

const PlaceOrder = () => {
  // const { showModal, toggle, cartItems, addToCart } = useContext(CartContext);

  //   console.log(toggle);
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 ">
      <div className="">
        <Address />
      </div>

      <div className="w-1/2">
        <Cart />
      </div>
    </section>
  );
};

export default PlaceOrder;
