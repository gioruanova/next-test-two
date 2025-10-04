import { CartCounter } from "@/app/shopping-cart/components/CartCounter";

export const metadata = {
  title: "Shopping Cart",
  description: "Counter page detail",
};

export default function CounterPage() {
  const databaseValue = 2;

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Productos agregados al carrito:</span>
      <CartCounter value={databaseValue} />
    </div>
  );
}
