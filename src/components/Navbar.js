import React from "react";
import { useMediaQuery } from "react-responsive";
import serachIcon from "../assests/svg/search.svg";
import "../style/navBar.css";
export const Navbar = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 804px)" });
  return (
    <div className="navbar">
      <div className="space"></div>
      <div className="navbar__top">
        <h6>logo</h6>
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
            <svg width="20px" height="20px" viewBox="0 0 20 20">
              <title>Group 4</title>
              <g
                id="Header-Navigation-Journey"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                <g
                  id="02.1_Header-and-Navigation"
                  transform="translate(-835.000000, -29.000000)"
                >
                  <g id="Group-24" transform="translate(0.000000, -0.000000)">
                    <g
                      id="Group-5"
                      transform="translate(325.000000, 19.000000)"
                    >
                      <g
                        id="magnifying-glass"
                        transform="translate(510.000000, 10.000000)"
                      >
                        <rect
                          id="Rectangle"
                          x="0"
                          y="0"
                          width="20"
                          height="20"
                        ></rect>
                        <circle
                          id="Oval"
                          stroke="#000000"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          cx="9.0625"
                          cy="9.0625"
                          r="6.5625"
                        ></circle>
                        <line
                          x1="13.7026219"
                          y1="13.7031555"
                          x2="17.4995422"
                          y2="17.5000766"
                          id="Path"
                          stroke="#000000"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></line>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </span>
        </div>
      </div>
      <div className="space"></div>
      <div className="navBar__bottom">
        <div className="navBar__user">
          <svg width="32px" height="32px" viewBox="0 0 32 32">
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
        </div>
        <div className="navBar__cart">
          <span className="navBar__cart__svg">
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
      {isDesktopOrLaptop ? (
        ""
      ) : (
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
              <img src={serachIcon} alt="" />
            </span>
          </div>
        </div>
      )}
      <div className="space"></div>
    </div>
  );
};
