"use client";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="flex items-center p-5 rounded-xl bg-white shadow">
      <div className="font-bold capitalize">{pathname.split("/").pop()}</div>
    </div>
  );
};

export default Navbar;
