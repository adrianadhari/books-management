import Image from "next/image";
import Link from "next/link";
import { MdArrowRightAlt } from "react-icons/md";

export default function Home() {
  return (
    <div className="home min-h-screen">
      <div className="container mx-auto px-32 py-8">
        <div className="navbar flex items-center justify-between">
          <div className="navbar-brand">
            <h1 className="text-blue-900 text-3xl font-semibold">SiBuk</h1>
          </div>
          <div>
            <Link href="/register">
              <button className="bg-blue-600 px-5 py-2 rounded text-white font-bold hover:bg-blue-500">
                Daftar
              </button>
            </Link>
          </div>
        </div>
        <div className="content flex justify-around items-center mt-[250px] w-3/4 mx-auto">
          <div className="hero">
            <Image src="/hero-img.png" alt="books" width={256} height={310} />
          </div>
          <div className="desc">
            <h1 className="text-5xl text-blue-900 font-medium mb-2">SiBuk</h1>
            <p className="text-slate-700">
              Aplikasi Sistem Informasi Buku Berbasis Website
            </p>
            <Link href="/login">
              <button className="flex items-center px-10 py-3 bg-blue-600 border-0 rounded text-white font-bold mt-8 drop-shadow-2xl hover:bg-blue-500">
                Masuk <MdArrowRightAlt className="ms-4 text-2xl" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
