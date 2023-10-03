import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useTranslation } from "react-i18next";
import ImageSlider from "@components/ImageSlider";
// portfolio
import portfolioImg1 from "@assets/portfolio1.png";
import portfolioImg2 from "@assets/portfolio2.png";
import portfolioImg3 from "@assets/portfolio3.png";
import portfolioImg4 from "@assets/portfolio4.png";
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
import Button from "react-bootstrap/Button";
import "@css/projects.scss";
import styled from "styled-components";

// Images
const images: string[] = [
  portfolioImg1,
  portfolioImg2,
  portfolioImg3,
  portfolioImg4,
];
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

const StyleSpan = styled.span`
  color: #ff0000;
`;

const Projects = () => {
  const { t } = useTranslation();
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
              <span className="project-title">
                {t(`projects.portfolio.title`)}
              </span>
            </Col>

            <Col xs={12} className="pb-4">
              <span className="date">
                {t(`projects.portfolio.date`)} (
                {t(`projects.portfolio.project`)})
              </span>
            </Col>

            <Col lg={6} className="pb-4">
              <ImageSlider images={images}></ImageSlider>
            </Col>

            <Col lg={6}>
              <Row>
                <Col xs={12} style={{ textAlign: "start" }}>
                  <span>
                    <b>{t(`projects.portfolio.content1`)}</b>
                    {t(`projects.portfolio.content2`)}
                  </span>
                  <br />
                  <br />
                  <span>
                    {t(`projects.portfolio.content3`)}{" "}
                    <StyleSpan>{t(`projects.portfolio.content4`)}</StyleSpan>{" "}
                    {t(`projects.portfolio.content5`)}{" "}
                    <StyleSpan>{t(`projects.portfolio.content6`)}</StyleSpan>{" "}
                    {t(`projects.portfolio.content7`)}{" "}
                  </span>
                  <br />
                  <br />
                  <span>
                    <StyleSpan>{t(`projects.portfolio.content8`)}</StyleSpan>
                    {t(`projects.portfolio.content9`)}{" "}
                    <StyleSpan>{t(`projects.portfolio.content10`)}</StyleSpan>{" "}
                    {t(`projects.portfolio.content11`)}
                  </span>
                  <br />
                </Col>
              </Row>
              <hr />

              <Row>
                <Col lg={3}>
                  <div style={{ display: "flex", alignItems: "flex-start" }}>
                    <img src={LabelImg} style={{ width: "20px" }} />
                    <span className="px-1">{t(`projects.function`)}</span>
                  </div>
                </Col>
                <Col lg={9} style={{ textAlign: "start" }} className="pb-3">
                  <span>{t(`projects.portfolio.function`)}</span>
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
              </Row>
            </Col>
          </Row>

          {/* MPS 5.0 */}
          <Row className="project p-4 m-2 mb-4">
            <Col xs={12} className="pb-2">
              <span className="project-title">{t(`projects.mps.title`)}</span>
            </Col>

            <Col xs={12} className="pb-4">
              <span className="date">
                {t(`projects.mps.date`)} ({t(`projects.mps.project`)})
              </span>
            </Col>

            <Col lg={6} className="pb-4">
              <ImageSlider images={mpsImages}></ImageSlider>
            </Col>

            <Col lg={6}>
              <Row>
                <Col xs={12} style={{ textAlign: "start" }}>
                  <span>
                    <b>{t(`projects.mps.content1`)}</b>
                    {t(`projects.mps.content2`)}
                  </span>
                  <br />
                  <br />
                  <span>
                    {t(`projects.mps.content3`)}{" "}
                    <StyleSpan>{t(`projects.mps.content4`)}</StyleSpan>
                    {t(`projects.mps.content5`)}{" "}
                    <StyleSpan>{t(`projects.mps.content6`)}</StyleSpan>
                    {t(`projects.mps.content7`)}{" "}
                    <StyleSpan>{t(`projects.mps.content8`)}</StyleSpan>
                    {t(`projects.mps.content9`)}{" "}
                    <StyleSpan>{t(`projects.mps.content10`)}</StyleSpan>
                    {t(`projects.mps.content11`)}
                  </span>
                  <br />
                  <br />
                  <span>
                    <StyleSpan>{t(`projects.mps.content12`)}</StyleSpan>
                    {t(`projects.mps.content13`)}{" "}
                    <StyleSpan>{t(`projects.mps.content14`)}</StyleSpan>
                    {t(`projects.mps.content15`)}
                  </span>
                  <br />
                  <br />
                  <span>
                    {t(`projects.mps.content16`)}{" "}
                    <StyleSpan>{t(`projects.mps.content17`)}</StyleSpan>
                    {t(`projects.mps.content18`)}{" "}
                    <StyleSpan>{t(`projects.mps.content19`)}</StyleSpan>
                    {t(`projects.mps.content20`)}
                  </span>
                  <br />
                  <br />
                  <span>{t(`projects.mps.content21`)}</span>
                  <br />

                  <a href="https://www.notion.so/MPS-5-0-c19e37846c644679bea3eee0017c686b">
                    <Button variant="warning" className="mt-3">
                      VIDEO
                    </Button>
                  </a>
                </Col>
              </Row>
              <hr />

              <Row>
                <Col lg={3}>
                  <div style={{ display: "flex", alignItems: "flex-start" }}>
                    <img src={LabelImg} style={{ width: "20px" }} />
                    <span className="px-1">{t(`projects.function`)}</span>
                  </div>
                </Col>
                <Col lg={9} style={{ textAlign: "start" }} className="pb-3">
                  <span>{t(`projects.mps.function`)}</span>
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
              </Row>
            </Col>
          </Row>

          {/* WISDOM */}
          <Row className="project p-4 m-2 mb-4">
            <Col xs={12} className="pb-2">
              <span className="project-title">
                {t(`projects.wisdom.title`)}
              </span>
            </Col>

            <Col xs={12} className="pb-4">
              <span className="date">
                {t(`projects.wisdom.date`)} ({t(`projects.wisdom.project`)})
              </span>
            </Col>

            <Col lg={6} className="pb-4">
              <ImageSlider images={wisdomImages}></ImageSlider>
            </Col>

            <Col lg={6}>
              <Row>
                <Col xs={12} style={{ textAlign: "start" }}>
                  <span>
                    <b>{t(`projects.wisdom.content1`)}</b>
                    {t(`projects.wisdom.content2`)}
                  </span>
                  <br />
                  <br />
                  <span>
                    {t(`projects.wisdom.content3`)}{" "}
                    <StyleSpan>{t(`projects.wisdom.content4`)}</StyleSpan>
                    {t(`projects.wisdom.content5`)}{" "}
                    <StyleSpan>{t(`projects.wisdom.content6`)}</StyleSpan>
                    {t(`projects.wisdom.content7`)}{" "}
                    <StyleSpan>{t(`projects.wisdom.content8`)}</StyleSpan>{" "}
                    {t(`projects.wisdom.content9`)}
                    <br />
                    <br />
                  </span>
                  <span>
                    {t(`projects.wisdom.content10`)}
                    <br />
                    <br />
                  </span>
                  <span>
                    {t(`projects.wisdom.content11`)}{" "}
                    <StyleSpan>{t(`projects.wisdom.content12`)}</StyleSpan>{" "}
                    {t(`projects.wisdom.content13`)}
                  </span>
                  <br />

                  <a href="https://www.notion.so/wisdom-9e25ccc90d22450faac564419d9b582f">
                    <Button variant="warning" className="mt-3">
                      VIDEO
                    </Button>
                  </a>
                </Col>
              </Row>
              <hr />

              <Row>
                <Col lg={3}>
                  <div style={{ display: "flex", alignItems: "flex-start" }}>
                    <img src={LabelImg} style={{ width: "20px" }} />
                    <span className="px-1">{t(`projects.function`)}</span>
                  </div>
                </Col>
                <Col lg={9} style={{ textAlign: "start" }} className="pb-3">
                  <span>{t(`projects.wisdom.function`)}</span>
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
              <span className="project-title">{t(`projects.crm.title`)}</span>
            </Col>

            <Col xs={12} className="pb-4">
              <span className="date">
                {t(`projects.crm.date`)} ({t(`projects.crm.project`)})
              </span>
            </Col>

            <Col lg={6} className="pb-4">
              <ImageSlider images={crmImages}></ImageSlider>
            </Col>

            <Col lg={6}>
              <Row>
                <Col xs={12} style={{ textAlign: "start" }}>
                  <span>
                    <b>{t(`projects.crm.content1`)}</b>
                    {t(`projects.crm.content2`)}
                  </span>
                  <br />
                  <br />
                  <span>
                    {t(`projects.crm.content3`)}{" "}
                    <StyleSpan>{t(`projects.crm.content4`)}</StyleSpan>
                    {t(`projects.crm.content5`)}
                  </span>
                  <br />
                  <br />
                  <span>
                    {t(`projects.crm.content6`)}{" "}
                    <StyleSpan>{t(`projects.crm.content7`)}</StyleSpan>
                    {t(`projects.crm.content8`)}
                  </span>
                  <br />
                  <br />
                  <span>
                    {t(`projects.crm.content9`)}{" "}
                    <StyleSpan>{t(`projects.crm.content10`)}</StyleSpan>
                    {t(`projects.crm.content11`)}
                  </span>
                  <br />
                  <br />
                  <span>
                    {t(`projects.crm.content12`)}{" "}
                    <StyleSpan>{t(`projects.crm.content13`)}</StyleSpan>
                    {t(`projects.crm.content14`)}
                  </span>
                  <br />

                  <a href="https://www.notion.so/Solution-CRM-mini-272e28c051264da594145815588717c1">
                    <Button variant="warning" className="mt-3">
                      VIDEO
                    </Button>
                  </a>
                </Col>
              </Row>
              <hr />

              <Row>
                <Col lg={3}>
                  <div style={{ display: "flex", alignItems: "flex-start" }}>
                    <img src={LabelImg} style={{ width: "20px" }} />
                    <span className="px-1">{t(`projects.function`)}</span>
                  </div>
                </Col>
                <Col lg={9} style={{ textAlign: "start" }} className="pb-3">
                  <span>{t(`projects.crm.function`)}</span>
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
              <span className="project-title">{t(`projects.lab.title`)}</span>
            </Col>

            <Col xs={12} className="pb-4">
              <span className="date">
                {t(`projects.lab.date`)} {t(`projects.lab.project`)}
              </span>
            </Col>

            <Col lg={6} className="pb-4">
              <ImageSlider images={ucImages}></ImageSlider>
            </Col>

            <Col lg={6}>
              <Row>
                <Col xs={12} style={{ textAlign: "start" }}>
                  <span>
                    <b>{t(`projects.lab.content1`)}</b>
                    {t(`projects.lab.content2`)}
                  </span>
                  <br />
                  <br />
                  <span>
                    {t(`projects.lab.content3`)}{" "}
                    <StyleSpan>{t(`projects.lab.content4`)}</StyleSpan>
                    {t(`projects.lab.content5`)}{" "}
                    <StyleSpan>{t(`projects.lab.content6`)}</StyleSpan>
                    {t(`projects.lab.content7`)}
                  </span>
                  <br />
                  <br />
                  <span>{t(`projects.lab.content8`)}</span>
                  <br />
                </Col>
              </Row>
              <hr />

              <Row>
                <Col lg={3}>
                  <div style={{ display: "flex", alignItems: "flex-start" }}>
                    <img src={LabelImg} style={{ width: "20px" }} />
                    <span className="px-1">{t(`projects.function`)}</span>
                  </div>
                </Col>
                <Col lg={9} style={{ textAlign: "start" }} className="pb-3">
                  <span>{t(`projects.lab.function`)}</span>
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
                  <span>XE</span>
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
