import ViewProductButton from "./button";

// write product card here
const ProductCard = () => {
  const productImage =
    "https://petapixel.com/assets/uploads/2025/01/lg-ultrafine-6k-thunderbolt-5-featured-v2-1536x806.jpg";
  const productName = "Apple Monitors";
  const price = "$899";

  return (
    <>
      <div className="cardStyle">
        <img src={productImage} alt="Product" className="image" />
        <h2 className="title">{productName}</h2>
        <p className="price">{price}</p>
        <ViewProductButton />
      </div>
    </>
  );
};

export default ProductCard;
