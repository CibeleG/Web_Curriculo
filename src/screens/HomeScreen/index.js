import React from "react";
import Button from "react-bootstrap/Button";
import { Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

function HomeScreen() {
  return (
    <main>
      <Container>
        <Row className="fonte">
          <h2>Bem vinde ao meu Web Currículo!</h2>
        </Row>
        <Row className="fonte">
          <h2>Aqui você vai encontrar algumas informações sobre mim!</h2>
        </Row>
        <Row className="fonte">
          <Button variant="outline-primary" href="/curriculo">
            Visualizar
          </Button>
        </Row>
      </Container>
    </main>
  );
}

export default HomeScreen;
