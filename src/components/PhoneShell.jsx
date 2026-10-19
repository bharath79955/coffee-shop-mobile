import React from "react";

export default function PhoneShell({ children }) {
  return (
    <div className="min-h-screen w-full bg-[#e9e5e1] sm:flex sm:justify-center sm:p-6">
      <div className="relative h-[100dvh] w-full bg-[#f8f8f8] sm:h-[844px] sm:max-h-[90vh] sm:max-w-[390px] sm:rounded-[32px]">
        {children}
      </div>
    </div>
  );
}