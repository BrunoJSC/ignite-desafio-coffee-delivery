import { createContext, ReactNode, useContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

type CartItem = {
  id: number;
  quantity: number;
};

type ShoppingCoffeeProvider = {
  children: ReactNode;
};

interface ShoppingCoffeeCartContext {
  incrementQuantity: (id: number) => void;
  decrementQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  getItemQuantity: (id: number) => number;
  cartQuantity: number;
  cartItem: CartItem[];
}

const CoffeeCartContext = createContext({} as ShoppingCoffeeCartContext);

export function useShoppingCart() {
  return useContext(CoffeeCartContext);
}

export function ShoppingProvider({ children }: ShoppingCoffeeProvider) {
  const [cartItem, setCartItem] = useLocalStorage<CartItem[]>(
    "shopping-cart",
    []
  );

  function getItemQuantity(id: number) {
    return cartItem.find((item) => item.id === id)?.quantity || 0;
  }

  const cartQuantity = cartItem.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  function incrementQuantity(id: number) {
    setCartItem((currentItem) => {
      if (currentItem.find((item) => item.id === id) == null) {
        return [...currentItem, { id, quantity: 1 }];
      } else {
        return currentItem.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function decrementQuantity(id: number) {
    setCartItem((currentItem) => {
      if (currentItem.find((item) => item.id === id)?.quantity === 1) {
        return currentItem.filter((item) => item.id !== id);
      } else {
        return currentItem.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function removeFromCart(id: number) {
    setCartItem((currentItem) => currentItem.filter((item) => item.id !== id));
  }

  return (
    <CoffeeCartContext.Provider
      value={{
        getItemQuantity,
        cartItem,
        decrementQuantity,
        incrementQuantity,
        removeFromCart,
        cartQuantity,
      }}
    >
      {children}
    </CoffeeCartContext.Provider>
  );
}
