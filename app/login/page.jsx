"use client";
import Link from "next/link";
import { useState } from "react";
import { api, addTokenToHeader } from "../lib/api";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/login", formData);
      const { token } = response.data;
      localStorage.setItem("token", token);
      addTokenToHeader();
      router.push("/dashboard");
    } catch (error) {
      console.log("Email atau password salah", error.response);
    }
  };

  return (
    <div className="min-h-screen flex-col bg-slate-100 flex items-center justify-center gap-6">
      <div className="box bg-white p-10 shadow rounded-lg flex flex-col gap-10 w-[500px]">
        <h3 className="text-center text-3xl text-slate-800 font-medium">Masuk</h3>
        <form action="" className="flex flex-col" onSubmit={handleSubmit}>
          <label htmlFor="email" className="text-lg text-slate-800 font-semibold">
            Email
          </label>
          <input type="email" name="email" id="email" className="border rounded p-3 mb-4 focus:outline-none" placeholder="Masukkan email anda" onChange={handleChange} required />
          <label htmlFor="password" className="text-lg text-slate-800 font-semibold">
            Password
          </label>
          <input type="password" name="password" id="password" className="border rounded p-3 mb-6 focus:outline-none" placeholder="Masukkan password anda" onChange={handleChange} required />
          <button className="bg-blue-600 hover:bg-blue-500 w-full border-0 py-3 text-white font-semibold rounded">Masuk</button>
          <span className="text-center mt-5">
            Belum punya akun?{" "}
            <Link href="/register" className="text-blue-600 font-bold hover:text-blue-500">
              Daftar
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
