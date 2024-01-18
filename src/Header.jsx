import MenuButton from "./MenuButton";

export default function Header() {
  return (
    <div className="sticky top-0 z-50 flex justify-center h-20 mb-4 border-b-2 sm:h-32 header border-amber-400 bg-gradient-to-r from-slate-950 to-emerald-950">
      <MenuButton />
      <h1 className="z-50 mt-4 mb-5 text-5xl text-amber-400 sm:text-8xl">
        MONEY LEAKS
      </h1>
    </div>
  );
  
}
