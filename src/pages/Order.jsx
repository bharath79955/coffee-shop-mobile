import React, { useState } from "react";
import { ArrowLeft, Pencil, ClipboardList, Plus, Minus, ChevronRight, ChevronDown, Wallet, BadgePercent } from "lucide-react";

const coffeeImage =
  "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=300&q=80";

export default function Order({ onBack, onNavigate, cart, setCart }) {
  const [orderType, setOrderType] = useState("Deliver");
  const [quantity, setQuantity] = useState(1);
  const [payment, setPayment] = useState("Cash/Wallet");
  const [note, setNote] = useState("");

  const price = 4.53;
  const deliveryFee = 1;
  const total = price * quantity + deliveryFee;

  return (
    <div className="flex h-full min-h-0 flex-col bg-[#f8f8f8] text-[#303030]">
      {/* Header */}
      <header className="shrink-0 px-7 pt-8">
        <div className="flex h-10 items-center justify-between">
          <button onClick={onBack} aria-label="Go back">
            <ArrowLeft size={27} strokeWidth={1.8} />
          </button>
          <h1 className="mr-8 text-[27px] font-bold">Order</h1>
          <div className="w-7" />
        </div>
      </header>

      <main className="min-h-0 flex-1 overflow-y-auto px-7 pb-5">
        {/* Deliver / Pick Up */}
        <div className="mt-12 flex rounded-[27px] bg-[#ededed] p-[6px]">
          {["Deliver", "Pick Up"].map((type) => (
            <button
              key={type}
              onClick={() => setOrderType(type)}
              className={`h-[64px] flex-1 rounded-[18px] text-[24px] ${
                orderType === type
                  ? "bg-[#c68150] font-bold text-white"
                  : "text-[#303030]"
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Address */}
        <section className="mt-11">
          <h2 className="text-[25px] font-bold">Delivery Address</h2>
          <h3 className="mt-8 text-[24px] font-bold">
            Jl. Kpg Sutoyo
          </h3>
          <p className="mt-2 text-[19px] leading-7 text-[#a3a3a3]">
            Kpg. Sutoyo No. 620, Bilzen, Tanjungbalai.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <button className="flex items-center gap-2 rounded-full border border-[#999] px-4 py-2 text-[17px]">
              <Pencil size={20} />
              Edit Address
            </button>
            <button
              onClick={() => {
                const value = window.prompt("Add a note for your order", note);
                if (value !== null) setNote(value);
              }}
              className="flex items-center gap-2 rounded-full border border-[#999] px-4 py-2 text-[17px]"
            >
              <ClipboardList size={20} />
              Add Note
            </button>
          </div>
        </section>

        <div className="my-7 border-t border-[#dedede]" />

        {/* Coffee item */}
        <section className="flex items-center gap-4 pb-2">
          <img
            src={coffeeImage}
            alt="Caffe Mocha"
            className="h-[100px] w-[100px] shrink-0 rounded-[17px] object-cover"
          />

          <div className="min-w-0 flex-1">
            <h2 className="text-[25px] font-bold">Caffe Mocha</h2>
            <p className="mt-1 text-[19px] text-[#a3a3a3]">Deep Foam</p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              aria-label="Decrease quantity"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-sm"
            >
              <Minus size={21} />
            </button>
            <span className="min-w-5 text-center text-[22px] font-bold">
              {quantity}
            </span>
            <button
              onClick={() => setQuantity((q) => q + 1)}
              aria-label="Increase quantity"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-sm"
            >
              <Plus size={21} />
            </button>
          </div>
        </section>

        {/* Discount */}
        <button className="mt-8 flex w-full items-center gap-4 rounded-[26px] border border-[#e5e5e5] bg-white px-7 py-7 text-left">
          <BadgePercent className="text-[#c68150]" size={31} />
          <span className="flex-1 text-[22px] font-bold">
            1 Discount is Applies
          </span>
          <ChevronRight size={27} />
        </button>

        {/* Payment summary */}
        <section className="mt-11">
          <h2 className="text-[25px] font-bold">Payment Summary</h2>

          <div className="mt-8 flex justify-between text-[22px]">
            <span>Price</span>
            <span className="font-bold">
              $ {(price * quantity).toFixed(2)}
            </span>
          </div>

          <div className="mt-5 flex justify-between text-[22px]">
            <span>Delivery Fee</span>
            <span className="font-bold">
              <span className="mr-3 text-[#777] line-through">$ 2.0</span>
              $ 1.0
            </span>
          </div>
        </section>
      </main>

      {/* Fixed payment footer */}
      <footer className="shrink-0 rounded-t-[30px] bg-white px-7 pb-7 pt-6">
        <button
          onClick={() =>
            setPayment((p) =>
              p === "Cash/Wallet" ? "Credit/Debit Card" : "Cash/Wallet"
            )
          }
          className="flex w-full items-center gap-4 pb-5 text-left"
        >
          <Wallet className="text-[#c68150]" size={32} />
          <div className="flex-1">
            <h3 className="text-[23px] font-bold">{payment}</h3>
            <p className="mt-1 text-[19px] font-bold text-[#c68150]">
              $ {total.toFixed(2)}
            </p>
          </div>
          <ChevronDown size={26} />
        </button>

        <button
          onClick={() =>
            onNavigate?.("tracking", {
              total,
              quantity,
              address: "Jl. Kpg Sutoyo",
            })
          }
          className="h-[102px] w-full rounded-[27px] bg-[#c68150] text-[28px] font-bold text-white"
        >
          Order
        </button>

        <div className="mx-auto mt-7 h-[9px] w-[245px] rounded-full bg-[#222]" />
      </footer>
    </div>
  );
}