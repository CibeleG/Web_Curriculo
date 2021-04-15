import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { useHistory } from "react-router-dom";
import { Row } from "react-bootstrap";

function TopBar() {
  const history = useHistory();
  const inHome = history.location.pathname.indexOf("curriculo") === -1;
  const ChangeTitle = (inHome) => {
    if (inHome) {
      return ["/curriculo", "Currículo"];
    } else {
      return ["/", "Início"];
    }
  };

  return (
    <div className="Nav">
      <Navbar expand="lg">
        <Navbar.Brand className={!inHome ? "d-none" : ""}>
          <img src="/images/logo.svg" className={"img"} alt="logo" />
        </Navbar.Brand>
        <Nav className="title">
          <Nav.Link href={ChangeTitle(inHome)[0]}>
            {ChangeTitle(inHome)[1]}
          </Nav.Link>
        </Nav>
        <Navbar.Collapse id="collapse">
          <Nav className={inHome ? "d-none" : "d-none d-lg-block subtitle"}>
            <Row>
              <Nav.Link href="#profile">Perfil</Nav.Link>
              <Nav.Link href="#academic">Formação Acadêmica</Nav.Link>
              <Nav.Link href="#courses">Cursos</Nav.Link>
            </Row>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default TopBar;
