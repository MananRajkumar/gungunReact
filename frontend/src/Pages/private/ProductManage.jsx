import { useContext, useState } from "react";
import "./ProductManage.css";
import { useProducts } from "../../main";
import Admincard from "../../Components/AdminCard";

export default function ProductManage() {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    description1: "",
    description2: "",
    manufactureYear: "",
    edition: "",
    numberOfPages: "",
    language: "",
  });

  const { productData } = useContext(useProducts);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(formData);
  };

  const handleSubmit = async () => {
    try {
      console.log(formData);
      const res = await fetch("http://localhost:3000/api/admin/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData })
      });
      console.log(await res.json());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="login-sec-2">
        <h1>Add Product</h1>
        <label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
          />
        </label>

        <label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="Category"
          />
        </label>

        <label>
          <input
            type="text"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Price"
          />
        </label>

        <label>
          <textarea
            name="description1"
            value={formData.description1}
            onChange={handleChange}
            placeholder="Description 1"
          ></textarea>
        </label>

        <label>
          <textarea
            name="description2"
            value={formData.description2}
            onChange={handleChange}
            placeholder="Description 2"
          ></textarea>
        </label>

        <label>
          <input
            type="text"
            name="manufactureYear"
            value={formData.manufactureYear}
            onChange={handleChange}
            placeholder="Manufacturing year"
          />
        </label>

        <label>
          <input
            type="text"
            name="edition"
            value={formData.edition}
            onChange={handleChange}
            placeholder="Edition"
          />
        </label>

        <label>
          <input
            type="text"
            name="numberOfPages"
            value={formData.numberOfPages}
            onChange={handleChange}
            placeholder="Number of pages"
          />
        </label>

        <label>
          <input
            type="text"
            name="language"
            value={formData.language}
            onChange={handleChange}
            placeholder="Language"
          />
        </label>

        <button onClick={handleSubmit}>Submit</button>
      </div>
      <div className="product-display">
        {productData?.map((items) => {
          const {
            _id,
            name,
            category,
            description1,
            description2,
            manufactureYear,
            price,
            edition,
            numberOfPages,
            language,
          } = items;
          return (
            <Admincard
              key={_id}
              _id={_id}
              name={name}
              category={category}
              description1={description1}
              description2={description2}
              price={price}
              edition={edition}
              manufactureYear={manufactureYear}
              numberOfPages={numberOfPages}
              language={language}
            />
          );
        })}
      </div>
    </div>
  );
}
