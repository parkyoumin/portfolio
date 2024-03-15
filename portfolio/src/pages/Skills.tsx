import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "@css/skills.scss";
import { useTranslation } from "react-i18next";

const Skills = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="skills-wrapper pb-5">
        <Container className="skills pb-5 pt-4">
          <Row className="py-5">
            <Col lg={12} className="title">
              <span># SKILLS</span>
            </Col>
          </Row>

          <Row>
            <Col lg={3} className="skill-title">
              Frontend
            </Col>
            <Col lg={8}>
              <ul>
                <li>HTML5, CSS3, Javascript (ES6+), Typescript</li>
                <li>React, Vue</li>
                <li>Bootstrap, Quasar, antd</li>
              </ul>
            </Col>
          </Row>
          <div className="seperator my-4" />
          <Row>
            <Col lg={3} className="skill-title">
              Backend
            </Col>
            <Col lg={8}>
              <ul>
                <li>Spring, Spring boot</li>
                <li>MSSQL, postgreSQL</li>
              </ul>
            </Col>
          </Row>
          <div className="seperator my-4" />
          <Row>
            <Col lg={3} className="skill-title">
              Certificate
            </Col>
            <Col lg={8}>
              <ul>
                <li>{t(`skills.certificate`)}</li>
              </ul>
            </Col>
          </Row>
          <div className="seperator my-4" />
          <Row>
            <Col lg={3} className="skill-title">
              Tools
            </Col>
            <Col lg={8}>
              <ul>
                <li>Git, Github, GitLab</li>
                <li>Figma</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Skills;
