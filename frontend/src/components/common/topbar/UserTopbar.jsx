import React from "react";
import "./usertopbar.css";
import { Link, useMatch } from "react-router-dom";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import HomeIcon from "@mui/icons-material/Home";
import LibraryBooksRoundedIcon from "@mui/icons-material/LibraryBooksRounded";

const Topbar = ({ logedinuser }) => {
  const navLinks = [
    { link_to: "home", title: "Home", icon: HomeIcon },
    {
      link_to: "reading-list",
      title: "ReadingList",
      icon: BookmarkBorderIcon,
    },
    { link_to: "books", title: "Books", icon: LibraryBooksRoundedIcon },
  ];

  return (
    <div className="user-topbar">
      <div className="container flex-between">
        <div className="left flex-start">
          <img
            src="https://cdn.prod.website-files.com/652e0352ad50feae8734edac/652e0352ad50feae8734f392_favicon.png"
            alt=""
          />
          <h1 className="dark-text-gradient">Ello for Teachers</h1>

          <div className="valid-user">
            {navLinks.map((navigationLink, index) => {
              const isActive = useMatch(navigationLink.link_to);

              return (
                <Link
                  to={navigationLink.link_to}
                  key={index}
                  className={`holder ${isActive ? "active-link" : ""}`}
                >
                  <span>{navigationLink.title}</span>
                </Link>
              );
            })}
          </div>
        </div>
        <div className="right">
          <div className="no-user">
            <button className="dark-btn">Learn More</button>
            <button className="light-btn">Log Out</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
