import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { Col, Row } from "react-bootstrap";

function Academic() {
  return (
    <div>
      <Row className="font pb-5">
        <h2 id="academic">Formação Acadêmica</h2>
      </Row>
      <Row className="fontb">
        <Col xs={12} md={8}>
          <h5>
            <b>Ensino fundamental e médio</b>
            <br />
            Instituto Dom Barreto
            <br />
            <b>Bacharelado em Engenharia de Software</b>
            <br />
            Universidade de Brasília
          </h5>
        </Col>
        <Col xs={6} md={4} className="fontc">
          <h5>
            Finalizado em 2018
            <br />
            <br />
            2018 - Presente
          </h5>
        </Col>
      </Row>
    </div>
  );
}

export default Academic;
