import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useTranslation } from "react-i18next";
import sindohImg from "@assets/sindoh.png";
import spreaditImg from "@assets/spreadit.png";
import "@css/career.scss";

const Career = () => {
  const { t } = useTranslation();
  return (
    <>
      <div id="career" className="career-wrapper">
        <Container className="career pb-5 pt-4">
          <Row className="py-5">
            <Col>
              <span className="title"># CAREER</span>
            </Col>
          </Row>

          {/* spread it */}
          <Row className="p-4 mb-4">
            <Col lg={{ span: 2, offset: 1 }} xs={{ span: 6, offset: 3 }}>
              <div className="image-wrapper">
                <img src={spreaditImg} className="pb-5" />
              </div>
            </Col>
            <Col lg={8} className="text-wrapper px-4">
              <span className="company-title">
                {t(`career.spreadit.title`)}
              </span>
              <br />
              <span className="date">{t(`career.spreadit.date`)}</span>
              <br />
              <br />
              <span>{t(`career.spreadit.info`)}</span>
            </Col>
          </Row>

          {/* sindoh */}
          <Row className="p-4 mb-4">
            <Col lg={{ span: 2, offset: 1 }} xs={{ span: 6, offset: 3 }}>
              <div className="image-wrapper">
                <img src={sindohImg} className="pb-5" />
              </div>
            </Col>
            <Col lg={8} className="text-wrapper px-4">
              <span className="company-title">{t(`career.sindoh.title`)}</span>
              <br />
              <span className="date">{t(`career.sindoh.date`)}</span>
              <br />
              <br />
              <span>{t(`career.sindoh.info`)}</span>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Career;
