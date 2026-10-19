import React from "react";
import {
  ArrowLeft,
  ShoppingBag,
  Plus,
  Minus,
  Trash2,
  Coffee,
} from "lucide-react";
import { money } from "../data/products";
import BottomNav from "../components/BottomNav";

export default function Cart({
  cart = [],
  onBack,
  onNavigate,
  onUpdateQuantity,
  onRemoveItem,
}) {
  const cartCount = cart.reduce(
    (total, item) => total + (item.quantity || 0),
    0
  );

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const deliveryFee = subtotal > 0 ? 1.5 : 0;
  const total = subtotal + deliveryFee;

  return (
    <div className="phone-scroll h-full overflow-y-auto bg-[#f8f8f8] pb-24">
      <header className="flex items-center gap-4 px-5 py-5">
        <button
          onClick={onBack}
          aria-label="Go back"
          className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm"
        >
          <ArrowLeft size={20} />
        </button>

        <div className="flex-1">
          <h1 className="text-xl font-bold text-[#302821]">
            My Cart
          </h1>
          <p className="mt-1 text-xs text-[#a19891]">
            {cartCount} items in your bag
          </p>
        </div>

        <ShoppingBag size={23} className="text-[#c67c4e]" />
      </header>

      <main className="px-5">
        {cart.length === 0 ? (
          <div className="flex min-h-[55vh] flex-col items-center justify-center text-center">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#f2e4da]">
              <Coffee size={42} className="text-[#c67c4e]" />
            </div>

            <h2 className="mt-5 text-xl font-bold text-[#302821]">
              Your cart is empty
            </h2>

            <p className="mt-2 max-w-[250px] text-sm leading-6 text-[#96877d]">
              Add your favourite coffee and enjoy a freshly brewed treat.
            </p>

            <button
              onClick={() => onNavigate?.("home")}
              className="mt-6 rounded-2xl bg-[#c67c4e] px-8 py-3.5 font-semibold text-white"
            >
              Explore Coffee
            </button>
          </div>
        ) : (
          <>
            <div className="space-y-4">
              {cart.map((item, index) => (
                <article
                  key={`${item.id}-${item.size || "M"}-${index}`}
                  className="flex gap-3 rounded-2xl bg-white p-3 shadow-sm"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-24 w-24 shrink-0 rounded-xl bg-[#eee7e0] object-cover"
                  />

                  <div className="flex min-w-0 flex-1 flex-col">
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0">
                        <h3 className="truncate font-bold text-[#302821]">
                          {item.name}
                        </h3>
                        <p className="mt-1 text-xs text-[#a19891]">
                          {item.subtitle}
                          {item.size ? ` · ${item.size}` : ""}
                        </p>
                      </div>

                      <button
                        onClick={() => onRemoveItem?.(item)}
                        aria-label={`Remove ${item.name}`}
                        className="shrink-0 text-[#a19891] hover:text-red-500"
                      >
                        <Trash2 size={17} />
                      </button>
                    </div>

                    <div className="mt-auto flex items-center justify-between pt-3">
                      <span className="font-bold text-[#302821]">
                        {money(item.price * item.quantity)}
                      </span>

                      <div className="flex items-center gap-3">
                        <button
                          onClick={() =>
                            onUpdateQuantity?.(
                              item,
                              Math.max(0, item.quantity - 1)
                            )
                          }
                          aria-label="Decrease quantity"
                          className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#f3e6dc] text-[#a66f4c]"
                        >
                          <Minus size={14} />
                        </button>

                        <span className="min-w-3 text-center text-sm font-bold">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() =>
                            onUpdateQuantity?.(
                              item,
                              item.quantity + 1
                            )
                          }
                          aria-label="Increase quantity"
                          className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#c67c4e] text-white"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <section className="mt-6 rounded-2xl bg-white p-4">
              <h2 className="font-bold text-[#302821]">
                Bill Details
              </h2>

              <div className="mt-4 space-y-3 text-sm">
                <div className="flex justify-between text-[#8d8178]">
                  <span>Subtotal</span>
                  <span>{money(subtotal)}</span>
                </div>

                <div className="flex justify-between text-[#8d8178]">
                  <span>Delivery fee</span>
                  <span>{money(deliveryFee)}</span>
                </div>

                <div className="flex justify-between border-t border-dashed border-[#e9dfd6] pt-3 font-bold text-[#302821]">
                  <span>Total</span>
                  <span>{money(total)}</span>
                </div>
              </div>
            </section>

            <button
              onClick={() => onNavigate?.("order")}
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#c67c4e] py-4 font-semibold text-white shadow-lg active:scale-[0.98]"
            >
              Proceed to Checkout
              <ShoppingBag size={18} />
            </button>
          </>
        )}
      </main>

      <BottomNav
        active="cart"
        onNavigate={onNavigate}
        cartCount={cartCount}
      />
    </div>
  );
}