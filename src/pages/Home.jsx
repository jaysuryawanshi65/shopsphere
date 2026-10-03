import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Truck, RotateCcw, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { getProducts } from "../services/api";
import ProductCard from "../components/ProductCard";
import LoadingGrid from "../components/LoadingGrid";

export default function Home() {
  const [products,setProducts]=useState([]); const [loading,setLoading]=useState(true);
  useEffect(()=>{getProducts().then(setProducts).finally(()=>setLoading(false))},[]);
  const featured = products.filter(p=>p.rating>=4.7).slice(0,8);
  return <div>
    <section className="container-app py-10 md:py-16"><div className="overflow-hidden rounded-3xl bg-gradient-to-br from-brand-700 via-indigo-600 to-slate-900 px-6 py-12 text-white shadow-soft md:px-12 md:py-16">
      <div className="max-w-2xl animate-in"><span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-bold"><Sparkles size={14}/> New season collection</span><h1 className="mt-5 text-4xl font-black leading-tight md:text-6xl">Everything you need. <span className="text-indigo-200">One smart store.</span></h1><p className="mt-5 max-w-xl text-base leading-7 text-indigo-100 md:text-lg">Discover curated products with a fast, responsive shopping experience designed for modern web users.</p><div className="mt-8 flex flex-wrap gap-3"><Link to="/products" className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-bold text-brand-700 hover:bg-indigo-50">Shop collection <ArrowRight size={18}/></Link><a href="#featured" className="inline-flex items-center rounded-xl border border-white/20 px-5 py-3 font-bold hover:bg-white/10">Explore featured</a></div></div>
    </div></section>
    <section className="container-app grid gap-4 py-4 sm:grid-cols-3"><Feature icon={<Truck/>} title="Fast delivery" text="Reliable delivery tracking and clear order states."/><Feature icon={<ShieldCheck/>} title="Secure checkout" text="Validated forms with a frictionless checkout flow."/><Feature icon={<RotateCcw/>} title="Easy returns" text="Simple, transparent shopping experience." /></section>
    <section id="featured" className="container-app py-14"><div className="mb-7 flex items-end justify-between"><div><p className="text-sm font-bold uppercase tracking-wider text-brand-600">Handpicked</p><h2 className="mt-1 text-3xl font-black">Featured products</h2></div><Link to="/products" className="text-sm font-bold text-brand-600">View all →</Link></div>{loading?<LoadingGrid/>:<div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">{featured.map(p=><ProductCard key={p.id} product={p}/>)}</div>}</section>
  </div>;
}
function Feature({icon,title,text}) { return <div className="card flex gap-4 p-5"><div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600 dark:bg-brand-950">{icon}</div><div><h3 className="font-bold">{title}</h3><p className="mt-1 text-sm leading-5 text-slate-500">{text}</p></div></div>; }