export default function StatusBar({ dark = false }) {
  return (
    <div
      className={`flex items-center justify-between px-7 pt-5 pb-3 text-[15px] font-semibold ${
        dark ? "text-white" : "text-neutral-800"
      }`}
    >
      <span>9:41</span>

      <div className="flex items-center gap-1.5">
        <span className="flex h-3.5 items-end gap-[2px]">
          <i className="h-1.5 w-[3px] rounded-sm bg-current" />
          <i className="h-2.5 w-[3px] rounded-sm bg-current" />
          <i className="h-3 w-[3px] rounded-sm bg-current" />
          <i className="h-3.5 w-[3px] rounded-sm bg-current" />
        </span>

        <span className="text-base">⌁</span>

        <span
          className={`relative h-3 w-6 rounded-[3px] border-[1.5px] ${
            dark ? "border-white" : "border-neutral-700"
          }`}
        >
          <i
            className={`absolute inset-[2px] rounded-[1px] ${
              dark ? "bg-white" : "bg-neutral-800"
            }`}
          />
        </span>
      </div>
    </div>
  );
}