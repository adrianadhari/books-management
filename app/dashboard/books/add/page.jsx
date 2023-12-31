"use client";

import Link from "next/link";
import { api, addTokenToHeader } from "@/app/lib/api";
import { useRouter } from "next/navigation";
import { useState } from "react";

const AddBook = () => {
  const router = useRouter();
  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
    isbn: "",
    description: "",
    pages: "",
    subtitle: "",
    website: "",
    published: "",
    publisher: "",
  });

  const handleInputChange = (e) => {
    setNewBook({ ...newBook, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      addTokenToHeader();
      const response = await api.post("/books/add", newBook);
      console.log("Book added successfully:", response.data);
      router.push("/dashboard/books");
    } catch (error) {
      console.log("Gagal", error.response.data);
    }
  };

  return (
    <>
      <div className="mt-5 text-end">
        <Link href="/dashboard/books">
          <button className="px-5 py-2 text-white rounded bg-yellow-400">
            Kembali
          </button>
        </Link>
      </div>
      <div className="p-5 bg-slate-50 mt-5 rounded-xl">
        <form
          onSubmit={handleSubmit}
          className="form w-full flex items-center flex-wrap gap-y-5"
        >
          <label htmlFor="isbn" className="w-1/6 font-bold">
            ISBN
          </label>
          <input
            type="number"
            name="isbn"
            id="isbn"
            placeholder="Nomor ISBN"
            className="w-5/6 px-3 py-1 rounded-lg border-2 border-slate-200"
            onChange={handleInputChange}
          />
          <label htmlFor="title" className="w-1/6 font-bold">
            Judul
          </label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Judul Buku"
            className="w-5/6 px-3 py-1 rounded-lg border-2 border-slate-200"
            onChange={handleInputChange}
          />
          <label htmlFor="subtitle" className="w-1/6 font-bold">
            Sub Judul
          </label>
          <input
            type="text"
            name="subtitle"
            id="subtitle"
            placeholder="Sub Judul Buku"
            className="w-5/6 px-3 py-1 rounded-lg border-2 border-slate-200"
            onChange={handleInputChange}
          />
          <label htmlFor="author" className="w-1/6 font-bold">
            Pencipta
          </label>
          <input
            type="text"
            name="author"
            id="author"
            placeholder="Pencipta Buku"
            className="w-5/6 px-3 py-1 rounded-lg border-2 border-slate-200"
            onChange={handleInputChange}
          />
          <label htmlFor="published" className="w-1/6 font-bold">
            Tanggal Terbit
          </label>
          <input
            type="date"
            name="published"
            id="published"
            placeholder="Tanggal Terbit Buku"
            className="w-5/6 px-3 py-1 rounded-lg border-2 border-slate-200"
            onChange={handleInputChange}
          />
          <label htmlFor="publisher" className="w-1/6 font-bold">
            Penerbit
          </label>
          <input
            type="text"
            name="publisher"
            id="publisher"
            placeholder="Penerbit Buku"
            className="w-5/6 px-3 py-1 rounded-lg border-2 border-slate-200"
            onChange={handleInputChange}
          />
          <label htmlFor="pages" className="w-1/6 font-bold">
            Halaman
          </label>
          <input
            type="number"
            name="pages"
            id="pages"
            placeholder="Halaman Buku"
            className="w-5/6 px-3 py-1 rounded-lg border-2 border-slate-200"
            onChange={handleInputChange}
          />
          <label htmlFor="description" className="w-1/6 font-bold">
            Deskripsi
          </label>
          <input
            type="text"
            name="description"
            id="description"
            placeholder="Deskripsi Buku"
            className="w-5/6 px-3 py-1 rounded-lg border-2 border-slate-200"
            onChange={handleInputChange}
          />
          <label htmlFor="website" className="w-1/6 font-bold">
            Website
          </label>
          <input
            type="text"
            name="website"
            id="website"
            placeholder="Website"
            className="w-5/6 px-3 py-1 rounded-lg border-2 border-slate-200"
            onChange={handleInputChange}
          />
          <button
            className="px-5 py-2 rounded text-white bg-blue-500"
            type="submit"
          >
            Tambah Buku
          </button>
        </form>
      </div>
    </>
  );
};

export default AddBook;
