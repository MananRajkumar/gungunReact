import { Link } from "react-router-dom";
import "./Productcard.css";

export default function Productcard(props) {

  const setCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(props);
    localStorage.setItem("cart", JSON.stringify(cart));
  }
  

  const { _id, name, category, description1, description2, manufactureYear, price, edition, numberOfPages, language } = props;

  return (
    <div className="productcard">
      <Link to={`/product/${_id}`}>
      <div className="product-card-img">
        <img src="https://picsum.photos/200/300" alt=".." />
        <p>₹ {price}</p>
      </div></Link>
      <div className="product-card-desc">
      <h2>{name}</h2>
      <p className="product-cat">{category}</p>
      <p>{manufactureYear}</p>
      <button onClick={setCart}>Add To Cart</button>
      </div>
    </div>
  );
}
