import Profile from "@/pages/Profile";
import AboutMe from "@/pages/AboutMe";
import Skills from "@/pages/Skills";

const Page = () => {
  return (
    <>
      <div data-bs-target="#navbar-main" data-bs-offset="0">
        <Profile></Profile>
        <AboutMe></AboutMe>
        <Skills></Skills>
      </div>
    </>
  );
};

export default Page;
