import React from "react";
import "./Modal.css";

export const Modal = ({
  cart,
  onClose,
  handleCleanCart,
  setCart,
  setCount,
  count,
}) => {
  const totalPrice = cart.reduce((total, book) => total + book.price, 0);

  const handleRemoveBook = (book) => {
    const updatedCart = cart.filter((cartBook) => book.id !== cartBook.id);
    setCart(updatedCart);
  };

  return (
    <section className="modal">
      <div className="modal-content">
        <button onClick={onClose}>X</button>
        <h1>MODAL CONTENT</h1>
        {cart.map((book) => (
          <div key={book.id}>
            <button
              onClick={() => {
                handleRemoveBook(book);
                setCount(count - 1);
              }}
            >
              Eliminar Producto
            </button>
            <h1 className="book-title">{book.libro}</h1>
            <p className="book-price">$ {book.price}</p>
            <button>▲</button>
            <button>▼</button>
          </div>
        ))}
        {cart.length ? (
          <div>
            <button onClick={handleCleanCart}>Limpiar Carrito</button>
            <p>TOTAL: {totalPrice}</p>
          </div>
        ) : (
          <h1>Carrito vacío</h1>
        )}
      </div>
    </section>
  );
};
