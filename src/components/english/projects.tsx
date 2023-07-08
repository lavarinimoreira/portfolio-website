import {
  Projects,
  ProjectsContent,
  ProjectsCard,
  LineBreak,
} from "../styles/projects";
import projectsEnglish from "../../data/projects.json";

function EnglishProjects() {
  return (
    <Projects>
      <h1>Projects</h1>
      <ProjectsContent>
        {projectsEnglish.projectsEnglish.map((project) => (
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
      </ProjectsContent>
    </Projects>
  );
}

export default EnglishProjects;
