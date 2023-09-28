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
        <Container className="projects pb-5">
          <Row className="py-5">
            <Col>
              <span className="title">projects</span>
            </Col>
          </Row>

          <Row className="project p-4">
            <Col xs={12} className="pb-2">
              <span className="title">포트폴리오</span>
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
                    지금까지 React를 사용해보지 않아 <b>React 학습</b>과 개발을
                    병행하여 진행했습니다. 이를 통해 React 학습뿐만 아니라
                    <b>typescript 학습</b>도 진행하였고 더 나아가{" "}
                    <b>jenkins를 사용해 배포하는 경험</b>을 해볼 수 있었습니다.{" "}
                  </span>
                  <br />
                  <Button variant="warning">VIDEO</Button>
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
                <Col lg={9}>
                  <p>
                    자주 부르는 노래의 가수명 및 제목 기록하기, 간편한 분류를
                    위해 각 노래에 태깅하기, 노래의 가수명 및 제목으로 검색해
                    보기, 가수 또는 태그에 따라 분류해 보기
                  </p>
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
