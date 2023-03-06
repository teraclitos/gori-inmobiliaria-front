import { React, useState, useEffect } from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import "../styles/all.css";
import ContactBtn from "./ContactBtn";
import Logout from "./Logout";
import { Link, useNavigate } from "react-router-dom";

const NavbarC = ({
  login,
  setLogin,
  logout,
  setLogout,
  changeData,
  setChangeData,
  changeLog,
  setChangeLog,
}) => {
  const token = JSON.parse(localStorage.getItem("token"));
  const navigate = useNavigate();

  const togler = document.querySelector(".navbar-toggler-icon");

  const [open, setOpen] = useState(null);

  const handleTogler = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (logout) {
      navigate("/");
    }
  }, [changeLog]);

  useEffect(() => {
    if (open) {
      togler.classList.add("icon-togler");
    } else if (open === false) {
      togler.classList.remove("icon-togler");
    }
  }, [open]);
  return (
    <>
      <Navbar className=" nav-bar " collapseOnSelect expand="lg" sticky="top">
        <Container className="nav-bar-container">
          <Navbar.Brand href="/">
            <img
              className="img-logo"
              src="https://res.cloudinary.com/duuwqmpmn/image/upload/v1677695153/gori-inmobiliaria/logo-gori-removebg-preview_1_ulsalf.png"
              alt="logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle
            onClick={() => {
              handleTogler();
            }}
            aria-controls="responsive-navbar-nav"
          />

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="d-flex ms-auto align-items-center link-nav-container  py-lg-0">
              <Nav.Link className="me-lg-5 nav-bar-link" href="/">
                <span className="nav-bar-link">Inicio</span>
              </Nav.Link>
              <Nav.Link className="me-lg-5 " href="/propiedades">
                <span className="nav-bar-link">Propiedades</span>
              </Nav.Link>
              {token && (
                <Nav.Link className="me-lg-5 " href="/admingori/main">
                  <span className="nav-bar-link">Crear propiedad</span>
                </Nav.Link>
              )}

              {token ? (
                <div className="mt-2 mt-lg-0">
                  <Logout
                    login={login}
                    setLogin={setLogin}
                    logout={logout}
                    setLogout={setLogout}
                    changeLog={changeLog}
                    setChangeLog={setChangeLog}
                  />
                </div>
              ) : (
                <Nav.Link className="mt-1 mt-lg-0" href="#pricing">
                  <ContactBtn />
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarC;
