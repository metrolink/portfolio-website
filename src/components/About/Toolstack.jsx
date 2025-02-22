import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiPostman,
  SiSlack,
  SiQt,
  SiIntellijidea
} from "react-icons/si";

import { DiVisualstudio, DiWindows } from "react-icons/di";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" title="Windows">
        <DiWindows />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="QT5">
        <SiQt />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="IntelliJ">
        <SiIntellijidea />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="VS Code">
        <DiVisualstudio />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Postman">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Slack">
        <SiSlack />
      </Col>
      
      
    </Row>
  );
}

export default Toolstack;
