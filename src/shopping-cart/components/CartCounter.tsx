"use client";

import { useState } from "react";
import style from "./counter.module.css";

interface Props {
  value?: number;
}

export const CartCounter = ({ value = 10 }: Props) => {
  const [count, setCount] = useState(value);

  const addProducts = () => {
    setCount(count + 1);
  };

  const removeProducts = () => {
    setCount(count > 0 ? count - 1 : 0);
  };



  return (
    <>
      <span className="text-9xl">{count}</span>
      <div className="flex gap-2">
        <button
          onClick={addProducts}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] cursor-pointer"
        >
          +1
        </button>
        <button
          onClick={removeProducts}
          className={`flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] cursor-pointer  ${count === 0 ? style["disabled"] : ""}
            
            `}
        >
          -1
        </button>
      </div>
    </>
  );
};
