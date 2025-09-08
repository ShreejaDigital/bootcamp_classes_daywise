import "../styles/Products.css";

export default function PriceSection({ price, discountPercentage = 0 }) {
  const discount = parseFloat(discountPercentage);
  const discountedPrice =
    discount > 0 ? price - (price * discount) / 100 : price;

  if (Math.floor(discount) === 0) {
    return <h2 className="price-text">${price.toFixed(2)}</h2>;
  }

  return (
    <div className="price-section">
      <h2 className="price-text">${discountedPrice.toFixed(2)}</h2>
      <span className="original-price">${price.toFixed(2)}</span>
      <span className="discount-badge">-{discountPercentage}%</span>
    </div>
  );
}
