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
import Click from "../shared/button";

import resume from "../../../public/images/gabriel-cv.pdf";

function PortugueseHome() {
  return (
    <About>
      <h1>Início</h1>
      <AboutContent>
        <Avatar src="/images/gabriel.jpg" alt="Gabriel Lavarini" />
        <h2>Bem vindo</h2>
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
            href="https://www.linkedin.com/in/gabriel-lavarini-moreira-8270b228a/"
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
        <p>{`Oi! Sou o Gabriel Lavarini, obrigado pela visita em meu portifólio.`}</p>
        <Resume>
          <h4>Procurando pelo meu currículo?</h4>
          <div>
            <span className="download-icon">
              <VscDesktopDownload />
            </span>
            <a href={resume} download="gabriel-cv">
              Clique aqui para baixá-lo.
            </a>
          </div>
        </Resume>
        <h3>Sobre</h3>
        <p>
          Apaixonado por artes e tecnologia, tenho formação em Artes pela UFMG e
          estudo Análise e Desenvolvimento de Sistemas pela Estácio. Atualmente
          sou freelancer como desenvolvedor Front-End.
        </p>
        <h3>Habilidades</h3>
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
        <h3>Certificados</h3>

        <p className="certifications">
          Dica: você pode selecionar uma certificação para ver mais detalhes.
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
          <Click title="projetos" action="/projects" />
        </Button>
      </AboutContent>
    </About>
  );
}

export default PortugueseHome;
