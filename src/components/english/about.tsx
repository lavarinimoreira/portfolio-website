import {
  About,
  AboutContent,
  Avatar,
  CertificationsGrid,
  IconsLinks,
  Resume,
  SkillContainer,
} from "../styles/about";

import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineTwitter,
  AiOutlineMail,
  AiOutlineInstagram,
} from "react-icons/ai";

import {
  DiReact,
  DiPython,
  DiSass,
  DiPostgresql,
  DiGitBranch,
} from "react-icons/di";
import {
  TbBrandTypescript,
  TbBrandJavascript,
  TbBrandHtml5,
  TbBrandCss3,
} from "react-icons/tb";
import { SiCplusplus, SiNextdotjs, SiNodedotjs } from "react-icons/si";

import { VscDesktopDownload } from "react-icons/vsc";

import certifications from "../../data/certifications.json";
import CertificationCard from "../shared/certification-card";
import { Button } from "../styles/home";
import { useNavigate } from "react-router-dom";
import Click from "../shared/button";

function EnglishAbout() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    return navigate("/projects");
  };

  return (
    <About>
      <h1>About</h1>
      <AboutContent>
        <Avatar src="/images/gabriel.jpg" alt="Gabriel Lavarini" />
        <h2>Welcome</h2>
        <IconsLinks>
          <a
            className="home-link-git"
            href="https://www.github.com/lavarinimoreira"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillGithub />
          </a>
          <a
            className="home-link-in"
            href="https://www.linkedin.com/in/gabriel-lavarini-moreira-878706149/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin />
          </a>
          <a
            className="home-link-tt"
            href="https://twitter.com/lavarinimoreira"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineTwitter />
          </a>
          <a
            className="instagram"
            href="https://www.instagram.com/gabriel_lavarini/"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineInstagram />
          </a>
          <a
            className="mail"
            href="mailto:gabriel@lavarinimoreira.me"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineMail />
          </a>
        </IconsLinks>
        <p>{`I'm Gabriel Lavarini. Thank you for taking the time to check out my portfolio.`}</p>
        <Resume>
          <h4>Looking for my resume?</h4>
          <div>
            <span className="download-icon">
              <VscDesktopDownload />
            </span>
            <a href="" download="Gabriel_Lavarini_Resume">
              Click here to download it!
            </a>
          </div>
        </Resume>
        <h3>About Me</h3>
        <p>
          I'm a full-stack web developer currently looking for a job
          opportunity, but I also do freelance. I have an academic degree in
          Arts from UFMG and I started learning about Programming in 2020, it
          was love at the first "Hello World". In 2021 I started programming
          more seriously, and now I'am in the third year of a Systems Analysis
          degree.
        </p>
        <h3>Skills</h3>
        <SkillContainer>
          <div className="js">
            <TbBrandJavascript />
            <h4>JavaScript</h4>
          </div>
          <div className="ts">
            <TbBrandTypescript />
            <h4>TypeScript</h4>
          </div>
          <div className="html">
            <TbBrandHtml5 />
            <h4>HTML</h4>
          </div>
          <div className="css">
            <TbBrandCss3 />
            <h4>CSS</h4>
          </div>
          <div className="py">
            <DiPython />
            <h4>Python</h4>
          </div>
          <div className="cpp">
            <SiCplusplus />
            <h4>C++</h4>
          </div>
          <div className="react">
            <DiReact />
            <h4>React</h4>
          </div>
          <div className="next">
            <SiNextdotjs />
            <h4>NextJS</h4>
          </div>
          <div className="scss">
            <DiSass />
            <h4>SCSS</h4>
          </div>
          <div className="node">
            <SiNodedotjs />
            <h4>Node</h4>
          </div>
          <div className="pgsql">
            <DiPostgresql />
            <h4>PostgreSQL</h4>
          </div>
          <div className="git">
            <DiGitBranch />
            <h4>Git</h4>
          </div>
        </SkillContainer>
        <h3>Certifications</h3>

        <p className="certifications">
          Tip: you can click on a certification to see it in a new tab.
        </p>
        <CertificationsGrid>
          {certifications.certifications.map((certification) => (
            <CertificationCard
              key={certification.name}
              certification={certification.name}
              image={certification.image}
              link={certification.link}
            />
          ))}
        </CertificationsGrid>
        <Button>
          <Click title="projects" action={handleNavigate} />
        </Button>
      </AboutContent>
    </About>
  );
}

export default EnglishAbout;
