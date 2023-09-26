import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "@css/profile.scss";
import ProfileImg from "@assets/profile.jpg";

const styleFlexCenter = {
  display: "flex",
  alignItems: "center",
};

const Profile = () => {
  return (
    <>
      <Container fluid className="profile pb-5 mb-5 pt-5">
        <Row className="full-height">
          <Col sm={4} style={styleFlexCenter}>
            <img src={ProfileImg} className="profile-img" />
          </Col>

          <Col sm={8} style={styleFlexCenter}>
            <div className="profile-left-wrapper">
              <div className="profile-title pb-4">
                <span>'박유민'</span>
                <br />
                <span>웹 개발자 포트폴리오</span>
              </div>

              <div className="line"></div>

              <div className="profile-content pt-4">
                <span>안녕하세요.</span>
                <br />
                <span>공부가 취미인 풀 스택 웹 개발자입니다.</span>
                <br />
                <span>
                  매우 꼼꼼한 성격, 그리고 공부를 밥 먹듯이 하는 습관이 저의
                  장점입니다.
                </span>
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
