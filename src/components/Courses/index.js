import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { Col, Row } from "react-bootstrap";

function Courses() {
  return (
    <div>
      <Row className="font pb-5">
        <h2 id="courses">Cursos</h2>
      </Row>
      <Row className="fontb">
        <Col xs={12} md={8}>
          <h5>
            <b>Inglês avançado</b>
            <br />
            EC, Montreal, Canadá
            <br />
            <br />
            <b>IOT, Internet das Coisas</b>
            <br />
            Code IoT
            <br />
            <br />
            <b>IOT, Aplicativo para Dispositivos Móveis</b>
            <br />
            Code IoT
            <br />
            <br />
            <b>Photoshop intermediário</b>
            <br />
            Udemy
            <br />
            <br />
            <b>Treinamento Marketing Digital</b>
            <br />
            Cresça com o Google
            <br />
            <br />
            <b>Treinamento Womenwill</b>
            <br />
            Cresça com o Google
            <br />
            <br />
            <b>Python intermediário</b>
            <br />
            Udemy
            <br />
            <br />
            <b>Francês Básico</b>
            <br />
            Unb Idiomas
            <br />
            <br />
          </h5>
        </Col>
        <Col xs={6} md={4} className="fontc">
          <h5>
            Janeiro - Fevereiro 2018
            <br />
            <br />
            <br />
            Julho 2020
            <br />
            <br />
            <br />
            Julho 2020
            <br />
            <br />
            <br />
            Julho 2020
            <br />
            <br />
            <br />
            Julho 2019
            <br />
            <br />
            <br />
            Julho 2019
            <br />
            <br />
            <br />
            Julho 2020
            <br />
            <br />
            <br />
            Março 2021
          </h5>
        </Col>
      </Row>
    </div>
  );
}

export default Courses;
