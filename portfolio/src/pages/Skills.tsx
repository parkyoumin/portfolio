import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import frontendImg from "@/assets/frontend.svg";
import backendImg from "@assets/backend.svg";
import versionControlImg from "@assets/version-control.svg";
import certificateImg from "@assets/certificate.svg";
import etcImg from "@assets/etc.svg";
import "@css/skills.scss";

const Skills = () => {
  return (
    <>
      <div id="skills" className="skills-wrapper pb-5">
        <Container className="skills pb-5">
          <Row className="pt-5">
            <Col>
              <span className="title">skills</span>
            </Col>
          </Row>

          <Row className="pt-5 justify-content-center">
            <Col xs={3}>
              <div className="skills-box">
                <div className="p-3" style={{ textAlign: "justify" }}>
                  <span>Frontend</span>
                  <div className="under-line my-2"></div>
                  <img src={frontendImg} />
                </div>
              </div>
            </Col>

            <Col xs={{ span: 3, offset: 1 }}>
              <div className="skills-box mb-5">
                <div className="p-3" style={{ textAlign: "justify" }}>
                  <span>Backend</span>
                  <div className="under-line my-2"></div>
                  <img src={backendImg} />
                </div>
              </div>

              <div className="skills-box">
                <div className="p-3" style={{ textAlign: "justify" }}>
                  <span>Version Control</span>
                  <div className="under-line my-2"></div>
                  <img src={versionControlImg} />
                </div>
              </div>
            </Col>

            <Col xs={{ span: 3, offset: 1 }}>
              <div className="skills-box mb-5">
                <div className="p-3" style={{ textAlign: "justify" }}>
                  <span>Certificate</span>
                  <div className="under-line my-2"></div>
                  <img src={certificateImg} />
                </div>
              </div>

              <div className="skills-box">
                <div className="p-3" style={{ textAlign: "justify" }}>
                  <span>ETC</span>
                  <div className="under-line my-2"></div>
                  <img src={etcImg} />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Skills;
