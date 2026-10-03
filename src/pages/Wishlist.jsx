import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { useStore } from "../context/StoreContext";
import ProductCard from "../components/ProductCard";

export default function Wishlist(){const {wishlist}=useStore(); return <section className="container-app py-10"><div className="mb-8"><p className="text-sm font-bold uppercase tracking-wider text-brand-600">Saved items</p><h1 className="mt-1 text-4xl font-black">Your wishlist</h1></div>{wishlist.length?<div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">{wishlist.map(p=><ProductCard key={p.id} product={p}/>)}</div>:<div className="card py-20 text-center"><Heart className="mx-auto text-slate-300" size={48}/><h2 className="mt-5 text-xl font-black">Nothing saved yet</h2><p className="mt-2 text-slate-500">Tap the heart on products you want to keep.</p><Link to="/products" className="btn-primary mt-5">Browse products</Link></div>}</section>}