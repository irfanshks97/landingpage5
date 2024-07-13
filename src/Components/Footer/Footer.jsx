import React from "react";
import "./Footer.css";
export default function Footer() {
  return (
    <footer className="w-100">
      <ul className="d-flex justify-content-between">
        <li className="">
          <ul className="d-flex pt-2 first_ul">
            <li className="me-2">
              <a href="#" className="text-decoration-none">
                Trademarks
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none">
                Privacy & Cookies
              </a>
            </li>
          </ul>
        </li>
        <li>
          <ul className="me-5">
            <li>
              <a href="#" className="text-decoration-none">
                Microsoft
              </a>
            </li>
            <li style={{ color: "#b7b5b4", fontSize: "15px" }}>
              &copy; 2016 Microsoft
            </li>
          </ul>
        </li>
      </ul>
    </footer>
  );
}
