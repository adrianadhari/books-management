"use client";
import Link from "next/link";
import { api } from "../lib/api";
import { useRouter } from "next/navigation";
import { useState } from "react";

const RegisterPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/register", formData);
      router.push("/login");
    } catch (error) {
      alert(error.response.data.message);
    }
  };
  return (
    <div className="min-h-screen flex-col bg-slate-100 flex items-center justify-center gap-6">
      <div className="box bg-white p-10 shadow rounded-lg flex flex-col gap-10 w-[500px]">
        <h3 className="text-center text-3xl text-slate-800 font-medium">
          Daftar
        </h3>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <label
            htmlFor="name"
            className="text-lg text-slate-800 font-semibold"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="border rounded p-3 mb-4 focus:outline-none"
            placeholder="Masukkan nama anda"
            onChange={handleChange}
            required
          />
          <label
            htmlFor="email"
            className="text-lg text-slate-800 font-semibold"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="border rounded p-3 mb-4 focus:outline-none"
            placeholder="Masukkan email anda"
            onChange={handleChange}
            required
          />
          <label
            htmlFor="password"
            className="text-lg text-slate-800 font-semibold"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="border rounded p-3 mb-6 focus:outline-none"
            placeholder="Masukkan password anda"
            onChange={handleChange}
            required
          />
          <label
            htmlFor="passwordConfirm"
            className="text-lg text-slate-800 font-semibold"
          >
            Konfirmasi Password
          </label>
          <input
            type="password"
            name="password_confirmation"
            id="passwordConfirm"
            className="border rounded p-3 mb-6 focus:outline-none"
            placeholder="Konfirmasi password anda"
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-500 w-full border-0 py-3 text-white font-semibold rounded"
          >
            Daftar
          </button>
          <span className="text-center mt-5">
            Sudah punya akun?{" "}
            <Link
              href="/login"
              className="text-blue-600 font-bold hover:text-blue-500"
            >
              Masuk
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
