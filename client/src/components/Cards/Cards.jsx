import React, { useState, useEffect } from "react";

export const Cards = ({ count, setCount }) => {
  const URL = "https://harry-potter-api.onrender.com/libros";
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(URL);
        if (!data) {
          throw new Error("algo salio mal");
        }
        const response = await data.json();
        const booksWithNewInfo = response.map((book) => {
          return {
            ...book,
            image: "url",
            stock: Math.floor(Math.random() * 15),
            price: "30",
          };
        });
        setBooks(booksWithNewInfo);
        console.log(booksWithNewInfo);
      } catch (error) {
        console.error("algo ha salido mal", error);
      }
    };
    fetchData();
  }, []);

  return (
    <section className="books-container">
      {books.map((book) => (
        <div key={book.id}>
          <h1>{book.libro}</h1>
          <p>{book.price}</p>
          <p>{book.stock}</p>
          <button
            onClick={() => {
              setCount((count += 1));
            }}
          >
            Comprar!!
          </button>
        </div>
      ))}
    </section>
  );
};
