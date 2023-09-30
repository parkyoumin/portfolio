import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import sindohImg from "@assets/sindoh.png";
import "@css/career.scss";

const Career = () => {
  return (
    <>
      <div id="career" className="career-wrapper">
        <Container className="career pb-5 pt-4">
          <Row className="py-5">
            <Col>
              <span className="title"># CAREER</span>
            </Col>
          </Row>

          <Row className="p-4 mb-4">
            <Col lg={{ span: 2, offset: 1 }} className="image-wrapper">
              <img src={sindohImg} className="pb-5" />
            </Col>
            <Col lg={8} className="text-wrapper px-5">
              <span className="company-title">신도리코</span>
              <br />
              <span className="date">2022.06 ~ 2023.07</span>
              <br />
              <br />
              <span>
                복합기 솔루션 풀스택 웹 개발자로서 기존 솔루션 유지보수 및
                고객사 특화 개발 업무(Spring, JAVA, JSP, MyBatis), 신규 솔루션
                프론트 개발 업무(Vue.js)를 담당했습니다.{" "}
              </span>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Career;
