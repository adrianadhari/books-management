"use client";
import { api, addTokenToHeader } from "@/app/lib/api";
/* eslint-disable react-hooks/exhaustive-deps */
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const EditBook = () => {
  const router = useRouter();
  const { id: bookId } = useParams();
  const [editedBook, setEditedBook] = useState({
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

  const fetchData = async () => {
    try {
      addTokenToHeader();
      const response = await api.get(`/books/${bookId}`);
      setEditedBook(response.data);
    } catch (error) {
      console.error("Error fetching book data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [bookId]);

  const handleInputChange = (e) => {
    setEditedBook({ ...editedBook, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      addTokenToHeader();
      const response = await api.put(`/books/${bookId}/edit`, editedBook);
      console.log("berhasil update data", response.data);
      router.push("/dashboard/books");
    } catch (error) {
      console.log("gagal update", error.response.data);
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
            value={editedBook.isbn}
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
            value={editedBook.title}
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
            value={editedBook.subtitle}
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
            value={editedBook.author}
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
            value={editedBook.published}
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
            value={editedBook.publisher}
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
            value={editedBook.pages}
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
            value={editedBook.description}
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
            value={editedBook.website}
            placeholder="Website"
            className="w-5/6 px-3 py-1 rounded-lg border-2 border-slate-200"
            onChange={handleInputChange}
          />
          <button
            className="px-5 py-2 rounded text-white bg-blue-500"
            type="submit"
          >
            Ubah Data Buku
          </button>
        </form>
      </div>
    </>
  );
};

export default EditBook;
