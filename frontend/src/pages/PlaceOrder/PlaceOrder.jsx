import Cart from "../../components/Cart/Cart";

const PlaceOrder = () => {
  // const { showModal, toggle, cartItems, addToCart } = useContext(CartContext);

  //   console.log(toggle);
  return (
    <div>
      <div className=" w-full flex max-w-screen-lg mx-auto py-8 lg:py-16">
        <div  className="w-1/2 mx-auto">
        <Cart />
        </div>
        <div className="w-1/2">fhgh</div>
      </div>
    </div>
  );
};

export default PlaceOrder;
