import { useContext } from "react";
import "./Cartpage.css";
import CartCard from "../../Components/CartBox";
import { useCart } from "../../main";
import { useNavigate } from "react-router";


export default function CartPage() {
  const { cart } = useContext(useCart);
  const navigate = useNavigate();

  const wayToCheckout = () => {
    navigate("/address")
  }

  const totalPrice = cart.reduce((acc,{price})=>+acc + +price, 0)


  return (
    <>
      <div className="cartpage">
      <div className="left-cart-area">
          <h1>Your Cart</h1>
          <p>
            TOTAL [{(cart?.length ?? 0)}] <b>₹{totalPrice}</b>
          </p>
          {(cart?.length ? (
            cart?.map(
              ({ _id, name, category, description1, description2, manufactureYear, price, edition, numberOfPages, language }) => (
                <CartCard key={_id}
                _id={_id}
                name={name}
                category={category}
                description1={description1}
                description2={description2}
                price={price}
                edition={edition}
                manufactureYear={manufactureYear}
                numberOfPages={numberOfPages}
                language={language}/>
              )
            )
          ) : (
            "Your cart is Empty"
          ))}
        </div>
        <div className="Right-cart-area">
        <button className="btn btn-primary" onClick={wayToCheckout}>
            PROCEED TO CHECKOUT
          </button>
          <h1>Your Cart</h1>
          <div className="sec2-cart-right">
            <p>Delivery</p>
            <p>FREE</p>
          </div>
          <hr />
          <div className="sec3-cart-right">
            <div>
              <p>
                <b>Total : </b>
              </p>
              <p>[Inclusive of all taxes]</p>
            </div>
            <p>₹{totalPrice}</p>
          </div>
          <ul>{cart?.map(({name, price, _id})=><div key={_id} className="sec1-cart-right"><p>{name}</p>
            <p>₹{price}</p></div>)}</ul>
          <hr />
          <div className="payment-logos">
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/ios-filled/100/visa.png"
              alt="visa"
            />
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/ios-filled/100/mastercard-logo.png"
              alt="mastercard-logo"
            />
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/ios-filled/100/rupay.png"
              alt="rupay"
            />
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/ios-filled/100/banknotes.png"
              alt="banknotes"
            />
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/ios-filled/100/bhim-upi.png"
              alt="bhim-upi"
            />
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/ios-filled/100/bank-cards--v1.png"
              alt="bank-cards--v1"
            />
          </div>
        </div>
      </div>
      {/* <AlertBox alertMessage={btnClicked?.message} clicked={btnClicked?.clicked}/> */}
    </>
  );
}
