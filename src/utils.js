export function formatCurrency(amount) {
  return `$${amount.toFixed(2)}`;
}

export function calculateSubtotal(cartItems) {
  return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
}