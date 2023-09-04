import {
  Projects,
  ProjectsContent,
  ProjectsCard,
  LineBreak,
} from "../styles/projects";
import projectsPortuguese from "../../data/projects.json";
import { Resume } from "../styles/projects";

import { VscDesktopDownload } from "react-icons/vsc";

import resume from "../../../public/images/gabriel-cv.pdf";

function PortugueseProjects() {
  return (
    <Projects>
      <h1>Projetos</h1>
      <ProjectsContent>
        {projectsPortuguese.projectsPortuguese.map((project) => (
          <ProjectsCard key={project.id}>
            <h3>{project.title}</h3>
            <img src={project.image} />
            <p>{project.date}</p>
            <p>{project.description}</p>
            <h4>Links:</h4>
            <ul>
              <li>
                <a href={project.web} target="_blank" rel="noreferrer">
                  Site - {project.webTitle}
                </a>
              </li>
              <li>
                <a href={project.git} target="_blank" rel="noreferrer">
                  GitHub - {project.id}
                </a>
              </li>
            </ul>
            <LineBreak />
          </ProjectsCard>
        ))}

        <Resume>
          <p>Procurando pelo meu currículo?</p>
          <div>
            <span className="download-icon">
              <VscDesktopDownload />
            </span>
            <a href={resume} download="gabriel-resume">
              Clique aqui para baixá-lo.
            </a>
          </div>
        </Resume>
      </ProjectsContent>
    </Projects>
  );
}

export default PortugueseProjects;
