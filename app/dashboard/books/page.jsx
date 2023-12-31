"use client";
import Search from "@/app/ui/dashboard/search/page";
import Link from "next/link";
import styles from "@/app/ui/dashboard/books/books.module.css";
import { api, addTokenToHeader } from "@/app/lib/api";
import { useEffect, useState } from "react";
import { format } from "date-fns";

const BooksPage = () => {
  addTokenToHeader();
  const [books, setBooks] = useState([]);

  const fetchData = async () => {
    try {
      const response = await api.get("/books");
      setBooks(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleDelete = async (bookId) => {
    try {
      const response = await api.delete(`/books/${bookId}`);
      console.log("Book deleted:", response.data);
      fetchData();
    } catch (error) {
      console.error("Delete failed:", error.response.data);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="p-5 rounded-xl mt-5 bg-slate-50">
      <div className="top flex justify-between items-center">
        <Search placeholder="Cari buku" />
        <Link href="/dashboard/books/add">
          <button className="bg-blue-500 px-3 py-2 text-white border-none rounded-lg cursor-pointer">
            Tambah Buku
          </button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className="text-start">ISBN</th>
            <th className="text-start">Judul</th>
            <th className="text-start">Sub Judul</th>
            <th className="text-start">Pencipta</th>
            <th className="text-start">Penerbit</th>
            <th className="text-start">Halaman</th>
            <th className="text-start">Tanggal Terbit</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.isbn}</td>
              <td>{book.title}</td>
              <td>{book.subtitle}</td>
              <td>{book.author}</td>
              <td>{book.publisher}</td>
              <td>{book.pages}</td>
              <td>{format(new Date(book.published), "yyyy/MM/dd")}</td>
              <td>
                <div className="flex gap-4 justify-center">
                  <Link href={`/dashboard/books/${book.id}`}>
                    <button className="py-1 px-4 text-white rounded border-none cursor-pointer bg-yellow-400">
                      Edit
                    </button>
                  </Link>
                  <button
                    className="py-1 px-4 text-white rounded border-none cursor-pointer bg-red-600"
                    onClick={() => handleDelete(book.id)}
                  >
                    Hapus
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BooksPage;
