import "./Checkout.css";
import axios from "../../api/api";
import { loadStripe } from "@stripe/stripe-js";

const Checkout = () => {
  const dummyCartData = [
    {
      productName: "product 1",
      quantity: 2,
      price: 100,
      productId: 1,
      userId: 18,
    },
    {
      productName: "product 2",
      quantity: 5,
      price: 100,
      productId: 2,
      userId: 18,
    },
  ];

  const goToCheckOut = async () => {
    const stripeAPIToken =
      "pk_test_51OjHv8SCisYnrHqw76ceFjF2sc6fx8ibUDOGjpyWJi5j4g2i2QDje1sH2lWEKvWRUzQbbjKnkB4sHklljECD4MUI003D5X1dZB";

    const stripePromise = loadStripe(stripeAPIToken);
    const stripe = await stripePromise;

    const cartData = JSON.parse(localStorage.getItem("cartItems"));
    console.log(cartData);

    const { token } = JSON.parse(sessionStorage.getItem("userData"));

    axios
      .post(`order/create-checkout-session`, cartData, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        console.log(response);
        localStorage.setItem("sessionId", response.data.sessionId);
        return response.data;
      })
      .then((session) => {
        console.log();
        axios
          .post(`order/add`, cartData, {
            headers: {
              Authorization: "Bearer " + token,
            },
            params: {
              sessionId: session.sessionId,
            },
          })
          .then((response) => {
            console.log(response.data);
          })
          .catch((error) => {
            console.log(error);
          });

        return stripe.redirectToCheckout({
          sessionId: session.sessionId,
        });
      });
  };

  return (
    <div>
      <br></br>
      <br></br>
      <h3 className="text-center">You will be redirected to payment page</h3>
      <br></br>
      <div className="text-center alert alert-primary" role="alert">
        While making payment use card number 4242 4242 4242 4242 and enter
        random cvv(3 digit)
      </div>

      <button
        className="checkout_button"
        id="proceed-to-checkout"
        onClick={goToCheckOut}
      >
        Make payment
      </button>
    </div>
  );
};

export default Checkout;
