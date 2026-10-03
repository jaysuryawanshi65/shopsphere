import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { SlidersHorizontal, X } from "lucide-react";
import { getProducts } from "../services/api";
import ProductCard from "../components/ProductCard";
import LoadingGrid from "../components/LoadingGrid";

export default function Products() {
  const [params,setParams]=useSearchParams(); const [products,setProducts]=useState([]); const [loading,setLoading]=useState(true);
  const [category,setCategory]=useState("all"); const [sort,setSort]=useState("featured"); const [maxPrice,setMaxPrice]=useState(1500); const [mobileFilters,setMobileFilters]=useState(false);
  const search=params.get("search")||"";
  useEffect(()=>{getProducts().then(setProducts).catch(()=>{}).finally(()=>setLoading(false))},[]);
  const categories=useMemo(()=>["all",...new Set(products.map(p=>p.category))],[products]);
  const filtered=useMemo(()=>{
    let list=products.filter(p=>(!search||`${p.title} ${p.brand} ${p.category}`.toLowerCase().includes(search.toLowerCase()))&&(category==="all"||p.category===category)&&p.price<=maxPrice);
    if(sort==="price-low") list.sort((a,b)=>a.price-b.price); if(sort==="price-high") list.sort((a,b)=>b.price-a.price); if(sort==="rating") list.sort((a,b)=>b.rating-a.rating); if(sort==="name") list.sort((a,b)=>a.title.localeCompare(b.title)); return list;
  },[products,search,category,maxPrice,sort]);
  const clear=()=>{setCategory("all");setSort("featured");setMaxPrice(1500);setParams({})};
  return <section className="container-app py-10"><div className="mb-8"><p className="text-sm font-bold uppercase tracking-wider text-brand-600">Catalog</p><h1 className="mt-1 text-4xl font-black">Shop all products</h1><p className="mt-2 text-slate-500">{search?`Results for “${search}”`:"Browse our complete collection."}</p></div>
    <button onClick={()=>setMobileFilters(true)} className="btn-secondary mb-4 md:hidden"><SlidersHorizontal size={17}/> Filters</button>
    <div className="grid gap-8 md:grid-cols-[230px_1fr]">
      <aside className={`card fixed inset-y-0 left-0 z-50 w-80 rounded-none p-5 md:static md:block md:w-auto md:rounded-2xl ${mobileFilters?"block":"hidden"}`}>
        <div className="flex items-center justify-between md:hidden"><b>Filters</b><button onClick={()=>setMobileFilters(false)}><X/></button></div>
        <div className="mt-4 md:mt-0"><h3 className="font-bold">Category</h3><div className="mt-3 grid gap-1">{categories.map(c=><button key={c} onClick={()=>{setCategory(c);setMobileFilters(false)}} className={`rounded-lg px-3 py-2 text-left text-sm capitalize ${category===c?"bg-brand-50 font-bold text-brand-600 dark:bg-brand-950":"text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"}`}>{c}</button>)}</div></div>
        <div className="mt-7"><div className="flex justify-between"><h3 className="font-bold">Max price</h3><span className="text-sm text-slate-500">${maxPrice}</span></div><input type="range" min="10" max="1500" step="10" value={maxPrice} onChange={e=>setMaxPrice(+e.target.value)} className="mt-4 w-full"/></div>
        <button onClick={clear} className="mt-7 text-sm font-bold text-brand-600">Clear filters</button>
      </aside>
      <div><div className="mb-5 flex flex-wrap items-center justify-between gap-3"><p className="text-sm text-slate-500"><b className="text-slate-900 dark:text-white">{filtered.length}</b> products</p><select value={sort} onChange={e=>setSort(e.target.value)} className="input w-auto py-2.5"><option value="featured">Featured</option><option value="rating">Top rated</option><option value="price-low">Price: low to high</option><option value="price-high">Price: high to low</option><option value="name">Name A–Z</option></select></div>{loading?<LoadingGrid/>:filtered.length?<div className="grid grid-cols-2 gap-4 lg:grid-cols-3">{filtered.map(p=><ProductCard key={p.id} product={p}/>)}</div>:<Empty clear={clear}/>}</div>
    </div>
  </section>;
}
function Empty({clear}){return <div className="card py-20 text-center"><h2 className="text-xl font-black">No products found</h2><p className="mt-2 text-slate-500">Try changing your search or filters.</p><button onClick={clear} className="btn-primary mt-5">Reset filters</button></div>}