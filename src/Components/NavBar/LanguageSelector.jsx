import { useState, useRef, useEffect } from "react";
import { Globe, ChevronDown } from "lucide-react";

export default function LanguageMenu() {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState("English");
  const menuRef = useRef(null);

  useEffect(() => {
    const onClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  const changeLang = (code) => {
    setLang(code);
    setOpen(false);
  };

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 px-2.5 py-1 rounded hover:bg-gray-100 text-gray-500 border border-gray-300"
      >
        <Globe className="w-4 h-4" / >
        <span className="text-sm font-medium">{lang}</span>
        <ChevronDown className="w-3 h-4" fill />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-32 bg-white text-gray-500 border border-gray-200 rounded shadow">
          {[
            { code: "English", label: "English" },
            { code: "France", label: "Français" },
            { code: "Deutsch", label: "Deutsch" },
            { code: "Japan", label: "日本語" },
          ].map((item) => (
            <button
              key={item.code}
              className="block w-full text-left px-3 py-2 text-sm hover:bg-gray-100"
              onClick={() => changeLang(item.code)}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
