import React from "react";
import {
  ArrowLeft,
  Package,
  Coffee,
  Clock,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";
import { money } from "../data/products";
import BottomNav from "../components/BottomNav";

export default function Orders({
  orders = [],
  onBack,
  onNavigate,
  onOrderClick,
  cart = [],
}) {
  const cartCount = cart.reduce(
    (total, item) => total + (item.quantity || 0),
    0
  );

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

        <div>
          <h1 className="text-xl font-bold text-[#302821]">
            My Orders
          </h1>
          <p className="mt-1 text-xs text-[#a19891]">
            Your coffee order history
          </p>
        </div>
      </header>

      <main className="px-5">
        {orders.length === 0 ? (
          <div className="flex min-h-[55vh] flex-col items-center justify-center text-center">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#f2e4da]">
              <Package size={42} className="text-[#c67c4e]" />
            </div>

            <h2 className="mt-5 text-xl font-bold text-[#302821]">
              No orders yet
            </h2>

            <p className="mt-2 max-w-[250px] text-sm leading-6 text-[#96877d]">
              Your coffee orders will appear here once you place your first order.
            </p>

            <button
              onClick={() => onNavigate?.("home")}
              className="mt-6 rounded-2xl bg-[#c67c4e] px-8 py-3.5 font-semibold text-white"
            >
              Order Coffee
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {orders.map((order, index) => {
              const orderItems = order.items || [];
              const itemCount = orderItems.reduce(
                (sum, item) => sum + (item.quantity || 0),
                0
              );

              return (
                <button
                  key={order.id || order.createdAt || index}
                  onClick={() => onOrderClick?.(order)}
                  className="w-full rounded-2xl bg-white p-4 text-left shadow-sm transition active:scale-[0.99]"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#f3e6dc] text-[#b66d3f]">
                        <Coffee size={22} />
                      </div>

                      <div>
                        <h3 className="font-bold text-[#302821]">
                          Order #{order.id || `CF${1024 + index}`}
                        </h3>
                        <p className="mt-1 text-xs text-[#a19891]">
                          {itemCount} items
                        </p>
                      </div>
                    </div>

                    <ChevronRight
                      size={19}
                      className="text-[#a19891]"
                    />
                  </div>

                  <div className="my-4 border-t border-dashed border-[#e9dfd6]" />

                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-xs text-[#a19891]">
                        Total amount
                      </p>
                      <p className="mt-1 font-bold text-[#302821]">
                        {money(order.total || 0)}
                      </p>
                    </div>

                    <div className="flex items-center gap-1.5 rounded-full bg-green-50 px-3 py-2 text-xs font-semibold text-green-700">
                      {order.status === "Delivered" ? (
                        <CheckCircle2 size={14} />
                      ) : (
                        <Clock size={14} />
                      )}
                      {order.status || "Order placed"}
                    </div>
                  </div>

                  {order.createdAt && (
                    <p className="mt-3 text-xs text-[#a19891]">
                      {new Date(order.createdAt).toLocaleString()}
                    </p>
                  )}
                </button>
              );
            })}
          </div>
        )}
      </main>

      <BottomNav
        active="orders"
        onNavigate={onNavigate}
        cartCount={cartCount}
      />
    </div>
  );
}