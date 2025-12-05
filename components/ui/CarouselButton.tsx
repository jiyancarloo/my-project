import { ReactNode } from "react";

interface CarouselButtonProps {
  onClick: () => void;
  disabled: boolean;
  children: ReactNode;
}

export default function CarouselButton({
  onClick,
  disabled = false,
  children,
}: CarouselButtonProps) {
  return (
    <>
      <div className="group relative inline-block pt-2 z-20">
        <button
          onClick={onClick}
          disabled={disabled}
          className="relative overflow-hidden px-3 py-3 w-fit rounded-full border border-black/20 text-black text-base transition-colors duration-500 disabled:opacity-30">
          <span className="absolute inset-0 bg-third -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out rounded-full" />

          <span className="relative z-10 group-hover:text-white transition-colors duration-500">
            {children}
          </span>
        </button>
      </div>
    </>
  );
}
