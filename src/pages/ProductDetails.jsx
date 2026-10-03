import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Check, Heart, Minus, Plus, ShoppingCart, Star, Truck } from "lucide-react";
import { getProduct } from "../services/api";
import { useStore } from "../context/StoreContext";

export default function ProductDetails() {
  const {id}=useParams(); const [p,setP]=useState(null); const [loading,setLoading]=useState(true); const [qty,setQty]=useState(1);
  const {addToCart,toggleWishlist,isWishlisted}=useStore();
  useEffect(()=>{getProduct(id).then(setP).finally(()=>setLoading(false))},[id]);
  if(loading)return <div className="container-app py-20"><div className="animate-pulse grid gap-8 md:grid-cols-2"><div className="aspect-square rounded-3xl bg-slate-200 dark:bg-slate-800"/><div className="space-y-5"><div className="h-8 rounded bg-slate-200 dark:bg-slate-800"/><div className="h-40 rounded bg-slate-200 dark:bg-slate-800"/></div></div></div>;
  if(!p)return <div className="container-app py-20 text-center">Product not found.</div>;
  return <section className="container-app py-10"><Link to="/products" className="mb-7 inline-flex items-center gap-2 text-sm font-bold text-slate-500"><ArrowLeft size={16}/> Back to shop</Link><div className="grid gap-10 md:grid-cols-2">
    <div className="card grid min-h-[420px] place-items-center overflow-hidden bg-slate-100 dark:bg-slate-800"><img src={p.images?.[0]||p.thumbnail} alt={p.title} className="max-h-[520px] w-full object-contain p-8"/></div>
    <div className="animate-in"><p className="font-bold uppercase tracking-wider text-brand-600">{p.category}</p><h1 className="mt-2 text-4xl font-black">{p.title}</h1><div className="mt-4 flex items-center gap-2"><span className="flex items-center gap-1 text-amber-500"><Star size={17} fill="currentColor"/>{p.rating.toFixed(1)}</span><span className="text-slate-400">• {p.reviews?.length||24} reviews</span></div><p className="mt-6 text-3xl font-black">${p.price.toFixed(2)}</p><p className="mt-5 leading-7 text-slate-500">{p.description}</p><div className="mt-6 flex items-center gap-3"><div className="flex items-center rounded-xl border border-slate-200 dark:border-slate-700"><button onClick={()=>setQty(Math.max(1,qty-1))} className="p-3"><Minus size={16}/></button><span className="w-10 text-center font-bold">{qty}</span><button onClick={()=>setQty(Math.min(10,qty+1))} className="p-3"><Plus size={16}/></button></div><button onClick={()=>addToCart(p,qty)} className="btn-primary flex-1"><ShoppingCart size={18}/> Add to cart</button><button onClick={()=>toggleWishlist(p)} className={`btn-secondary h-11 w-11 p-0 ${isWishlisted(p.id)?"text-rose-500":""}`}><Heart fill={isWishlisted(p.id)?"currentColor":"none"} size={18}/></button></div><div className="mt-7 grid gap-3 text-sm text-slate-500"><p className="flex gap-2"><Check className="text-emerald-500" size={18}/> In stock: {p.stock} units</p><p className="flex gap-2"><Truck className="text-brand-500" size={18}/> Free delivery on eligible orders</p></div></div>
  </div></section>;
}