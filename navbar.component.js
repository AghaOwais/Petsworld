//import logo from "../../assets/img/logo.png";
import Sidebar from "../Sidebar/Sidebar";
import "./navbar.component.css";
import React from "react";
import Loginsignup from '../components/LoginSignup/Loginsignup'


function MainNavbar() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <nav className="navbar navbar_main navbar-expand bg-light">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "99%",
          }}
        >
          <div
            style={{
              width: "50%",
              alignItems: "center",
              display: "flex",
              justifyContent: "start",
            }}
          >
            <a
              style={{
                color: "inherit",
                textDecoration: "none",
              }}
              href="/home"
              className="navBarLogo"
            >
              <img
                alt=""
                style={{ height: "100%", width: "100%" }}
                src={logo}
              ></img>
            </a>
            {/* <img className="navBarLogo" src={logo}></img> */}
          </div>
          <div
            style={{
              width: "50%",
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
            }}
          >
            <div
              style={{ marginRight: "20px" }}
              className="hover-underline-animation hover-color-change"
            >
              <a
                style={{
                  display: "flex",
                  color: "inherit",
                  textDecoration: "none",
                }}
                href="/shop"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-bag"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                </svg>
                <h5
                  style={{ marginLeft: "3px", marginRight: "0" }}
                  className="nav_login hover-underline-animation"
                >
                  SHOP
                </h5>
              </a>
            </div>
            <h5
              className="nav_login hover-underline-animation hover-color-change"
              onClick={() => setModalShow(true)}
            >
              {/* AREEB JAVAID */}
              LOGIN / SIGNUP
            </h5>
            <Sidebar />
          </div>
        </div>
      </nav>

      <Loginsignup show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}

export default MainNavbar;
