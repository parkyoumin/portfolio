import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ExampleImg from "@assets/project.png";
import ExampleImg2 from "@assets/project2.png";
import ExampleImg3 from "@assets/project3.png";
import LabelImg from "@assets/label.svg";
import ImageSlider from "@components/ImageSlider";
import Button from "react-bootstrap/Button";
import "@css/projects.scss";

const images: string[] = [ExampleImg, ExampleImg2, ExampleImg3];

const Projects = () => {
  return (
    <>
      <div id="projects" className="projects-wrapper pb-5">
        <Container className="projects pb-5 pt-4">
          <Row className="py-5">
            <Col>
              <span className="title">PROJECTS</span>
            </Col>
          </Row>

          <Row className="project p-4 m-2">
            <Col xs={12} className="pb-2">
              <span className="project-title">포트폴리오</span>
            </Col>

            <Col xs={12} className="pb-4">
              <span className="date">2023.09 (개인 프로젝트)</span>
            </Col>

            <Col lg={6}>
              <ImageSlider images={images}></ImageSlider>
            </Col>

            <Col lg={6}>
              <Row>
                <Col xs={12} style={{ textAlign: "start" }}>
                  <span>
                    <b>포트폴리오 용도</b>로 제작한 웹사이트입니다. 저를
                    소개하기에 도움이 되고자 진행한 프로젝트입니다.
                  </span>
                  <br />
                  <span>
                    지금까지 React를 사용해 보지 않아 <b>React 학습</b>과 개발을
                    병행하여 진행했습니다. 이를 통해 React 학습뿐만 아니라{" "}
                    <b>typescript 학습</b>도 진행하였고 더 나아가{" "}
                    <b>jenkins를 사용해 배포하는 경험</b>을 해볼 수 있었습니다.{" "}
                  </span>
                  <span>
                    또한 <b>Bootstrap을 사용하여 반응형 웹앱</b>을 구현했습니다.
                  </span>
                  <br />
                  <Button variant="warning" className="mt-3">
                    VIDEO 보기
                  </Button>
                </Col>
              </Row>
              <hr />

              <Row>
                <Col lg={3}>
                  <div style={{ display: "flex", alignItems: "flex-start" }}>
                    <img src={LabelImg} style={{ width: "20px" }} />
                    <span className="px-1">주요기능</span>
                  </div>
                </Col>
                <Col lg={9} style={{ textAlign: "start" }} className="pb-3">
                  <span>
                    간단한 자기소개, 인적 사항, 기술 스택, 프로젝트 경험, 업무
                    경력
                  </span>
                </Col>

                <Col lg={3}>
                  <div style={{ display: "flex", alignItems: "flex-start" }}>
                    <img src={LabelImg} style={{ width: "20px" }} />
                    <span className="px-1">GitHub</span>
                  </div>
                </Col>
                <Col lg={9} style={{ textAlign: "start" }} className="pb-3">
                  <a href="https://github.com/parkyoumin/portfolio_repo">
                    https://github.com/parkyoumin/portfolio_repo
                  </a>
                </Col>

                <Col lg={3}>
                  <div style={{ display: "flex", alignItems: "flex-start" }}>
                    <img src={LabelImg} style={{ width: "20px" }} />
                    <span className="px-1">URL</span>
                  </div>
                </Col>
                <Col lg={9} style={{ textAlign: "start" }} className="pb-3">
                  <a href="https://parkyoumin.github.io/">
                    https://parkyoumin.github.io/
                  </a>
                </Col>

                <Col lg={3}>
                  <div style={{ display: "flex", alignItems: "flex-start" }}>
                    <img src={LabelImg} style={{ width: "20px" }} />
                    <span className="px-1">Frontend</span>
                  </div>
                </Col>
                <Col lg={9} style={{ textAlign: "start" }} className="pb-3">
                  <span>React, TypeScript, Vite, Sass, BootStrap</span>
                </Col>

                <Col lg={3}>
                  <div style={{ display: "flex", alignItems: "flex-start" }}>
                    <img src={LabelImg} style={{ width: "20px" }} />
                    <span className="px-1">CI</span>
                  </div>
                </Col>
                <Col lg={9} style={{ textAlign: "start" }} className="pb-3">
                  <span>Jenkins</span>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Projects;
