import React from "react";
import { Container, Row } from "react-bootstrap";
import Academic from "../../components/Academic";
import AcademicMb from "../../components/AcademicMb";
import Courses from "../../components/Courses";
import CoursesMb from "../../components/CoursesMb";
import Profile from "../../components/Profile";
import ProfileMb from "../../components/ProfileMb";
import "./index.css";
import Button from "react-bootstrap/Button";

function ResumeScreen() {
  return (
    <main>
      <Container className="pt-5 mb-5 d-none d-lg-block">
        <Profile />
      </Container>
      <Container className="pt-2 mt-4 d-block d-lg-none">
        <ProfileMb />
      </Container>
      <Container className="pt-5 mt-4 bdr d-none d-lg-block">
        <Academic />
      </Container>
      <Container className="pt-5 mt-4 bdr d-block d-lg-none">
        <AcademicMb />
      </Container>
      <Container className="pt-5 mt-4 bdr d-none d-lg-block">
        <Courses />
      </Container>
      <Container className="pt-5 mt-4 bdr d-block d-lg-none">
        <CoursesMb />
      </Container>
      <Container className="pt-3 pb-2 mt-4 bdr2">
        <Row className="fontek">
          <Button variant="outline-primary" href="/">
            Voltar
          </Button>
        </Row>
      </Container>
    </main>
  );
}

export default ResumeScreen;
