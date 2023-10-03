import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "@css/profile.scss";
import ProfileImg from "@assets/profile.jpg";
import { useTranslation } from "react-i18next";

const styleFlexCenter = {
  display: "flex",
  alignItems: "center",
};

const Profile = () => {
  const { t } = useTranslation();

  return (
    <>
      <Container id="home" fluid className="profile pb-5 pt-5">
        <Row className="row justify-content-center">
          <Col lg={3} className="mb-3 pt-4" style={styleFlexCenter}>
            <img src={ProfileImg} className="profile-img" />
          </Col>

          <Col lg={6} className="pt-4" style={styleFlexCenter}>
            <div className="profile-left-wrapper">
              <div className="profile-title pb-4">
                <span>'{t(`profile.name`)}'</span>
                <br />
                <span>{t(`profile.portfolio`)}</span>
              </div>

              <div className="line"></div>

              <div className="profile-content pt-4">
                <span>{t(`profile.hello`)}.</span>
                <br />
                <span>{t(`profile.intro1`)}.</span>
                <br />
                <span>{t(`profile.intro2`)}.</span>
                <br />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Profile;
