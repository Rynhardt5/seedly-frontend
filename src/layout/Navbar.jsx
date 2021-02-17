import React, { useState, useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useRouteMatch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { searchQuery, clearFilteredItems } from "../redux/actions/seedActions";
import Logo from "../components/UI-components/Logo";
import { ReactComponent as CartIcon } from "../icons/shopping-bag.svg";
import { ReactComponent as CrossIcon } from "../icons/cross.svg";
import { ReactComponent as SearchIcon } from "../icons/search.svg";
import { useDebouncedCallback } from "use-debounce";

import "./Navbar.scss";

const Navbar = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const inputEl = useRef(null);

  useEffect(() => {
    if (query === "") {
      dispatch(clearFilteredItems());
    }
  }, [dispatch, query]);

  const debounced = useDebouncedCallback(
    (query) => {
      if (query !== "") {
        dispatch(searchQuery(query));
      }
    },
    // delay in ms
    300
  );

  const clearInput = () => {
    setQuery("");
    inputEl.current.value = "";
    dispatch(clearFilteredItems());
  };

  const onSearchQueryChangeHandler = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(searchQuery(query));
  };

  const match = useRouteMatch({
    path: "/seeds",
    strict: true,
    sensitive: true,
  });

  return (
    <nav className="main-navbar">
      <h1 className="main-navbar__logo">
        <Link to="/seeds">
          <Logo />
        </Link>
      </h1>
      {match && match.isExact && (
        <form onSubmit={onSubmitHandler} className="main-navbar__search-box">
          <input
            className="main-navbar__search-box__input"
            value={query}
            placeholder="Search and sow"
            onChange={onSearchQueryChangeHandler}
            onKeyUp={() => debounced.callback(query)}
            type="text"
            ref={inputEl}
          />
          <div
            className="main-navbar__search-box__icon"
            style={{ cursor: "text" }}
            onClick={() => {
              if (inputEl) {
                inputEl.current.focus();
              }
            }}
          >
            <SearchIcon />
          </div>
          {query !== "" && (
            <div
              className="main-navbar__search-box__close-icon"
              onClick={clearInput}
            >
              <CrossIcon />
            </div>
          )}
        </form>
      )}

      <ul className="main-navbar__list">
        <li>
          <NavLink to="/seeds">Shop</NavLink>
        </li>
        <li>
          <Link className="cart-icon__link" to="/cart">
            <CartIcon />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
