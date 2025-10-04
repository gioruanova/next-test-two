import Image from "next/image";
import { BiLogoReact } from "react-icons/bi";
import { SidebarMenuItem } from "./SidebarMenuItem";
import { IoBrowsers, IoCalculator, IoFootball } from "react-icons/io5";

const menuItems = [
  {
    path: "/dashboard/main",
    icon: <IoBrowsers size={30} />,
    title: "Dashboard",
    subTitle: "Check data",
  },
  {
    path: "/dashboard/counter",
    icon: <IoCalculator size={30} />,
    title: "Counter",
    subTitle: "Check count data",
  },
  {
    path: "/dashboard/pokemons",
    icon: <IoFootball size={30} />,
    title: "Pokemons",
    subTitle: "Generacion de pokemones staticos",
  },
];

export const Sidebar = () => {
  return (
    <div
      id="menu"
      style={{ width: "400px" }}
      className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64  left-0 overflow-y-auto"
    >
      <div id="logo" className="my-4 px-6">
        <h1 className="flex align-center text-lg md:text-2xl font-bold text-white gap-1">
          <span className="flex items-center">
            <BiLogoReact />
          </span>
          <span className="text-blue-500">Poke</span>
          <span>Dash</span>
        </h1>
        <p className="text-slate-500 text-sm">
          Manage your Pokemons and more!
        </p>
      </div>

      <div id="profile" className="px-6 py-10">
        <p className="text-slate-500">Welcome back,</p>
        <a href="#" className="inline-flex space-x-2 items-center">
          <span>
            <Image
              className="rounded-full w-8 h-8"
              src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c"
              alt=""
              width={32}
              height={32}
              priority={false}
            />
          </span>
          <span className="text-sm md:text-base font-bold">Gio Rua</span>
        </a>
      </div>

      <div id="nav" className="w-full px-6">
        {menuItems.map((item) => (
          <SidebarMenuItem key={item.path} {...item} />
        ))}
      </div>
    </div>
  );
};
