import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import callImg from "@assets/call.svg";
import dateImg from "@assets/date.svg";
import emailImg from "@assets/email.svg";
import locationImg from "@assets/location.svg";
import personImg from "@assets/person.svg";
import schoolImg from "@assets/school.svg";
import "@css/about-me.scss";

const AboutMe = () => {
  return (
    <>
      <div id="aboutme" className="aboutme-wrapper pb-5">
        <Container className="about-me pb-5 pt-4">
          <Row className="py-5">
            <Col>
              <span className="title">ABOUT ME</span>
            </Col>
          </Row>

          <Row>
            <Col xs={4} className="columns">
              <div className="info-wrapper">
                <img src={personImg} />
                <div className="info-text">
                  <span>
                    이름
                    <br />
                    박유민
                  </span>
                </div>
              </div>
            </Col>
            <Col xs={4} className="columns">
              <div className="info-wrapper">
                <img src={dateImg} />
                <div className="info-text">
                  <span>
                    생년월일
                    <br />
                    98.08.29
                  </span>
                </div>
              </div>
            </Col>
            <Col xs={4} className="columns">
              <div className="info-wrapper">
                <img src={locationImg} />
                <div className="info-text">
                  <span>
                    주소
                    <br />
                    충청남도 아산시
                  </span>
                </div>
              </div>
            </Col>
            <Col xs={4} className="columns pt-5">
              <div className="info-wrapper">
                <img src={callImg} />
                <div className="info-text">
                  <span>
                    연락처
                    <br />
                    010-2349-2812
                  </span>
                </div>
              </div>
            </Col>
            <Col xs={4} className="columns pt-5">
              <div className="info-wrapper">
                <img src={emailImg} />
                <div className="info-text">
                  <span>
                    이메일
                    <br />
                    umin980829@naver.com
                  </span>
                </div>
              </div>
            </Col>
            <Col xs={4} className="columns pt-5">
              <div className="info-wrapper">
                <img src={schoolImg} />
                <div className="info-text">
                  <span>
                    학력
                    <br />
                    순천향대학교(컴퓨터공학과)
                  </span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default AboutMe;
