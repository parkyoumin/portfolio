import Profile from "@/pages/Profile";
import AboutMe from "@/pages/AboutMe";
import Skills from "@/pages/Skills";
import Projects from "@pages/Projects";

const Page = () => {
  return (
    <>
      <div
        data-bs-spy="scroll"
        data-bs-target="#navbar-main"
        data-bs-offset="20"
        className="scrollspy-example"
      >
        <Profile></Profile>
        <AboutMe></AboutMe>
        <Skills></Skills>
        <Projects></Projects>
      </div>
    </>
  );
};

export default Page;
