import React, { Component } from "react";
import { Link, useLocation } from "react-router-dom";
import avatar from "../../assets/avatar.png";
import book from "../../assets/book.png";
import project from "../../assets/project.png";
import email from "../../assets/email.png";
import "../../styles/nav.css";

export default function Nav() {
  const location = useLocation();

  const getNavPositionClass = () => {
    switch (location.pathname) {
      case "/":
        return "nav-about";
      case "/skills":
        return "nav-skills";
      case "/projects":
        return "nav-projects";
      case "/contact":
        return "nav-contact";
      default:
        return "";
    }
  };

  const getPageTitle = () => {
    switch (location.pathname) {
      case "/":
        return "ABOUT";
      case "/skills":
        return "SKILLS";
      case "/projects":
        return "PROJECTS";
      case "/contact":
        return "CONTACT";
      default:
        return "";
    }
  };

  const navPositionClass = getNavPositionClass();
  const pageTitle = getPageTitle();

  const isCurrentPage = (navClass) => {
    return navClass === navPositionClass;
  };

  const renderNavLink = (to, imgSrc, altText, navClass) => {
    const isCurent = isCurrentPage(navClass);
    const linkClass = isCurent ? "nav-link current" : "nav-link";

    return (
      <Link to={to} className={linkClass}>
        <img src={imgSrc} alt={altText} />
        {isCurent && <h1 className="page-title">{pageTitle}</h1>}
      </Link>
    );
  };

  return (
    <nav className={`nav ${navPositionClass}`}>
      {renderNavLink(
        "/",
        avatar,
        "avatar icon",
        "nav-about"
      )}
      {renderNavLink(
        "/skills",
        book,
        "book icon",
        "nav-skills"
      )}
      {renderNavLink(
        "/projects",
        project,
        "project icon",
        "nav-projects"
      )}
      {renderNavLink(
        "/contact",
        email,
        "email icon",
        "nav-contact"
      )}
    </nav>
  );
}
