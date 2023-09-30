import Profile from "@/pages/Profile";
import AboutMe from "@/pages/AboutMe";
import Skills from "@/pages/Skills";
import Projects from "@pages/Projects";
import Career from "@pages/Career";
import TopButton from "@components/TopButton";
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
        <Career></Career>

        <TopButton></TopButton>
      </div>
    </>
  );
};

export default Page;
