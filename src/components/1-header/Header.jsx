import { useState, useEffect } from "react";
import "./header.css";
const Header = () => {
  const [showModal, setshowModal] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("currentMode"));
  if (theme === null) setTheme("dark");
  useEffect(() => {
    if (theme === "light") document.body.classList.remove("dark");
    else document.body.classList.remove("light");
    document.body.classList.add(theme);
  }, [theme]);

  return (
    <header id="header" className="flex">
      <button
        onClick={() => {
          setshowModal(true);
        }}
        className="menu icon-menu flex"
      />
      <div />
      <nav>
        <ul className="flex">
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Articles</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Speaking</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>
      <button
        onClick={() => {
          // send value to local storage
          localStorage.setItem(
            "currentMode",
            theme === "dark" ? "light" : "dark"
          );
          // Get value from local storage
          setTheme(localStorage.getItem("currentMode"));
        }}
        className="mode flex"
      >
        <span className={theme === "dark" ? "icon-moon-o" : "icon-sun"}></span>
      </button>
      {showModal && (
        <div className="fixed">
          <ul className="modal ">
            <li>
              <button
                className="icon-close"
                onClick={() => {
                  setshowModal(false);
                }}
              />
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Articles</a>
            </li>
            <li>
              <a href="">Prjects</a>
            </li>
            <li>
              <a href="">Speaking</a>
            </li>
            <li>
              <a href="">Users</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};
export default Header;
