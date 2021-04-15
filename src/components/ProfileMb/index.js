import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { Col, Row } from "react-bootstrap";

function ProfileMb() {
  return (
    <div>
      <Row className="centro">
        <Col className="pl-4 sty2">
          <h1 id="#profile">Cibele Freitas Goudinho</h1>
        </Col>
      </Row>
      <Row className="pt-2 centro">
        <Col xs={6} md={4}>
          <img src="/images/logo.svg" className={"i"} alt="logo" />
        </Col>
      </Row>
      <Row className="esq">
        <Col className="pt-4 sty2">
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

export default ProfileMb;
