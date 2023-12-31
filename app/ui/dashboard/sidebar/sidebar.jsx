/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import Image from "next/image";
import Link from "next/link";
import { MdDashboard } from "react-icons/md";
import { usePathname } from "next/navigation";
import styles from "@/app/ui/dashboard/sidebar/sidebar.module.css";
import { FaBook, FaArrowRightFromBracket } from "react-icons/fa6";
import { addTokenToHeader, api } from "@/app/lib/api";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Sidebar = () => {
  const [profile, setProfile] = useState([]);

  const fetchData = async () => {
    try {
      addTokenToHeader();
      const response = await api.get("/user");
      setProfile(response.data);
    } catch (error) {
      console.log("error", error.response);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const router = useRouter();
  const handleLogout = () => {
    localStorage.removeItem("token");
    addTokenToHeader();
    router.push("/login");
  };

  const pathName = usePathname();
  return (
    <div className="sticky top-10">
      <div className="user flex items-center gap-5 mb-5">
        <Image
          src="/avatar.png"
          width={50}
          height={50}
          alt="Profil"
          className="rounded-3xl object-cover"
        />
        <div className="flex flex-col">
          <span className="font-medium">{profile.name}</span>
          <span className="text-sm text-slate-500">{profile.email}</span>
        </div>
      </div>
      <ul>
        <li>
          <span className="text-sm text-slate-300 font-bold">Pages</span>
          <Link
            href="/dashboard"
            className={`flex p-5 items-center gap-2 mx-0 my-2 font-medium rounded hover:bg-blue-100 hover:text-blue-600 ${
              pathName === "/dashboard" && styles.active
            }`}
          >
            <MdDashboard />
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/books"
            className={`flex p-5 items-center gap-2 mx-0 my-2 font-medium rounded hover:bg-blue-100 hover:text-blue-600 ${
              pathName === "/dashboard/books" && styles.active
            }`}
          >
            <FaBook />
            Data Buku
          </Link>
        </li>
        <li>
          <button
            className="flex p-5 items-center gap-2 mx-0 my-2 font-medium rounded hover:bg-blue-100 w-full hover:text-blue-600"
            onClick={handleLogout}
          >
            <FaArrowRightFromBracket />
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
