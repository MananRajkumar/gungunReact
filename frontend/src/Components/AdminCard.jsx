import { Link } from "react-router-dom";
import "./Productcard.css";

export default function Admincard(props) {

  const { _id, name, category, description1, description2, manufactureYear, price, edition, numberOfPages, language } = props;

  const deleteHandler = async () => {
    const res = await fetch(`/api/admin/products/${_id}/delete`, { method: "DELETE" });
    console.log(await res.json())
}

  return (
    <div className="productcard">
      <Link to="#">
      <div className="product-card-img">
        <img src="https://picsum.photos/200/300" alt=".." />
        <p>₹ {price}</p>
      </div></Link>
      <div className="product-card-desc">
      <h2>{name}</h2>
      <p className="product-cat">{category}</p>
      <p>{manufactureYear}</p>
      <button style={{backgroundColor: "white", border: "1px solid red", color: "red", width: "80%", marginBottom: "10px"}} onClick={deleteHandler}>Delete Product</button>
      <button style={{backgroundColor: "red", border: "1px solid #666666", color: "white", width: "80%"}}>Edit Product</button>
      </div>
    </div>
  );
}