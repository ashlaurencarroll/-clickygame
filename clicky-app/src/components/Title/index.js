import React from "react";
import "./style.css";
import Navbar from 'react-bootstrap/Navbar';
import Container from "react-bootstrap/Container";


function Title(props) {
  return (

    <Navbar fixed="top" expand="lg" variant="light" bg="light">
  <Container>
    <Navbar.Brand>Clicky Game! Click on a character, but dont click twice or you lose!</Navbar.Brand>
  </Container>
</Navbar>

  )}

export default Title;
