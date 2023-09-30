import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// portfolio
import ExampleImg from "@assets/project.png";
import ExampleImg2 from "@assets/project2.png";
import ExampleImg3 from "@assets/project3.png";
// mps 5.0
import deptImg from "@assets/부서관리.png";
import usageImg from "@assets/사용량통계.png";
import jobImg from "@assets/작업이력.png";
import logImg from "@assets/통합로그.png";
import printImg from "@assets/출력량추이.png";
import printImg2 from "@assets/출력현황.png";
import cardImg from "@assets/카드관리.png";
// wisdom
import wisdomImg1 from "@assets/wisdom1.png";
import wisdomImg2 from "@assets/wisdom2.png";
import wisdomImg3 from "@assets/wisdom3.png";
import wisdomImg4 from "@assets/wisdom4.png";
// solution CRM
import crmImg1 from "@assets/crm1.png";
import crmImg2 from "@assets/crm2.png";
import crmImg3 from "@assets/crm3.png";
import crmImg4 from "@assets/crm4.png";
// uc
import ucImg1 from "@assets/uc1.png";
import ucImg2 from "@assets/uc2.png";
import ucImg3 from "@assets/uc3.png";
import ucImg4 from "@assets/uc4.png";
import ucImg5 from "@assets/uc5.png";

import LabelImg from "@assets/label.svg";
import ImageSlider from "@components/ImageSlider";
import Button from "react-bootstrap/Button";
import "@css/projects.scss";

// Images
const images: string[] = [ExampleImg, ExampleImg2, ExampleImg3];
const mpsImages: string[] = [
  deptImg,
  usageImg,
  logImg,
  jobImg,
  printImg,
  printImg2,
  cardImg,
];
const wisdomImages: string[] = [wisdomImg1, wisdomImg2, wisdomImg3, wisdomImg4];
const crmImages: string[] = [crmImg1, crmImg2, crmImg3, crmImg4];
const ucImages: string[] = [ucImg1, ucImg2, ucImg3, ucImg4, ucImg5];

const Projects = () => {
  return (
    <>
      <div id="projects" className="projects-wrapper pb-5">
        <Container className="projects pb-5 pt-4">
          <Row className="py-5">
            <Col>
              <span className="title"># PROJECTS</span>
            </Col>
          </Row>

          {/* 포트폴리오 */}
          <Row className="project p-4 m-2 mb-4">
            <Col xs={12} className="pb-2">
              <span className="project-title">포트폴리오</span>
            </Col>

            <Col xs={12} className="pb-4">
              <span className="date">2023.09 (개인 프로젝트)</span>
            </Col>

            <Col lg={6} className="pb-4">
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

          {/* MPS 5.0 */}
          <Row className="project p-4 m-2 mb-4">
            <Col xs={12} className="pb-2">
              <span className="project-title">MPS 5.0 솔루션</span>
            </Col>

            <Col xs={12} className="pb-4">
              <span className="date">2023.04 ~ 2023.07 (팀 프로젝트)</span>
            </Col>

            <Col lg={6} className="pb-4">
              <ImageSlider images={mpsImages}></ImageSlider>
            </Col>

            <Col lg={6}>
              <Row>
                <Col xs={12} style={{ textAlign: "start" }}>
                  <span>
                    <b>
                      복합기 관리자가 복합기를 더욱 편리하게 관리할 수 있도록
                      도와주고, 복합기 사용자가 복합기 사용 내역을 확인할 수
                      있도록 도와주는 웹사이트
                    </b>
                    입니다. 이전 솔루션은 복합기 관리자 페이지와 사용자 페이지가
                    분리되어 있어 불편함을 느낀 고객들을 위해 통합한 신규
                    프로젝트입니다.
                  </span>
                  <br />
                  <br />
                  <span>
                    Frontend와 Backend를 나누어 진행했고, Frontend를 맡은 저는
                    <b>Vue.js를 사용하여 학습 및 개발을 병행</b>했습니다.
                    <b>컴포넌트를 설계</b>하고,{" "}
                    <b>재사용이 가능한 공통 컴포넌트를 개발</b>하여 다른
                    개발자분들과 공유하며 개발을 진행했습니다.
                  </span>
                  <br />
                  <br />
                  <span>
                    처음엔 Webpack을 통해 빌드를 진행했지만 프로젝트 규모가
                    커짐에 따라 빌드 시간이 길어져{" "}
                    <b>Vite로 마이그레이션 작업을 진행</b>했습니다.
                  </span>
                  <br />
                  <br />
                  <span>
                    이 프로젝트를 통해 Vue.js에 익숙해지고, SPA에 대해 더
                    익숙해진 계기가 되었습니다. 또한 Backend 개발자분들과
                    소통하며 RestFul API 규칙을 정해 통신하는 경험을 하여 협업에
                    적응하는 계기가 되었습니다.
                  </span>
                  <br />

                  <a href="https://www.notion.so/MPS-5-0-c19e37846c644679bea3eee0017c686b">
                    <Button variant="warning" className="mt-3">
                      VIDEO 보기
                    </Button>
                  </a>
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
                    복합기 출력현황, 출력량 추이, 사용량 통계(사용자별, 부서별),
                    작업 이력, 부서 관리, 카드 관리, 통합 로그, 스캔함
                  </span>
                </Col>

                <Col lg={3}>
                  <div style={{ display: "flex", alignItems: "flex-start" }}>
                    <img src={LabelImg} style={{ width: "20px" }} />
                    <span className="px-1">Frontend</span>
                  </div>
                </Col>
                <Col lg={9} style={{ textAlign: "start" }} className="pb-3">
                  <span>Vue.js, javasript, Sass, Vite, Webpack, Quasar</span>
                </Col>

                <Col lg={3}>
                  <div style={{ display: "flex", alignItems: "flex-start" }}>
                    <img src={LabelImg} style={{ width: "20px" }} />
                    <span className="px-1">Backend</span>
                  </div>
                </Col>
                <Col lg={9} style={{ textAlign: "start" }} className="pb-3">
                  <span>SpringBoot</span>
                </Col>

                <Col lg={3}>
                  <div style={{ display: "flex", alignItems: "flex-start" }}>
                    <img src={LabelImg} style={{ width: "20px" }} />
                    <span className="px-1">Database</span>
                  </div>
                </Col>
                <Col lg={9} style={{ textAlign: "start" }} className="pb-3">
                  <span>MSSQL, MongoDB</span>
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

          {/* WISDOM */}
          <Row className="project p-4 m-2 mb-4">
            <Col xs={12} className="pb-2">
              <span className="project-title">WISDOM 솔루션</span>
            </Col>

            <Col xs={12} className="pb-4">
              <span className="date">2022.11 ~ 2023.02 (팀 프로젝트)</span>
            </Col>

            <Col lg={6} className="pb-4">
              <ImageSlider images={wisdomImages}></ImageSlider>
            </Col>

            <Col lg={6}>
              <Row>
                <Col xs={12} style={{ textAlign: "start" }}>
                  <span>
                    <b>복합기 관리자를 위한 웹사이트</b>입니다. 관리자가 기기를
                    관리하고, 부서 및 사용자별 사용량을 제어하며 워터마크 및
                    과금을 설정할 수 있고 더 나아가 개인정보 위반 및 보안 단어를
                    설정할 수 있습니다.
                  </span>
                  <br />
                  <br />
                  <span>
                    풀스택 개발자로 Frontend 업무는{" "}
                    <b>JSP, javascript, Jquery를 사용</b>해 처리하였고, Backend
                    업무는 <b>MyBatis를 사용하여 MSSQL, PostgreSQL</b> 두 개의
                    데이터베이스를 사용했습니다.
                  </span>
                  <br />
                  <br />
                  <span>
                    기존 WISDOM 솔루션 유지보수 업무와 더불어 고객사 요청에 의해
                    특화 개발에 투입되어 팩스송신이력, 개인정보 마스킹
                    커스터마이징, 대결재자 페이지를 개발했습니다.
                  </span>
                  <br />
                  <br />
                  <span>
                    업무를 진행하며{" "}
                    <b>
                      다양한 버전의 프로젝트 관리 및 여러 장애 대응, UI 설계,
                      쿼리문 최적화
                    </b>{" "}
                    등 풀스택 업무에 대한 이해도를 높일 수 있었습니다.
                  </span>
                  <br />

                  <a href="https://www.notion.so/wisdom-9e25ccc90d22450faac564419d9b582f">
                    <Button variant="warning" className="mt-3">
                      VIDEO 보기
                    </Button>
                  </a>
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
                    복합기 기기 현황, 출력 현황, 보안 통계, 쿼터 설정, 워터마크
                    설정, 과금 관리 등
                  </span>
                </Col>

                <Col lg={3}>
                  <div style={{ display: "flex", alignItems: "flex-start" }}>
                    <img src={LabelImg} style={{ width: "20px" }} />
                    <span className="px-1">Frontend</span>
                  </div>
                </Col>
                <Col lg={9} style={{ textAlign: "start" }} className="pb-3">
                  <span>JSP, javascript, Jquery</span>
                </Col>

                <Col lg={3}>
                  <div style={{ display: "flex", alignItems: "flex-start" }}>
                    <img src={LabelImg} style={{ width: "20px" }} />
                    <span className="px-1">Backend</span>
                  </div>
                </Col>
                <Col lg={9} style={{ textAlign: "start" }} className="pb-3">
                  <span>Spring</span>
                </Col>

                <Col lg={3}>
                  <div style={{ display: "flex", alignItems: "flex-start" }}>
                    <img src={LabelImg} style={{ width: "20px" }} />
                    <span className="px-1">Database</span>
                  </div>
                </Col>
                <Col lg={9} style={{ textAlign: "start" }} className="pb-3">
                  <span>MSSQL, PostgreSQL</span>
                </Col>
              </Row>
            </Col>
          </Row>

          {/* Solution CRM 웹사이트 */}
          <Row className="project p-4 m-2 mb-4">
            <Col xs={12} className="pb-2">
              <span className="project-title">Solution CRM 웹사이트</span>
            </Col>

            <Col xs={12} className="pb-4">
              <span className="date">2022.08 ~ 2022.10 (개인 프로젝트)</span>
            </Col>

            <Col lg={6} className="pb-4">
              <ImageSlider images={crmImages}></ImageSlider>
            </Col>

            <Col lg={6}>
              <Row>
                <Col xs={12} style={{ textAlign: "start" }}>
                  <span>
                    <b>복합기 사용 고객들을 관리하기 위한 웹사이트</b>입니다.
                    기존에 존재한 고객 관리 사이트는 모바일 환경에서 접근이
                    어려웠고, 사용자 친화적이지 못해 이를 개선하고자 신입사원
                    프로젝트로 리뉴얼 작업을 진행했습니다.
                  </span>
                  <br />
                  <br />
                  <span>
                    요구사항 정의, 프로세스 설계, 데이터베이스 설계, UI 설계 및
                    디자인, 개발, 테스트, 배포 과정을 개인으로 진행하며 한
                    프로젝트가 완료되는 과정을 겪으며 단순 개발능력 향상이 아닌{" "}
                    <b>프로젝트의 흐름에 대한 이해도</b>를 높일 수 있었습니다.
                  </span>
                  <br />
                  <br />
                  <span>
                    학부시절 접해보지 못했던 SpringBoot를 사용하며{" "}
                    <b>프레임워크에 대한 이해도</b>를 높이고, MVC 패턴과 의존성
                    주입에 대한 개념을 확립할 수 있었습니다.
                  </span>
                  <br />
                  <br />
                  <span>
                    더 나아가 BootStrap을 통해 처음으로 반응형 웹앱을
                    구현해봄으로써 <b>그리드 스타일에 대한 이해도</b>를 높일 수
                    있었습니다.
                  </span>
                  <br />

                  <a href="https://www.notion.so/Solution-CRM-mini-272e28c051264da594145815588717c1">
                    <Button variant="warning" className="mt-3">
                      VIDEO 보기
                    </Button>
                  </a>
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
                  <span>고객 관리, 서버 관리, 솔루션 관리</span>
                </Col>

                <Col lg={3}>
                  <div style={{ display: "flex", alignItems: "flex-start" }}>
                    <img src={LabelImg} style={{ width: "20px" }} />
                    <span className="px-1">Frontend</span>
                  </div>
                </Col>
                <Col lg={9} style={{ textAlign: "start" }} className="pb-3">
                  <span>JSP, javascript, Jquery, BootStrap</span>
                </Col>

                <Col lg={3}>
                  <div style={{ display: "flex", alignItems: "flex-start" }}>
                    <img src={LabelImg} style={{ width: "20px" }} />
                    <span className="px-1">Backend</span>
                  </div>
                </Col>
                <Col lg={9} style={{ textAlign: "start" }} className="pb-3">
                  <span>SpringBoot</span>
                </Col>

                <Col lg={3}>
                  <div style={{ display: "flex", alignItems: "flex-start" }}>
                    <img src={LabelImg} style={{ width: "20px" }} />
                    <span className="px-1">Database</span>
                  </div>
                </Col>
                <Col lg={9} style={{ textAlign: "start" }} className="pb-3">
                  <span>MSSQL</span>
                </Col>
              </Row>
            </Col>
          </Row>

          {/* 학부 연구실 웹사이트 */}
          <Row className="project p-4 m-2 mb-4">
            <Col xs={12} className="pb-2">
              <span className="project-title">학부 연구실 웹사이트</span>
            </Col>

            <Col xs={12} className="pb-4">
              <span className="date">2018.07 ~ 2018.08 (개인 프로젝트)</span>
            </Col>

            <Col lg={6} className="pb-4">
              <ImageSlider images={ucImages}></ImageSlider>
            </Col>

            <Col lg={6}>
              <Row>
                <Col xs={12} style={{ textAlign: "start" }}>
                  <span>
                    <b>학부 연구실을 소개하기위한 웹사이트</b>입니다. 기존에
                    존재한 연구실 홈페이지는 연구 활동과 목적이 뚜렷하게
                    나타나지 않아 이를 개선하고자 UI 리뉴얼 작업을 진행했습니다.
                  </span>
                  <br />
                  <br />
                  <span>
                    학부시절 부족했던 <b>html, css, javascript를 스스로 학습</b>
                    하며 무료 템플릿에 설계한 UI에 맞게 코드를 적용하고, 더
                    나아가{" "}
                    <b>이미지 슬라이더 및 자세히보기 기능을 스스로 구현</b>
                    해보며 javascript와 Jquery에 대한 이해도를 높일 수
                    있었습니다.
                  </span>
                  <br />
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
                    연구실 및 연구원 소개, 연구활동 소개, 세미나 자료 및
                    연구활동 사진 게시판 공유
                  </span>
                </Col>

                <Col lg={3}>
                  <div style={{ display: "flex", alignItems: "flex-start" }}>
                    <img src={LabelImg} style={{ width: "20px" }} />
                    <span className="px-1">URL</span>
                  </div>
                </Col>
                <Col lg={9} style={{ textAlign: "start" }} className="pb-3">
                  <a href="http://se.sch.ac.kr/">http://se.sch.ac.kr/</a>
                </Col>

                <Col lg={3}>
                  <div style={{ display: "flex", alignItems: "flex-start" }}>
                    <img src={LabelImg} style={{ width: "20px" }} />
                    <span className="px-1">Frontend</span>
                  </div>
                </Col>
                <Col lg={9} style={{ textAlign: "start" }} className="pb-3">
                  <span>PHP, javascript, Jquery</span>
                </Col>

                <Col lg={3}>
                  <div style={{ display: "flex", alignItems: "flex-start" }}>
                    <img src={LabelImg} style={{ width: "20px" }} />
                    <span className="px-1">Backend</span>
                  </div>
                </Col>
                <Col lg={9} style={{ textAlign: "start" }} className="pb-3">
                  <span>XE(제로보드)</span>
                </Col>

                <Col lg={3}>
                  <div style={{ display: "flex", alignItems: "flex-start" }}>
                    <img src={LabelImg} style={{ width: "20px" }} />
                    <span className="px-1">Database</span>
                  </div>
                </Col>
                <Col lg={9} style={{ textAlign: "start" }} className="pb-3">
                  <span>MySQL</span>
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
