import React, { useMemo, useState } from "react";
import {
  Search,
  SlidersHorizontal,
  Star,
  Plus,
  Heart,
  X,
  Check,
  ArrowUpDown,
} from "lucide-react";
import { products, categories, money } from "../data/products";
import BottomNav from "../components/BottomNav";

export default function Home({
  onProductClick,
  onNavigate,
  favorites = [],
  onToggleFavorite,
  cart = [],
}) {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All Coffee");
  const [filterOpen, setFilterOpen] = useState(false);
  const [draftCategory, setDraftCategory] = useState("All Coffee");
  const [sortBy, setSortBy] = useState("default");
  const [draftSort, setDraftSort] = useState("default");
  const [minRating, setMinRating] = useState("all");
  const [draftRating, setDraftRating] = useState("all");

  const filteredProducts = useMemo(() => {
    let result = products.filter((product) => {
      const matchesCategory =
        activeCategory === "All Coffee" ||
        product.category === activeCategory;

      const matchesSearch = `${product.name} ${product.subtitle || ""}`
        .toLowerCase()
        .includes(search.toLowerCase().trim());

      const matchesRating =
        minRating === "all" ||
        Number(product.rating || 0) >= Number(minRating);

      return matchesCategory && matchesSearch && matchesRating;
    });

    if (sortBy === "price-low") {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      result = [...result].sort((a, b) => b.price - a.price);
    } else if (sortBy === "rating") {
      result = [...result].sort(
        (a, b) => Number(b.rating || 0) - Number(a.rating || 0)
      );
    }

    return result;
  }, [search, activeCategory, sortBy, minRating]);

  const cartCount = cart.reduce(
    (total, item) => total + (item.quantity || 0),
    0
  );

  const openFilters = () => {
    setDraftCategory(activeCategory);
    setDraftSort(sortBy);
    setDraftRating(minRating);
    setFilterOpen(true);
  };

  const applyFilters = () => {
    setActiveCategory(draftCategory);
    setSortBy(draftSort);
    setMinRating(draftRating);
    setFilterOpen(false);
  };

  const resetFilters = () => {
    setDraftCategory("All Coffee");
    setDraftSort("default");
    setDraftRating("all");
  };

  return (
    <div className="phone-scroll relative h-full w-full overflow-y-auto bg-[#f8f8f8] pb-28">
      {/* Header */}
      <header className="relative bg-gradient-to-br from-[#292929] to-[#151515] px-6 pb-24 pt-10 text-white">
        <p className="text-sm text-[#aaa]">Location</p>

        <button className="mt-2 flex items-center gap-2 text-[17px] font-semibold">
          Bilzen, Tanjungbalai
          <span className="text-lg">⌄</span>
        </button>

        <div className="mt-12 flex items-center gap-4">
          <div className="flex h-[58px] min-w-0 flex-1 items-center gap-3 rounded-2xl bg-[#303030] px-4">
            <Search size={24} className="shrink-0 text-white" />
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search coffee"
              className="w-full min-w-0 bg-transparent text-base text-white outline-none placeholder:text-[#aaa]"
            />
          </div>

          <button
            onClick={openFilters}
            aria-label="Filter coffee"
            className="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-2xl bg-[#c68150] text-white transition active:scale-95"
          >
            <SlidersHorizontal size={24} />
          </button>
        </div>
      </header>

      {/* Promotion and products */}
      <main className="-mt-14 px-6">
        <section className="relative min-h-[190px] overflow-hidden rounded-[28px] bg-[#95785d] p-5 text-white">
          <img
            src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=600&q=85"
            alt="Coffee promotion"
            className="absolute right-0 top-0 h-full w-[48%] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#95785d] via-[#95785d]/95 to-transparent" />
          <div className="relative z-10">
            <span className="inline-block rounded-xl bg-[#f0525b] px-3 py-1 text-sm font-bold">
              Promo
            </span>
            <h2 className="mt-5 max-w-[260px] text-[29px] font-bold leading-[1.2]">
              <span className="bg-black px-1">Buy one get</span>
              <br />
              <span className="bg-black px-1">one FREE</span>
            </h2>
          </div>
        </section>

        {/* Categories */}
        <section className="mt-10">
          <div className="flex gap-3 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`shrink-0 rounded-xl px-4 py-3 text-sm font-medium ${
                  activeCategory === category
                    ? "bg-[#c68150] text-white"
                    : "bg-[#f1f1f1] text-[#333]"
                }`}
              >
                {category === "Macchiato" ? "Machiato" : category}
              </button>
            ))}
          </div>
        </section>

        {/* Active filter summary */}
        {(sortBy !== "default" || minRating !== "all") && (
          <div className="mt-3 flex items-center justify-between">
            <p className="text-sm text-gray-500">
              {sortBy === "price-low"
                ? "Price: low to high"
                : sortBy === "price-high"
                ? "Price: high to low"
                : sortBy === "rating"
                ? "Top rated"
                : "Filtered"}{" "}
              {minRating !== "all" && ` · Rating ${minRating}+`}
            </p>
            <button
              onClick={() => {
                setSortBy("default");
                setMinRating("all");
              }}
              className="text-sm font-semibold text-[#b87548]"
            >
              Clear
            </button>
          </div>
        )}

        {/* Coffee products */}
        <section className="mt-5 grid grid-cols-2 gap-4">
          {filteredProducts.map((product) => {
            const isFavorite = favorites.some(
              (item) => item.id === product.id
            );

            return (
              <article
                key={product.id}
                className="min-w-0 rounded-[24px] bg-white p-3"
              >
                <button
                  onClick={() => onProductClick?.(product)}
                  className="relative block w-full"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-[150px] w-full rounded-[18px] bg-[#eee7e0] object-cover"
                  />
                  <span className="absolute right-2 top-2 flex items-center gap-1 rounded-lg bg-black/45 px-2 py-1 text-xs text-white">
                    <Star size={14} fill="#f5c518" className="text-[#f5c518]" />
                    {product.rating}
                  </span>
                </button>

                <button
                  onClick={() => onProductClick?.(product)}
                  className="mt-3 block w-full text-left"
                >
                  <h3 className="truncate text-[18px] font-bold text-[#303030]">
                    {product.name}
                  </h3>
                  <p className="mt-1 text-sm text-[#aaa]">
                    {product.subtitle}
                  </p>
                </button>

                <div className="mt-3 flex items-center justify-between gap-2">
                  <span className="text-[21px] font-bold text-black">
                    {money(product.price)}
                  </span>
                  <button
                    onClick={() => onProductClick?.(product)}
                    aria-label={`Add ${product.name}`}
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#c68150] text-white"
                  >
                    <Plus size={22} />
                  </button>
                </div>

                <button
                  onClick={() => onToggleFavorite?.(product)}
                  aria-label={`Toggle ${product.name} favorite`}
                  className="sr-only"
                >
                  <Heart fill={isFavorite ? "currentColor" : "none"} />
                </button>
              </article>
            );
          })}
        </section>

        {filteredProducts.length === 0 && (
          <p className="py-10 text-center text-sm text-gray-500">
            No coffee found. Try another category or search.
          </p>
        )}
      </main>

      <BottomNav
        active="home"
        onNavigate={onNavigate}
        cartCount={cartCount}
      />

      {/* Filter modal */}
      {filterOpen && (
        <div
          className="fixed inset-0 z-[2000] flex items-end justify-center bg-black/50 sm:items-center"
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              setFilterOpen(false);
            }
          }}
        >
          <section className="max-h-[85dvh] w-full max-w-[430px] overflow-y-auto rounded-t-[28px] bg-white px-6 pb-8 pt-5 text-[#292929] shadow-2xl sm:rounded-[28px]">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-xl font-bold">Filter Coffee</h2>
              <button
                onClick={() => setFilterOpen(false)}
                aria-label="Close filters"
                className="rounded-full bg-gray-100 p-2"
              >
                <X size={20} />
              </button>
            </div>

            <h3 className="mb-3 font-semibold">Category</h3>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setDraftCategory(category)}
                  className={`rounded-xl px-4 py-2.5 text-sm font-medium ${
                    draftCategory === category
                      ? "bg-[#c68150] text-white"
                      : "bg-[#f3f3f3] text-[#333]"
                  }`}
                >
                  {category === "Macchiato" ? "Machiato" : category}
                </button>
              ))}
            </div>

            <h3 className="mb-3 mt-6 font-semibold">Sort by</h3>
            <div className="space-y-2">
              {[
                ["default", "Recommended"],
                ["price-low", "Price: low to high"],
                ["price-high", "Price: high to low"],
                ["rating", "Highest rating"],
              ].map(([value, label]) => (
                <button
                  key={value}
                  onClick={() => setDraftSort(value)}
                  className="flex w-full items-center justify-between rounded-xl border border-gray-200 px-4 py-3 text-left"
                >
                  <span>{label}</span>
                  <span
                    className={`flex h-5 w-5 items-center justify-center rounded-full border ${
                      draftSort === value
                        ? "border-[#c68150] bg-[#c68150] text-white"
                        : "border-gray-300"
                    }`}
                  >
                    {draftSort === value && <Check size={13} />}
                  </span>
                </button>
              ))}
            </div>

            <h3 className="mb-3 mt-6 font-semibold">Minimum rating</h3>
            <div className="flex flex-wrap gap-2">
              {[
                ["all", "Any rating"],
                ["4", "4.0+"],
                ["4.5", "4.5+"],
              ].map(([value, label]) => (
                <button
                  key={value}
                  onClick={() => setDraftRating(value)}
                  className={`rounded-xl px-4 py-2.5 text-sm font-medium ${
                    draftRating === value
                      ? "bg-[#c68150] text-white"
                      : "bg-[#f3f3f3] text-[#333]"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            <div className="mt-8 flex gap-3">
              <button
                onClick={resetFilters}
                className="flex-1 rounded-2xl border border-gray-300 py-4 font-semibold"
              >
                Reset
              </button>
              <button
                onClick={applyFilters}
                className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-[#c68150] py-4 font-semibold text-white"
              >
                <ArrowUpDown size={18} />
                Apply Filters
              </button>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}