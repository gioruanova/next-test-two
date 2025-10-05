import { CartCounter } from "@/shopping-cart/components/CartCounter";

export const metadata = {
  title: "Shopping Cart Testing",
  description: "Counter page detail",
};

export default function CounterPage() {
  const databaseValue = 2;

  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-[#1A2238] text-white">
      <span>Productos agregados al carrito:</span>
      <CartCounter value={databaseValue} />
    </div>
  );
}
