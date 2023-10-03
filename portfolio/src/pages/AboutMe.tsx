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
import { useTranslation } from "react-i18next";

const AboutMe = () => {
  const { t } = useTranslation();
  return (
    <>
      <div id="aboutme" className="aboutme-wrapper pb-5">
        <Container className="about-me pb-5 pt-4">
          <Row className="pt-5">
            <Col>
              <span className="title"># ABOUT ME</span>
            </Col>
          </Row>

          <Row>
            <Col lg={4} className="columns pt-5">
              <div className="info-wrapper">
                <img src={personImg} />
                <div className="info-text">
                  <span>
                    <b>{t(`aboutme.name`)}</b>
                    <br />
                    {t(`aboutme.resultName`)}
                  </span>
                </div>
              </div>
            </Col>
            <Col lg={4} className="columns pt-5">
              <div className="info-wrapper">
                <img src={dateImg} />
                <div className="info-text">
                  <span>
                    <b>{t(`aboutme.birth`)}</b>
                    <br />
                    {t(`aboutme.resultBirth`)}
                  </span>
                </div>
              </div>
            </Col>
            <Col lg={4} className="columns pt-5">
              <div className="info-wrapper">
                <img src={locationImg} />
                <div className="info-text">
                  <span>
                    <b>{t(`aboutme.address`)}</b>
                    <br />
                    {t(`aboutme.resultAddress`)}
                  </span>
                </div>
              </div>
            </Col>
            <Col lg={4} className="columns pt-5">
              <div className="info-wrapper">
                <img src={callImg} />
                <div className="info-text">
                  <span>
                    <b>{t(`aboutme.contact`)}</b>
                    <br />
                    {t(`aboutme.resultContact`)}
                  </span>
                </div>
              </div>
            </Col>
            <Col lg={4} className="columns pt-5">
              <div className="info-wrapper">
                <img src={emailImg} />
                <div className="info-text">
                  <span>
                    <b>{t(`aboutme.email`)}</b>
                    <br />
                    {t(`aboutme.resultEmail`)}
                  </span>
                </div>
              </div>
            </Col>
            <Col lg={4} className="columns pt-5">
              <div className="info-wrapper">
                <img src={schoolImg} />
                <div className="info-text">
                  <span>
                    <b>{t(`aboutme.school`)}</b>
                    <br />
                    {t(`aboutme.resultSchool`)}
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
