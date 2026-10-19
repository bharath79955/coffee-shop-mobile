import React from "react";
import {
  Home,
  Heart,
  ShoppingBag,
  ClipboardList,
} from "lucide-react";

export default function BottomNav({
  active = "home",
  onNavigate,
  cartCount = 0,
}) {
  const items = [
    { id: "home", label: "Home", Icon: Home },
    { id: "favorites", label: "Favorites", Icon: Heart },
    { id: "cart", label: "Cart", Icon: ShoppingBag },
    { id: "orders", label: "Orders", Icon: ClipboardList },
  ];

  return (
    <nav className="absolute bottom-0 left-0 right-0 z-20 border-t border-[#eee8e2] bg-white px-3 pb-5 pt-3">
      <div className="flex items-center justify-around">
        {items.map(({ id, label, Icon }) => (
          <button
            key={id}
            onClick={() => onNavigate?.(id)}
            aria-label={label}
            className={`relative flex min-w-14 flex-col items-center gap-1 ${
              active === id ? "text-[#c67c4e]" : "text-[#aaa19a]"
            }`}
          >
            <span className="relative">
              <Icon size={22} strokeWidth={active === id ? 2.5 : 1.8} />

              {id === "cart" && cartCount > 0 && (
                <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-red-500 px-1 text-[9px] font-bold text-white">
                  {cartCount}
                </span>
              )}
            </span>

            <span className="text-[10px] font-medium">{label}</span>

            {active === id && (
              <span className="absolute -bottom-2 h-1 w-5 rounded-full bg-[#c67c4e]" />
            )}
          </button>
        ))}
      </div>
    </nav>
  );
}