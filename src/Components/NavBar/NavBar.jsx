import { Search, Menu, X, MoreVertical, ChevronRight } from "lucide-react";
import Toggle from "./Toggle";
import Language from "./LanguageSelector";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  return (
    <div className="w-full border-b border-gray-200 bg-white">
      <nav className="flex items-center justify-between px-4 md:px-6 h-14">
        {/* Left side */}
        <div className="flex items-center gap-4 md:gap-10">
          {/* Hamburger (mobile ) */}
          <button
            onClick={() => setMenuOpen(true)}
            className="block md:hidden p-2 rounded hover:bg-gray-100"
          >
            <Menu className="w-6 h-6 text-gray-600" />
          </button>

          {/* Logo */}
          <img
            src="/assets/firebaselogo.svg"
            className="h-7 w-auto md:h-8"
            alt="Firebase Logo"
          />

          {/* Nav links (desktop ) */}
          <div className="hidden md:flex items-center gap-8 text-gray-700 text-sm">
            <a href="#">Build</a>
            <a href="#">Run</a>
            <a href="#">Solutions</a>
            <a href="#">Pricing</a>
            <a href="#">More</a>
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3 md:gap-6">
          {/* Search bar (desktop ) */}
          <div className="hidden md:flex items-center gap-2 border border-gray-300 rounded-full px-3 py-1 bg-white">
            <Search className="w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="outline-none text-sm text-gray-500 placeholder-gray-500"
            />
            <span className="text-gray-400 text-xs">/</span>
          </div>

          {/* Search icon (mobile) */}
          <div className="md:hidden ">
            {showSearch ? (
              <div className="flex items-center gap-2 border border-gray-300 rounded-full px-3 py-1 bg-white w-full">
                
                <input
                  type="text"
                  placeholder="Search"
                  className="outline-none text-sm text-gray-500 placeholder-gray-500 flex-1"
                />
                <button onClick={() => setShowSearch(false)}>
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => setShowSearch(true)}
                className="p-2 rounded-full hover:bg-gray-100"
              >
                <Search className="w-5 h-5 text-gray-500" />
              </button>
            )}
            
          </div>

        
          <Toggle />
          <div className="hidden md:block">
          <Language fullName={false} />
          </div>
          {/* Blog & Studio (desktop) */}
          <a
            href="#"
            className="hidden md:block text-blue-600 hover:bg-blue-100 px-2 py-1 rounded text-sm"
          >
            Blog
          </a>
          <a
            href="#"
            className="flex items-center gap-1 text-sm hover:bg-gray-100 px-2 py-1 rounded"
          >
            <img
              src="/assets/firebase_studio.webp"
              alt="Firebase Studio"
              className="h-5 w-5  hidden md:block"
            />
            <span>Studio</span>
          </a>

          {/* Console/Login (desktop only) */}
          <a
            href="#"
            className="hidden md:flex text-blue-600 hover:bg-blue-100 px-2 py-1 rounded text-sm"
          >
            Go to console
          </a>

          {/* Profile (desktop only) */}
          <img
            src="/assets/360_F_1247500272_kJB5cpMOHgbzfXeqg2spytDlTMI6J7zT.webp"
            alt="Profile"
            className=" w-9 h-9 rounded-full object-cover cursor-pointer"
          />
        </div>
      </nav>

      {/* Sidebar Drawer (mobile) */}
<div
  className={`fixed top-0 left-0 h-full w-60 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
    menuOpen ? "translate-x-0" : "-translate-x-full"
  }`}
>
  {/* Top bar with logo + close */}
  <div className="flex items-center justify-between px-4 py-3 border-b border-gray-300">
    {/* Logo */}
     <button
      onClick={() => setMenuOpen(false)}
      className=" rounded hover:bg-gray-100 p-1.75"
    >
      <X className="w-5 h-5 text-gray-600 " />
    </button>
    <img
      src="/assets/firebaselogo.svg"
      alt="Logo"
      className=" h-7 w-auto"
    />

    {/* Close button */}
   
  </div>

  {/* Nav links */}
  <nav className="mt-2 flex flex-col">
    {[
      "Build",
      "Run",
      "Solutions",
      "Pricing",
      "Docs",
      "Community",
      "Support",
      "Blog",
      "Studio",
      "Go to console",
    ].map((item, idx) => (
      <a
        key={idx}
        href="#"
        className="flex items-center justify-between px-6 py-3 border-b border-gray-200 text-gray-500 hover:bg-gray-100 "
      >
       <span
  className={`text-sm ${
    item === "Go to console"
      ? " text-gray-600"
      : ["Blog", "Studio"].includes(item)
      ? " text-gray-600"
      : "text-gray-600"
  }`}
>

          {item}
        </span>
        {["Build", "Run", "Docs", "Community", "Support"].includes(item) && (
          <ChevronRight className="w-4 h-4 text-gray-400" />
        )}
      </a>
    ))}
  </nav>
</div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0  bg-opacity-30 z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </div>
  );
}
