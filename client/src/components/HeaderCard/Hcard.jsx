import React from "react";
import { Icon } from "@iconify/react";

export const Hcard = ({ count }) => {
  return (
    <div>
      <button>
        <Icon icon="tdesign:cart" width="20" height="20" />
        {count}
      </button>
    </div>
  );
};
