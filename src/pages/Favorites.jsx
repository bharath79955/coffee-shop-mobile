import React from "react";
import { ArrowLeft, Heart, ShoppingBag, Star } from "lucide-react";
import { money } from "../data/products";
import BottomNav from "../components/BottomNav";

export default function Favorites({
  favorites = [],
  onBack,
  onNavigate,
  onProductClick,
  onToggleFavorite,
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

        <div className="flex-1">
          <h1 className="text-xl font-bold text-[#302821]">
            My Favorites
          </h1>
          <p className="mt-1 text-xs text-[#a19891]">
            Your favourite coffee, all in one place
          </p>
        </div>

        <Heart size={23} className="text-[#c67c4e]" />
      </header>

      <main className="px-5">
        {favorites.length === 0 ? (
          <div className="flex min-h-[55vh] flex-col items-center justify-center text-center">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#f2e4da]">
              <Heart size={42} className="text-[#c67c4e]" />
            </div>

            <h2 className="mt-5 text-xl font-bold text-[#302821]">
              No favorites yet
            </h2>

            <p className="mt-2 max-w-[250px] text-sm leading-6 text-[#96877d]">
              Save the coffees you love and find them here whenever you want.
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
            <div className="mb-4 flex items-center justify-between">
              <h2 className="font-bold text-[#302821]">
                Saved Coffee
              </h2>
              <span className="text-xs text-[#96877d]">
                {favorites.length} items
              </span>
            </div>

            <div className="space-y-4">
              {favorites.map((product) => (
                <article
                  key={product.id}
                  className="flex gap-3 rounded-2xl bg-white p-3 shadow-sm"
                >
                  <button
                    onClick={() => onProductClick?.(product)}
                    className="shrink-0"
                    aria-label={`View ${product.name}`}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-28 w-28 rounded-xl bg-[#eee7e0] object-cover"
                    />
                  </button>

                  <div className="flex min-w-0 flex-1 flex-col">
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0">
                        <h3 className="truncate font-bold text-[#302821]">
                          {product.name}
                        </h3>
                        <p className="mt-1 text-xs text-[#a19891]">
                          {product.subtitle}
                        </p>
                      </div>

                      <button
                        onClick={() => onToggleFavorite?.(product)}
                        aria-label={`Remove ${product.name} from favorites`}
                        className="shrink-0 text-pink-500"
                      >
                        <Heart size={19} fill="currentColor" />
                      </button>
                    </div>

                    <div className="mt-2 flex items-center gap-1 text-xs text-[#8d8178]">
                      <Star
                        size={13}
                        fill="#f5c518"
                        className="text-[#f5c518]"
                      />
                      {product.rating}
                      <span>({product.reviews} reviews)</span>
                    </div>

                    <div className="mt-auto flex items-center justify-between pt-3">
                      <span className="font-bold text-[#302821]">
                        {money(product.price)}
                      </span>

                      <button
                        onClick={() => onProductClick?.(product)}
                        className="flex h-9 items-center gap-2 rounded-xl bg-[#c67c4e] px-3 text-xs font-semibold text-white"
                      >
                        <ShoppingBag size={15} />
                        Order
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </>
        )}
      </main>

      <BottomNav
        active="favorites"
        onNavigate={onNavigate}
        cartCount={cartCount}
      />
    </div>
  );
}