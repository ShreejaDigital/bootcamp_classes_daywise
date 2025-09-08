import toast from "react-hot-toast";

export function addToCart(product) {
  // Get existing cart from localStorage
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Check if product already exists
  const existingItem = cart.find((item) => item.id === product.id);

  if (existingItem) {
    existingItem.quantity += 1; // Increase quantity
  } else {
    cart.push({ ...product, quantity: 1 }); // Add new product
  }

  // Save back to localStorage
  localStorage.setItem("cart", JSON.stringify(cart));

  // Optional: Trigger custom event for immediate update
  window.dispatchEvent(new Event("cartUpdated"));
  toast.success("Product added to cart!");
}
