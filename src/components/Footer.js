import React from "react";
//import Button from "react-bootstrap/Button"
import { Container, Row, Col, Button} from "react-bootstrap";
import {
  AiFillGithub,
  AiFillStar
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { CgGitFork } from "react-icons/cg";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Template provided by Soumyajit Behera
                <Button
                href="https://github.com/soumyajit4419/Portfolio"
                target="_blank"
                className="fork-btn-inner"
              >
                <AiFillGithub/>
                <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                <AiFillStar style={{ fontSize: "1.1em" }} />
              </Button></h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} Tor Andreas Røsæg</h3>
        </Col>
        
        <Col md="4" className="footer-copywright">
        <a
                  href="https://www.linkedin.com/in/torrosag/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>

                <a
                  href="https://github.com/metrolink"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
