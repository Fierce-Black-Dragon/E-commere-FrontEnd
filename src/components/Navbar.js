import Hamburger from "hamburger-react";
import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import searchIcon from "../assets/images/search.png";
import logo from "../assets/images/logo.png";
import "../style/navBar.css";
export const Navbar = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1004px)",
  });
  // const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 600px)" });
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="navbar">
      <div className="space"></div>
      <div className="navbar__top">
        <img src={logo} alt="" height={30} />
        <div className="navBAr__menu">
          <Hamburger size={20} toggled={isOpen} toggle={setOpen} />
          {isDesktopOrLaptop ? <h4>Menu</h4> : ""}
        </div>
      </div>
      <div className="space"></div>
      <div
        className={
          isTabletOrMobile ? "navBar__search__bottom" : "navBar__middle"
        }
      >
        <div className="navBAr__middle__search">
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
          <span class="icon">
            <span class="icon">
              <img src={searchIcon} alt="" />
            </span>
          </span>
        </div>
      </div>
      <div className="space"></div>
      <div className="navBar__bottom">
        <span className="user">
          <svg width="25" height="25" viewBox="0 0 32 32">
            <g
              id="Header-Navigation-Journey"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
            >
              <g
                id="White"
                transform="translate(0.000000, -0.000000)"
                fill="#FFFFFF"
              >
                <path
                  d="M20.180991,21.3859092 C18.8196414,20.8180231 14.1158063,20.8180231 12.8185945,21.3859092 C9.99034533,22.3006596 7.60012118,24.2287112 6.10754752,26.7993114 C5.96435548,27.0467795 5.9641374,27.3518589 6.10697549,27.5995315 C6.24981358,27.847204 6.51398531,27.9998042 6.79989512,27.9998 L26.1998303,28 C26.4857463,28 26.7499291,27.847421 26.89277,27.599743 C27.035611,27.3520651 27.0353849,27.0469773 26.8921769,26.7995113 C25.3996102,24.2288015 23.0093267,22.3006711 20.180991,21.3859092 Z"
                  id="Path"
                  fill-rule="nonzero"
                ></path>
                <circle id="Oval" cx="16.5" cy="13.5" r="5.5"></circle>
              </g>
            </g>
          </svg>
        </span>

        <div className="navBar__cart">
          <span className="navBar__cart__svg" onClick>
            <svg width="18" height="18" viewBox="0 0 18 18">
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

      <div className="space"></div>
    </div>
  );
};
