import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import CardLordHighSchool from "../../Assets/Projects/CardLordHighSchool.PNG";
import ReminderBot from "../../Assets/Projects/discord-mark-blue.svg";
import CakeImg from "../../Assets/Projects/cake.jpg";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent Works
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CardLordHighSchool}
              isBlog={false}
              title="Cardlord's High School"
              description="Video game created with a team of programmers and Animators for a school project. In this RPG game, you play as a group of high school teenagers that have to fight against teachers and classmates in a turn-based combat system."
              ghLink="https://github.com/benesle/CardLord_HighSchool"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              //imgPath={bitsOfCode}
              isBlog={false}
              title="Specifying actor based computer games"
              description="My master thesis about combining concurrent actors and video games to create a concurrent video game in Scala."
              ghLink="https://github.com/metrolink/GameLang"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CakeImg}
              isBlog={false}
              title="CakeMaker API"
              description="API for a bakery project I made for a family member"
              ghLink="https://github.com/metrolink/CakeMaker-API"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ReminderBot}
              isBlog={false}
              title="RemindMe Bot"
              description="A discord bot I made for my friend group. It's purpose is to send reminders to friends about events that is coming up"
              discordLink="https://discord.com/api/oauth2/authorize?client_id=1124302450971639879&permissions=3283503544384&scope=bot+applications.commands/"              
              ghLink="https://github.com/metrolink/remind_bot"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              YTvideo="https://youtu.be/Bl7J_QO0ZJI"
              isBlog={false}
              title="Physics based simulation"
              description="Showcase of physics based simulation where a ball is rolling on a hill"
              ghLink="https://github.com/metrolink/VSIM_Folder2"
            />
          </Col> 
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
