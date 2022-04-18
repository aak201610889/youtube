import React, { useState } from 'react'
import './Header.css'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import VideoCallIcon from '@material-ui/icons/VideoCall'
import AppsIcon from '@material-ui/icons/Apps'
import NotificationsIcon from '@material-ui/icons/Notifications'
import Avatar from '@material-ui/core/Avatar'
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness5Icon from "@material-ui/icons/Brightness5";
import { Link } from 'react-router-dom'

function Header({
  showleft,
  setshowleft,
  inputSearch,
  setInputSearch,
  dark,
  setdark,
}) {
  const [input, setinput] = useState("");
  const searchhandller = () => {
    setInputSearch(input);
  };


  return (
    <div className={dark ? "header__dark" : "header"}>
      <div className="header__left">
        <MenuIcon
          className={dark ? "menu__dark" : ""}
          onClick={() => {
            setshowleft(!showleft);
          }}
        />
        <Link to="/">
          <img className="header__logo" src="images/logo.gif" alt="" />
        </Link>
      </div>
      <div className={dark ? "header__input__dark" : "header__input"}>
        <input
          value={input}
          onChange={(e) => setinput(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              searchhandller();
            }
          }}
          
          type="text"
          placeholder="Search"
        />
        <Link to={`${inputSearch}`}>
          <SearchIcon
            className={
              dark ? "header__inputButton__dark" : "header__inputButton"
            }
            onClick={searchhandller}
          />
        </Link>
      </div>
      <div className="showingresone">
        {dark ? (
          <Brightness5Icon
            className={dark ? "header__icon__dark" : "header__icon"}
            onClick={() => {
              setdark(false);
            }}
          />
        ) : (
          <Brightness4Icon
            className={dark ? "header__icon__dark" : "header__icon"}
            onClick={() => {
              setdark(true);
            }}
          />
        )}
        
      </div>
      <div className="header__right">
        {dark ? (
          <Brightness5Icon
            className={dark ? "header__icon__dark" : "header__icon"}
            onClick={() => {
              setdark(false);
            }}
          />
        ) : (
          <Brightness4Icon
            className={dark ? "header__icon__dark" : "header__icon"}
            onClick={() => {
              setdark(true);
            }}
          />
        )}

        <VideoCallIcon
          className={dark ? "header__icon__dark" : "header__icon"}
        />
        <AppsIcon className={dark ? "header__icon__dark" : "header__icon"} />
        <NotificationsIcon
          className={dark ? "header__icon__dark" : "header__icon"}
        />
        <Avatar src="images/pic.jpg" />
      </div>
    </div>
  );
}

export default Header
