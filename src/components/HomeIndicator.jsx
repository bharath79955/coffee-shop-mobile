export default function HomeIndicator({ dark = false }) {
  return (
    <div
      className={`absolute bottom-2 left-1/2 h-1.5 w-[104px] -translate-x-1/2 rounded-full ${
        dark ? "bg-neutral-800" : "bg-neutral-900"
      }`}
    />
  );
}