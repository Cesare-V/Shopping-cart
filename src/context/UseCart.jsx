import { useContext } from 'react';
import { CartContext } from './CartContext';

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("UseCart deve essere utilizzato all'interno di CartProvider");
  }
  return context;
}