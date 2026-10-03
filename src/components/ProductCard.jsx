import { Link } from "react-router-dom";
import { Heart, ShoppingCart, Star } from "lucide-react";
import { useStore } from "../context/StoreContext";

export default function ProductCard({ product }) {
  const { addToCart, toggleWishlist, isWishlisted } = useStore();
  const discount = Math.round(product.discountPercentage || 0);
  return <article className="card group overflow-hidden transition hover:-translate-y-1 hover:shadow-soft">
    <div className="relative aspect-square overflow-hidden bg-slate-100 dark:bg-slate-800">
      <Link to={`/product/${product.id}`}><img src={product.thumbnail} alt={product.title} className="h-full w-full object-contain p-5 transition duration-500 group-hover:scale-105" /></Link>
      {discount > 0 && <span className="absolute left-3 top-3 rounded-full bg-emerald-500 px-2.5 py-1 text-xs font-bold text-white">{discount}% OFF</span>}
      <button aria-label="Wishlist" onClick={()=>toggleWishlist(product)} className={`absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-white/90 shadow ${isWishlisted(product.id) ? "text-rose-500" : "text-slate-500"}`}><Heart size={17} fill={isWishlisted(product.id) ? "currentColor" : "none"}/></button>
    </div>
    <div className="p-4">
      <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-brand-600">{product.category}</p>
      <Link to={`/product/${product.id}`} className="line-clamp-2 min-h-10 font-bold hover:text-brand-600">{product.title}</Link>
      <div className="mt-2 flex items-center gap-1 text-xs text-amber-500"><Star size={14} fill="currentColor"/><span className="font-bold">{product.rating?.toFixed(1)}</span><span className="text-slate-400">rating</span></div>
      <div className="mt-3 flex items-center justify-between gap-2"><div><span className="text-lg font-black">${product.price.toFixed(2)}</span>{discount>0&&<span className="ml-2 text-xs text-slate-400 line-through">${(product.price/(1-discount/100)).toFixed(2)}</span>}</div><button aria-label="Add to cart" onClick={()=>addToCart(product)} className="grid h-10 w-10 place-items-center rounded-xl bg-brand-50 text-brand-600 hover:bg-brand-600 hover:text-white dark:bg-brand-950"><ShoppingCart size={17}/></button></div>
    </div>
  </article>;
}