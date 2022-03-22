import React from "react";
import { useMediaQuery } from "react-responsive";

import "../style/navBar.css";
export const Navbar = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  return (
    <div className="navbar">
      <div className="navbar__right">
        <h6>logo</h6>
      </div>
      <div className="navBar__middle">
        <input
          type="text"
          maxLength="500"
          name="search"
          id="search"
          placeholder="What are you looking for ?"
          className=""
          aria-autocomplete="list"
          autoComplete="off"
          autoCapitalize="none"
          spellCheck="false"
        />
      </div>
      <div className="navBar__left">
        <span className="navBar__cart">
          <svg width="20" height="20" viewBox="0 0 18 18">
            <g fill="#FFF" fill-rule="nonzero">
              <path d="M0 .75A.75.75 0 0 1 .75 0h.558c.95 0 1.52.639 1.845 1.233.217.396.374.855.497 1.271a1.29 1.29 0 0 1 .1-.004h12.498c.83 0 1.43.794 1.202 1.593l-1.828 6.409a2.75 2.75 0 0 1-2.644 1.996H7.03a2.75 2.75 0 0 1-2.652-2.022l-.76-2.772-1.26-4.248-.001-.008c-.156-.567-.302-1.098-.52-1.494-.21-.385-.378-.454-.529-.454H.75A.75.75 0 0 1 0 .75zM6.5 17.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM13.5 17.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"></path>
            </g>
          </svg>
        </span>

        <span class="navBar__cart__count" id="cart_count_notification">
          0
        </span>
      </div>
    </div>
  );
};
