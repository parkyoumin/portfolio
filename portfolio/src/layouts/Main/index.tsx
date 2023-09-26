import Footer from "./Footer";
import Menu from "./Menu";
import Page from "./Page";
import "@css/main.scss";

const Main = () => {
  return (
    <div className="wrapper">
      <div className="contentWrapper">
        <Menu />
        <Page />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
