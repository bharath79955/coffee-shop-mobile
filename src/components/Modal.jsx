import { X } from "lucide-react";

export default function Modal({
  title,
  onClose,
  children,
}) {
  return (
    <div className="absolute inset-0 z-50 flex items-end justify-center bg-black/40 p-4 sm:items-center">
      <div className="w-full max-w-sm rounded-[28px] bg-white p-6 shadow-2xl">
        <div className="mb-5 flex items-center justify-between">
          <h3 className="text-lg font-semibold">
            {title}
          </h3>

          <button
            onClick={onClose}
            className="rounded-full bg-neutral-100 p-2"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>

        {children}
      </div>
    </div>
  );
}