import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logUserOut } from "../redux/actions/userActions";
import { ReactComponent as FacebookIcon } from "../icons/facebook-square.svg";
import { ReactComponent as InstagramIcon } from "../icons/instagram.svg";
import { ReactComponent as YoutubeIcon } from "../icons/youtube-play.svg";
import "./TopNavBar.scss";

const TopNavBar = () => {
  const userState = useSelector((state) => state.user);
  const dispatch = useDispatch();
  return (
    <nav className="top-navbar">
      <div className="top-navbar__socials">
        <Link to="#">
          <FacebookIcon className="top-navbar__social-icon" />
        </Link>
        <Link to="#">
          <InstagramIcon className="top-navbar__social-icon" />
        </Link>
        <Link to="#">
          <YoutubeIcon className="top-navbar__social-icon youtube-icon" />
        </Link>
      </div>
      <ul className="top-navbar__list">
        {userState.admin && (
          <li>
            <NavLink exact to="/seeds/new">
              Add seed
            </NavLink>
          </li>
        )}
        {!userState.isAuth ? (
          <li>
            <NavLink exact to="/login">
              Login
            </NavLink>
          </li>
        ) : (
          <li>
            <NavLink exact to="#" onClick={() => dispatch(logUserOut())}>
              Logout
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default TopNavBar;
