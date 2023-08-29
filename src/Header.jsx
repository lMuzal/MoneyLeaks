import MenuButton from "./MenuButton";

export default function Header() {

  return (
    <div className="flex justify-center">
      <MenuButton></MenuButton>
      <h1 className="text-5xl text-amber-400 flex justify-center mt-4 sm:text-8xl">MONEY LEAKS</h1>
    </div>
  )
}