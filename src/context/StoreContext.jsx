import { createContext, useContext, useEffect, useMemo, useState } from "react";

const StoreContext = createContext(null);

const read = (key, fallback) => {
  try { return JSON.parse(localStorage.getItem(key)) ?? fallback; }
  catch { return fallback; }
};

export function StoreProvider({ children }) {
  const [cart, setCart] = useState(() => read("ss_cart", []));
  const [wishlist, setWishlist] = useState(() => read("ss_wishlist", []));
  const [theme, setTheme] = useState(() => localStorage.getItem("ss_theme") || "light");

  useEffect(() => localStorage.setItem("ss_cart", JSON.stringify(cart)), [cart]);
  useEffect(() => localStorage.setItem("ss_wishlist", JSON.stringify(wishlist)), [wishlist]);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("ss_theme", theme);
  }, [theme]);

  const addToCart = (product, qty = 1) => setCart(prev => {
    const found = prev.find(x => x.id === product.id);
    return found
      ? prev.map(x => x.id === product.id ? { ...x, qty: Math.min(x.qty + qty, 10) } : x)
      : [...prev, { ...product, qty }];
  });
  const updateQty = (id, qty) => setCart(prev => prev.map(x => x.id === id ? { ...x, qty } : x).filter(x => x.qty > 0));
  const removeFromCart = id => setCart(prev => prev.filter(x => x.id !== id));
  const clearCart = () => setCart([]);
  const toggleWishlist = product => setWishlist(prev => prev.some(x => x.id === product.id) ? prev.filter(x => x.id !== product.id) : [...prev, product]);
  const isWishlisted = id => wishlist.some(x => x.id === id);

  const value = useMemo(() => ({
    cart, wishlist, theme, setTheme, addToCart, updateQty, removeFromCart, clearCart,
    toggleWishlist, isWishlisted,
    cartCount: cart.reduce((n, x) => n + x.qty, 0),
    subtotal: cart.reduce((n, x) => n + x.price * x.qty, 0)
  }), [cart, wishlist, theme]);

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export const useStore = () => useContext(StoreContext);