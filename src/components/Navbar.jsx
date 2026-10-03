import { Link, NavLink, useNavigate } from "react-router-dom";
import { ShoppingBag, Heart, Sun, Moon, Search, Menu, X } from "lucide-react";
import { useState } from "react";
import { useStore } from "../context/StoreContext";

export default function Navbar() {
  const { cartCount, wishlist, theme, setTheme } = useStore();
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const submit = e => { e.preventDefault(); if (search.trim()) navigate(`/products?search=${encodeURIComponent(search.trim())}`); };

  const links = [["/", "Home"], ["/products", "Shop"], ["/wishlist", "Wishlist"]];
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur dark:border-slate-800 dark:bg-slate-950/90">
      <div className="container-app flex h-16 items-center gap-4">
        <Link to="/" className="flex items-center gap-2 font-black text-xl tracking-tight">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-600 text-white"><ShoppingBag size={19}/></span>
          <span>Shop<span className="text-brand-600">Sphere</span></span>
        </Link>
        <nav className="hidden md:flex items-center gap-1 ml-4">
          {links.map(([to, label]) => <NavLink key={to} to={to} className={({isActive}) => `rounded-lg px-3 py-2 text-sm font-semibold ${isActive ? "bg-brand-50 text-brand-600 dark:bg-brand-950" : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-900"}`}>{label}</NavLink>)}
        </nav>
        <form onSubmit={submit} className="ml-auto hidden sm:flex w-full max-w-xs">
          <div className="relative w-full"><Search size={17} className="absolute left-3 top-3.5 text-slate-400"/><input value={search} onChange={e=>setSearch(e.target.value)} className="input py-2.5 pl-9" placeholder="Search products..." /></div>
        </form>
        <button aria-label="Toggle theme" onClick={()=>setTheme(theme === "dark" ? "light" : "dark")} className="btn-secondary h-10 w-10 p-0">{theme === "dark" ? <Sun size={17}/> : <Moon size={17}/>}</button>
        <Link to="/wishlist" className="relative hidden sm:block btn-secondary h-10 w-10 p-0"><Heart size={17}/>{wishlist.length > 0 && <Badge>{wishlist.length}</Badge>}</Link>
        <Link to="/cart" className="relative btn-primary h-10 w-10 p-0"><ShoppingBag size={17}/>{cartCount > 0 && <Badge>{cartCount}</Badge>}</Link>
        <button className="md:hidden btn-secondary h-10 w-10 p-0" onClick={()=>setOpen(!open)}>{open?<X size={18}/>:<Menu size={18}/>}</button>
      </div>
      {open && <div className="md:hidden border-t border-slate-200 p-3 dark:border-slate-800">
        <form onSubmit={submit} className="mb-2"><input value={search} onChange={e=>setSearch(e.target.value)} className="input" placeholder="Search products..." /></form>
        <div className="grid gap-1">{links.map(([to,label])=><Link onClick={()=>setOpen(false)} key={to} to={to} className="rounded-lg px-3 py-2 font-semibold hover:bg-slate-100 dark:hover:bg-slate-900">{label}</Link>)}</div>
      </div>}
    </header>
  );
}
function Badge({children}) { return <span className="absolute -right-2 -top-2 grid h-5 min-w-5 place-items-center rounded-full bg-rose-500 px-1 text-[10px] font-bold text-white">{children}</span>; }