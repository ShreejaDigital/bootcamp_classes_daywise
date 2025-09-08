import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router";
import PriceSection from "./PriceSection";
import RatingStar from "./RatingStar";
import "../styles/Products.css";
import { addToCart } from "../lib/utils";

export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-card-img">
        <Link to={`/product/${product.id}`}>
          <img
            src={product.thumbnail}
            alt={product.title}
            className="product-card-image"
          />
        </Link>
      </div>

      <div className="product-card-info">
        <p className="product-card-category">{product.category}</p>
        <Link to={`/product/${product.id}`} className="product-card-title">
          {product.title}
        </Link>
      </div>

      <div className="product-card-rating">
        <RatingStar rating={product.rating} />
      </div>

      <div className="product-card-bottom">
        {product.discountPercentage && (
          <PriceSection
            discountPercentage={product.discountPercentage}
            price={product.price}
          />
        )}

        <button
          className="product-card-add-btn"
          onClick={() => addToCart(product)}
          title="ADD TO CART"
        >
          <AiOutlineShoppingCart />
        </button>
      </div>
    </div>
  );
}
