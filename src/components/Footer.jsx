import { Link } from "react-router-dom";
export default function Footer() {
  return <footer className="mt-20 border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
    <div className="container-app grid gap-8 py-12 sm:grid-cols-3">
      <div><div className="font-black text-xl">Shop<span className="text-brand-600">Sphere</span></div><p className="mt-3 max-w-sm text-sm leading-6 text-slate-500">A production-style e-commerce frontend built with React, REST APIs and modern responsive UI patterns.</p></div>
      <div><h3 className="font-bold">Explore</h3><div className="mt-3 grid gap-2 text-sm text-slate-500"><Link to="/products">All products</Link><Link to="/wishlist">Wishlist</Link><Link to="/cart">Cart</Link></div></div>
      <div><h3 className="font-bold">Project</h3><p className="mt-3 text-sm leading-6 text-slate-500">Frontend portfolio project demonstrating component architecture, state management, API integration and UX states.</p></div>
    </div>
    <div className="border-t border-slate-200 py-5 text-center text-xs text-slate-500 dark:border-slate-800">© 2026 ShopSphere. Built for frontend portfolio demonstration.</div>
  </footer>;
}