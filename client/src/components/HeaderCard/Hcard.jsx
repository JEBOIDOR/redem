import React from "react";
import { Icon } from "@iconify/react";
import "./Hcard.css";

export const Hcard = ({ count }) => {
  return (
    <section className="header-card">
      <div>
        <h1>HARRY BOOKS</h1>
        <button onClick={() => setShowModal(true)}>
          <Icon icon="tdesign:cart" width="20" height="20" />
          {count}
        </button>
      </div>
    </section>
  );
};
