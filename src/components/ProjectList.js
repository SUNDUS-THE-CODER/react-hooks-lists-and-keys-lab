import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {projects.map((key) => (
          <ProjectItem key={key.id} name={key.name} about={key.about} technologies={key.technologies} />
        ))}
      </div>
    </div>
  );
}

export default ProjectList;
