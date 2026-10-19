import React from "react";
import { ArrowLeft, Phone } from "lucide-react";

const courierPhoto =
  "data:image/webp;base64,UklGRggHAABXRUJQVlA4IPwGAABwJQCdASppAGkAPqlKn0umJCKhp9arqMAVCWUAyFS/fp5rZ8sakX7Z8a3lw1cdzf9kQhHk82Bs9LuYAyA7HVipUUpNGp/+5eG1CYastUqGJwtpfootRsaTG3t3fUa6yzmDmNb+9ds36h/GEgjVwHC36Q57Zsp5tbMvWWpWI3KzA7DXNlhZjGCnVpgEzsQfQDRI8jvwTFC2T7dYJxMrU7T7AzaMTpVI7D/2lUjKA5IwnQJmeb/Q5Bn82Rq41zqe+h6AdyZYtkVAHHX+rFPEuVAJ3S//79OBU/wQ/6gPUzMX8yZcpUkUwSUPFqLsK0amhp/6yIZv3aie8PoB6t6OgHEFzqFYm2ggqqzGt65TAh/JVzks9njZEctCqandTWgjap3hbQk/dQIDd6OrN0Zs8zFrlYlcSgD+/XtrmRiIbKO4p8nxQbmtYukV3zmuiCynfjBB5wR1nB8omh0eqtZzHsftGWHpVgkaNmlMb6cngfUcttKlhirfBn3NNcfmJV9qHulthXUxboy7VubXGxFKeIBYFT79ZHEU5o/13U8qaP6Gh/K/jYAYkUO/mddnToyMkMcwYdM567rS/YPfKLQ800ZGcdyzWvuRER+jSSc1vlIjpMTv/O3TKjJlqWEJnjLfqD2Tda494ZRN+njGUxgl7iIq4cCH7vb13Z27F3lsZyc5ek7kUxZrT8vq6KWVcvEGDor+ce4b3ceFajByjJvUvz4RjpgNYs3+A2K5f1ffvqPVb/k8af125aW0LHgXtQQLsWA98ygijB4V9TeW2XKQc+0qRa8Gjhtt8CeHM0mTgnlf4VXtH47YHG1kPzQyiF0+Vkd/XjzJfMcDhMi+zN3pKHDyW1Q7FHTv2MxRYYxLQuJyngTlIQMpi9QMotMYaCsnCKgc4IYUqTPNlVAe94w8wPGE+0oj7HKzQYYDB4aYzMr6dPnXzodMHj06FYdoWSMJVnOyh3sBOCs4v5HduxW6c1+mPW1HNsEFsLhS/RdpJZzjCcrNdnrWuK4o9G/Qma5/wQ9sMmgtzDRajfiKW8/YexoZRD3V5F8SZv7kNOxIy7RcbDFGHTUN1UGFzwJCH2oJRcfB2x4aMfsxPXGYdd+T5p3Xz/IjXsXjJLVBPClvHqjvqpasmKx1lS8hyrVgtRBgzvjBUVXge+pPzvejnZGh2agPzEa8VXXR0WbzKG7kcrZ7e0tTvav+6XTiOzxmB0Db+3cHbiqRy4Xpj38b2zsBCvjiVIdiviKh+HZBB1xp/uRtFKb54dYpRjto2xIYgiGFhZVkx3pwE0LHrom/jhbJx91yeSAPz9/nq16ydcwzi2YlzRMPQnMRI28jRpCqB6yeQFxKhd9qtjoMScMDb08JeQlXFhNg9ZmXsMvGtSmBetW+bjgi3oQIyxM8pa6pM46Tc7/Ya43fOjixkx+A29UicCOmIaAtR+B0IREeZU1o+pTrMUI35cNEQUxZQXZmpSB9f7nEP661kjJOgnYNtZhJJerpiGaqXlkhGqnLubXFmo/jsokr7gXy1ivZA87aKfLPhcnx79x2i7f/k3oqI17eStUoJHEOs0ugqH6nT/avcxxiMZGFYY0hr17RCZeNQUPe7EJedyd37wxdlSOls+H+AJEd3K9oq6q3q9jkODiKlZoFxxJSn4vl65ROrJAeSS6qhYsK67SMojiB3vrHbGwo6y70upTAEZXFP1bxFWb2/sVqnz8XyvgKCVSGtiCsUYeaan0RbFpfdmEGiNoQLdLlF1+dOmt2He1grrmfY+GJg5Izyj7ZT13m8+7DMiK6paUVqaWN7mFL1n2PWm1/pZhgxP9BNHbPajoqYHtzEY1blgJYMRL7urnEzW9bossLeyhWOFX9YRFOMZhnd83B0PXGlgtjZ6enaWeeOkJyV0DEjTOVGk9+ZGdZv13p4ssEO7mYKR46RdClg1x+BkRyiG2hjWsRoIAWH0WwGEebQIwPFpvmQ9gCb9ZGg6vk+MsVwVvziO0067H7Yq4ryDaPg6bwSlRK48CJZn3fTm9PzOGln2/16MRv/uTW/5Y31fs0jjbIFLv7NkJXEQtlDEjmPeAOe6oE17jbwxX0yy3drSEjLhdUnjH5ocpDPZ/G8wHrCddQ+pc68OuecVa32jK69FIb5iHCK0bt1eneibbtllqprjy7LDB+ylaNfK6v8FhDbbejJiCcFPZniPPNm0Qw/jWnqiY057u711r6Yh8f8xD/vxkiX97Wlj3jU1pD/aMYpnUlIf/LqdJpeX1KB+ER2TVBUppTlqtG9PlT1hZvqvwofzWCO/h6oiZNojKqbriq6utnIG1YbCIN29E5G6hdEGfT5t9G4sBILKaiURBQnx7g6bpZuH9H89uWzBEPd1xX0RHdZYPMAQZkBOsSuIg7AAA=";

export default function Tracking({ onBack }) {
  return (
    <div className="h-full w-full overflow-y-auto bg-white text-[#292929]">
      {/* Map recreated directly in SVG */}
      <div className="relative h-[58vh] min-h-[420px] overflow-hidden bg-[#f5f5f5]">
        <svg
          viewBox="0 0 688 906"
          preserveAspectRatio="xMidYMid slice"
          className="absolute inset-0 h-full w-full"
          role="img"
          aria-label="Delivery route map"
        >
          <rect width="688" height="906" fill="#f5f5f5" />

          <g
            fill="none"
            stroke="#ffffff"
            strokeWidth="19"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M-30 45 H170 V95 H445 V-20" />
            <path d="M-30 110 H155 V180 H-20" />
            <path d="M195 35 L195 285 H360 V35" />
            <path d="M230 95 H440 M230 135 H440 M230 175 H440 M230 215 H440" />
            <path d="M480 -20 V360 H710" />
            <path d="M540 -20 L520 300 L520 900" />
            <path d="M-20 355 H475 V900" />
            <path d="M-20 405 H105 L70 650 H-20" />
            <path d="M105 400 L75 650 L45 920" />
            <path d="M120 480 H415 V580 H120" />
            <path d="M140 600 H310 V860 H140" />
            <path d="M310 580 L335 920" />
            <path d="M430 580 H690" />
            <path d="M520 430 H690 M520 510 H690 M520 610 H690" />
            <path d="M575 700 H690 M575 780 H690" />
          </g>

          <g fill="#f2f2f2" stroke="#e8e8e8" strokeWidth="3">
            <path d="M0 125 H90 V315 H0 Z" />
            <path d="M205 45 H355 V280 H205 Z" />
            <path d="M365 90 H450 V270 H365 Z" />
            <path d="M535 100 H655 V320 H535 Z" />
            <path d="M115 300 H400 V365 H115 Z" />
            <path d="M115 420 H230 V465 H115 Z" />
            <path d="M255 400 H300 V565 H255 Z" />
            <path d="M310 435 H410 V475 H310 Z" />
            <path d="M110 610 H300 V830 H110 Z" />
            <path d="M330 605 H415 V860 H330 Z" />
            <path d="M535 620 H620 V900 H535 Z" />
          </g>

          <g fill="#8b8b8b" fontSize="22" fontFamily="Arial, sans-serif">
            <text x="250" y="78">96th St</text>
            <text x="210" y="205">95th St</text>
            <text x="180" y="150" transform="rotate(-90 180 150)">97th St</text>
            <text x="605" y="325">2nd Ave</text>
            <text x="190" y="575">86th Street</text>
            <text x="610" y="675">3rd Ave</text>
            <text x="150" y="775" transform="rotate(-82 150 775)">88th Street</text>
            <text x="415" y="765" transform="rotate(90 415 765)">19th Avenue</text>
            <text x="480" y="640" transform="rotate(90 480 640)">Jawaharlal Nehru Road</text>
            <text x="350" y="865">86th St</text>
            <text x="65" y="865" transform="rotate(-80 65 865)">85th Street</text>
          </g>

          <path
            d="M465 635 L465 355 L240 355 L240 400 L195 400 L195 460 L160 460"
            fill="none"
            stroke="#c68150"
            strokeWidth="6"
            strokeLinejoin="round"
          />

          <g transform="translate(160 445)">
            <path
              d="M0 -16 C-9 -16 -14 -9 -14 -1 C-14 8 0 23 0 23 S14 8 14 -1 C14 -9 9 -16 0 -16Z"
              fill="#c68150"
            />
            <circle cy="-2" r="5" fill="white" />
          </g>

          <g transform="translate(465 635)">
            <circle r="37" fill="white" />
            <text x="0" y="13" textAnchor="middle" fontSize="35">🛵</text>
          </g>
        </svg>

        <button
          onClick={onBack}
          aria-label="Go back"
          className="absolute left-5 top-5 flex h-14 w-14 items-center justify-center rounded-[20px] bg-white shadow-sm"
        >
          <ArrowLeft size={26} />
        </button>
      </div>

      {/* Delivery details — no slider or handle */}
      <section className="-mt-5 rounded-t-[32px] bg-white px-6 pb-8 pt-8">
        <div className="text-center">
          <h1 className="text-[29px] font-bold">10 minutes left</h1>
          <p className="mt-2 text-[19px] text-[#a5a5a5]">
            Delivery to{" "}
            <span className="font-bold text-[#292929]">
              Jl. Kpg Sutoyo
            </span>
          </p>
        </div>

        <div className="mt-7 flex items-center gap-5 rounded-[24px] border border-[#ddd] px-5 py-4">
          <div className="flex h-[100px] w-[100px] shrink-0 items-center justify-center rounded-[22px] border border-[#e0e0e0] text-4xl">
            🛵
          </div>

          <div>
            <h2 className="text-[21px] font-bold">
              Delivered your order
            </h2>
            <p className="mt-2 text-[18px] leading-[1.55] text-[#a5a5a5]">
              We will deliver your goods to you in the shortest possible time.
            </p>
          </div>
        </div>

        <div className="mt-7 flex items-center gap-4">
          <img
            src={courierPhoto}
            alt="Brooklyn Simmons"
            className="h-[84px] w-[84px] shrink-0 rounded-[20px] object-cover"
          />

          <div className="min-w-0 flex-1">
            <h2 className="text-[20px] font-bold">
              Brooklyn Simmons
            </h2>
            <p className="mt-2 text-[17px] text-[#a5a5a5]">
              Personal Courier
            </p>
          </div>

          <a
            href="tel:"
            aria-label="Call courier"
            className="flex h-[64px] w-[64px] shrink-0 items-center justify-center rounded-[20px] border border-[#ddd]"
          >
            <Phone size={30} strokeWidth={1.8} />
          </a>
        </div>

        <div className="flex justify-center pb-2 pt-10">
          <div className="h-[5px] w-[135px] rounded-full bg-black" />
        </div>
      </section>
    </div>
  );
}