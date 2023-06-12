import { useContext } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CategoryBox from "../../Components/CategoryBox";
import ProductCard from "../../Components/ProductCard";
import "./Homepage.css";
import { useProducts } from "../../main";

export default function HomePage() {
  const { productData } = useContext(useProducts);

  // const addProduct = () => {

  // };

  return (
    <>
      <div className="home-carousel">
        <Carousel>
          <div className="home-carousel-layout">
            <img
              src="https://res.cloudinary.com/dbehxf29s/image/upload/v1686486216/gungun3img_pheggp.png"
              alt="Carousel Image 1"
              className="Image-carousel
            "
            />
          </div>
          <div className="home-carousel-layout">
            <img
              src="https://res.cloudinary.com/dbehxf29s/image/upload/v1686486216/gungun2img_wuj6ng.png"
              alt="Carousel Image 2"
              className="Image-carousel
            "
            />
          </div>
          <div className="home-carousel-layout">
            <img
              src="https://res.cloudinary.com/dbehxf29s/image/upload/v1686486347/img1gungun_j5wgfy.png"
              alt="Carousel Image 3"
              className="Image-carousel
            "
            />
          </div>
        </Carousel>
      </div>
      <div className="home-category">
        <CategoryBox categoryName={"Youtube"}/>
        {productData?.reduce((acc, {category})=> acc.find((item)=>item.category === category) ? [...acc] : [...acc,{category}], []).map((items) => {
          const {
            category
          } = items;
          return (
            <CategoryBox key={category} categoryName={category} />
          );
        })}

      </div>
      <div className="home-products">
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
            <ProductCard
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
    </>
  );
}
