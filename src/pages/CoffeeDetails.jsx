import React, { useState } from "react";
import {
  ArrowLeft,
  Star,
  Heart,
  Minus,
  Plus,
  ShoppingBag,
} from "lucide-react";
import { money } from "../data/products";

export default function CoffeeDetails({
  product,
  onBack,
  onAddToCart,
  favorites = [],
  onToggleFavorite,
}) {
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("M");

  if (!product) {
    return (
      <div className="flex h-full items-center justify-center">
        <p>Coffee not found.</p>
        <button onClick={onBack} className="ml-3 text-[#c67c4e]">
          Go back
        </button>
      </div>
    );
  }

  const isFavorite = favorites.some((item) => item.id === product.id);
  const sizePrices = { S: 0, M: 0.5, L: 1 };

  const handleAddToCart = () => {
    onAddToCart?.({
      ...product,
      quantity,
      size,
      price: product.price + sizePrices[size],
    });
  };

  return (
    <div className="phone-scroll h-full overflow-y-auto bg-[#f8f8f8] pb-8">
      <div className="relative px-5 pt-5">
        <button
          onClick={onBack}
          aria-label="Go back"
          className="absolute left-8 top-8 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow"
        >
          <ArrowLeft size={20} />
        </button>

        <button
          onClick={() => onToggleFavorite?.(product)}
          aria-label="Toggle favorite"
          className="absolute right-8 top-8 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow"
        >
          <Heart
            size={20}
            className={isFavorite ? "text-red-500" : "text-[#4b4038]"}
            fill={isFavorite ? "currentColor" : "none"}
          />
        </button>

        <img
          src={product.image}
          alt={product.name}
          className="h-[300px] w-full rounded-[28px] bg-[#e9dfd6] object-cover"
        />

        <div className="absolute bottom-3 left-8 right-8 flex items-center justify-between rounded-2xl bg-black/65 p-4 text-white backdrop-blur-sm">
          <div>
            <h1 className="text-xl font-bold">{product.name}</h1>
            <p className="mt-1 text-xs text-white/70">
              {product.subtitle}
            </p>
            <p className="mt-2 text-xs text-white/70">
              {product.category}
            </p>
          </div>

          <div className="text-right">
            <p className="flex items-center justify-end gap-1 font-bold">
              <Star size={16} fill="#f5c518" className="text-[#f5c518]" />
              {product.rating}
            </p>
            <p className="mt-1 text-xs text-white/60">
              ({product.reviews} reviews)
            </p>
          </div>
        </div>
      </div>

      <main className="px-6 pt-6">
        <section>
          <h2 className="text-lg font-bold text-[#302821]">
            Description
          </h2>
          <p className="mt-3 text-sm leading-6 text-[#8d8178]">
            {product.description}
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-lg font-bold text-[#302821]">
            Size
          </h2>

          <div className="mt-3 grid grid-cols-3 gap-3">
            {["S", "M", "L"].map((item) => (
              <button
                key={item}
                onClick={() => setSize(item)}
                className={`rounded-xl border py-3 text-sm font-semibold ${
                  size === item
                    ? "border-[#c67c4e] bg-[#f5e6dc] text-[#b66d3f]"
                    : "border-[#e8e2dd] bg-white text-[#82766d]"
                }`}
              >
                {item === "S"
                  ? "Small"
                  : item === "M"
                    ? "Medium"
                    : "Large"}
              </button>
            ))}
          </div>
        </section>

        <section className="mt-6 flex items-center justify-between">
          <h2 className="text-lg font-bold text-[#302821]">
            Quantity
          </h2>

          <div className="flex items-center gap-4 rounded-xl bg-white p-2">
            <button
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              aria-label="Decrease quantity"
              className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#f3e6dc] text-[#a66f4c]"
            >
              <Minus size={16} />
            </button>

            <span className="min-w-4 text-center font-bold">
              {quantity}
            </span>

            <button
              onClick={() => setQuantity((q) => Math.min(20, q + 1))}
              aria-label="Increase quantity"
              className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#c67c4e] text-white"
            >
              <Plus size={16} />
            </button>
          </div>
        </section>

        <div className="mt-8 flex items-center gap-4">
          <div className="flex-1">
            <p className="text-xs text-[#a19891]">Total price</p>
            <p className="mt-1 text-2xl font-bold text-[#302821]">
              {money((product.price + sizePrices[size]) * quantity)}
            </p>
          </div>

          <button
            onClick={handleAddToCart}
            className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-[#c67c4e] py-4 font-semibold text-white shadow-lg transition active:scale-95"
          >
            <ShoppingBag size={19} />
            Add to Cart
          </button>
        </div>
      </main>
    </div>
  );
}