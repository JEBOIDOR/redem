import React, { useState, useEffect } from "react";
import "./Cards.css";

export const Cards = ({ count, setCount }) => {
  const URL = "https://harry-potter-api.onrender.com/libros";
  const urlPortadas = "../json/portadas.json";
  const [books, setBooks] = useState([]);
  const [portadas, setPortadas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(URL);
        if (!response.ok) {
          throw new Error("algo salio mal");
        }
        const data = await response.json();
        const booksWithNewInfo = data.map((book) => {
          return {
            ...book,
            stock: Math.floor(Math.random() * 15),
            price: Math.floor(Math.random() * 300) + 50,
          };
        });
        setBooks(booksWithNewInfo);
        console.log(booksWithNewInfo);

        const portadas = await fetch(urlPortadas);
        if (!portadas.ok) {
          throw new Error("Error al obtener las portadas");
        }
        const dataPortadas = await portadas.json();

        setPortadas(dataPortadas);
        console.log(dataPortadas);
      } catch (error) {
        console.error("algo ha salido mal", error);
      }
    };
    fetchData();
  }, []);

  return (
    <section className="books-container">
      {books.map((book) => (
        <div className="book" key={book.id}>
          {portadas.length && (
            <img
              src={portadas.find((portada) => portada.id === book.id).portada}
              alt=""
              className="book-cover"
              width={200}
              height={300}
            />
          )}
          <div key={book.id} className="book-info">
            <h1 className="book-title">{book.libro}</h1>
            <p className="book-price">$ {book.price}</p>
            {book.stock === 0 ? (
              <p>AGOTADO</p>
            ) : (
              <div>
                <p className="book-stock">STOCK {book.stock}</p>
                <button
                  onClick={() => {
                    setCount((count += 1));
                  }}
                >
                  AÑADIR AL CARRITO
                </button>
              </div>
            )}
          </div>
        </div>
      ))}
    </section>
  );
};
