export interface CartItem {
  id: number | string;
  title: string;
  image: string;
  price: number;
  quantity: number;
}

export interface DefaultState {
  cartItems: CartItem[];
  totalQuantity: number;
  totalPrice: number;
}
