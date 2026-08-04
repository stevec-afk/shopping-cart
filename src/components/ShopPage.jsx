import ProductCard from "./ProductCard";

function ShopPage(props) {
  const { products, onAddToCart } = props;

  return (
    <>
      {products.map((item) => (
        <ProductCard key={item.id} product={item} onAddToCart={onAddToCart} />
      ))}
    </>
  );
}

export default ShopPage;
