import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import "../styles/Products.css";

export default function RatingStar({ rating }) {
  const roundedRating = Math.floor(rating); // full stars
  const emptyStars = 5 - roundedRating; // empty stars

  const stars = [];

  // Add filled stars
  for (let i = 0; i < roundedRating; i++) {
    stars.push(<AiFillStar key={`filled-${i}`} />);
  }

  // Add empty stars
  for (let i = 0; i < emptyStars; i++) {
    stars.push(<AiOutlineStar key={`empty-${i}`} />);
  }

  return (
    <div className="rating-star">
      {stars}
      <span className="rating-value">{rating}</span>
    </div>
  );
}
