import { Plus, Star } from "lucide-react";
import { money } from "../data/products.js";

export default function ProductCard({
  product,
  onOpen,
  onAdd,
}) {
  return (
    <article className="min-w-0 rounded-[24px] bg-white p-2.5 shadow-[0_4px_18px_rgba(0,0,0,.025)]">
      <button
        onClick={onOpen}
        className="relative block w-full overflow-hidden rounded-[18px] text-left"
      >
        <img
          src={product.image}
          alt={product.name}
          className="h-[150px] w-full object-cover"
          loading="lazy"
        />

        <span className="absolute right-2 top-2 flex items-center gap-1 rounded-full bg-black/35 px-2 py-1 text-[11px] font-semibold text-white">
          <Star size={13} fill="#fbbf24" color="#fbbf24" />
          {product.rating}
        </span>
      </button>

      <button
        onClick={onOpen}
        className="mt-3 block w-full truncate text-left text-[17px] font-bold tracking-tight"
      >
        {product.name}
      </button>

      <p className="mt-1 truncate text-[14px] text-neutral-400">
        {product.subtitle}
      </p>

      <div className="mt-3 flex items-center justify-between gap-1">
        <span className="text-[19px] font-bold">
          {money(product.price)}
        </span>

        <button
          onClick={onAdd}
          aria-label={`Add ${product.name} to cart`}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[14px] bg-coffee-400 text-white transition hover:bg-coffee-500"
        >
          <Plus size={22} />
        </button>
      </div>
    </article>
  );
}