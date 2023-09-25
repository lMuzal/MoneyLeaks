import MenuButton from "./MenuButton";

export default function Header() {
  return (
    <div className="flex justify-center">
      <MenuButton></MenuButton>
      <h1 className="z-10 flex justify-center mt-4 mb-5 text-5xl text-amber-400 sm:text-8xl">
        MONEY LEAKS
      </h1>
    </div>
  );
}
