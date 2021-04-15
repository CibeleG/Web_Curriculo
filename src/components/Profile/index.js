import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { Col, Row } from "react-bootstrap";

function Profile() {
  return (
    <div>
      <Row>
        <Col xs={6} md={4}>
          <img src="/images/logo.svg" className={"imagem"} alt="logo" />
        </Col>
        <Col className="pt-4 pl-4 sty">
          <h1 id="#profile">Cibele Freitas Goudinho</h1>
          <h5>
            Residência: Quadra 1, Nº 1700 - Residencial Gamaggiore St. Leste,
            Gama - DF, 72445010
            <br /> Telefone: (86) 999957787 <br />
            E-mail: cibelegoudinho13@gmail.com
          </h5>
        </Col>
      </Row>
    </div>
  );
}

export default Profile;
