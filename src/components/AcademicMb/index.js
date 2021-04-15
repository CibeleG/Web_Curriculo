import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { Col, Row } from "react-bootstrap";

function AcademicMb() {
  return (
    <div>
      <Row className="fonth pb-5">
        <h2 id="#academic">Formação Acadêmica</h2>
      </Row>
      <Row className="fontbh">
        <Col xs={12} md={8}>
          <h5>
            <b>Ensino fundamental e médio</b>
            <br />
            Instituto Dom Barreto
            <br />
            Finalizado em 2018
            <br />
            <b>Bacharelado em Engenharia de Software</b>
            <br />
            Universidade de Brasília
            <br />
            2018 - Presente
          </h5>
        </Col>
      </Row>
    </div>
  );
}

export default AcademicMb;
