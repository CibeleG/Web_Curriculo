import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { Col, Row } from "react-bootstrap";

function CoursesMb() {
  return (
    <div>
      <Row className="fonth pb-5">
        <h2 id="#courses">Cursos</h2>
      </Row>
      <Row className="fontbh">
        <Col xs={12} md={8}>
          <h5>
            <b>Inglês avançado</b>
            <br />
            EC, Montreal, Canadá
            <br />
            Janeiro - Fevereiro 2018
            <br />
            <b>IOT, Internet das Coisas</b>
            <br />
            Code IoT
            <br />
            Julho 2020
            <br />
            <b>IOT, Aplicativo para Dispositivos Móveis</b>
            <br />
            Code IoT
            <br />
            Julho 2020
            <br />
            <b>Photoshop intermediário</b>
            <br />
            Udemy
            <br />
            Julho 2020
            <br />
            <b>Treinamento Marketing Digital</b>
            <br />
            Cresça com o Google
            <br />
            Julho 2019
            <br />
            <b>Treinamento Womenwill</b>
            <br />
            Cresça com o Google
            <br />
            Julho 2019
            <br />
            <b>Python intermediário</b>
            <br />
            Udemy
            <br />
            Julho 2020
            <br />
            <b>Francês Básico</b>
            <br />
            Unb Idiomas
            <br />
            Março 2021
            <br />
          </h5>
        </Col>
      </Row>
    </div>
  );
}

export default CoursesMb;
