import React, { useState, useEffect } from "react";
import "./Card.scss";
import GitHub from "../../../assets/icons/github";
import ExternalLink from "../../../assets/icons/external-link";

export default function Card({ projectData }) {
  const primaryColor = "#924DF9";

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {windowWidth <= 768 ? (
        <>
          <div className="mainContainerCard-mobile">
            <a href={projectData.projectLink} target="_blank" rel="noreferrer">
              <img src={projectData.picture} alt="img" className="img-mobile" />
            </a>
            <div class="centered">
              <p className="project-overline">Featured project</p>
              <h3 className="project-title">{projectData.title}</h3>
              <p>{projectData.description}</p>
              <ul className="project-tech-list-mobile">
                {projectData.technologies.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
              <div className="project-links-mobile">
                <a
                  href={projectData.githubLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <GitHub color={primaryColor} size="25" />
                </a>
                <a
                  href={projectData.projectLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <ExternalLink color={primaryColor} size="25" />
                </a>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          {projectData.id % 2 !== 0 ? (
            <div className="mainContainerCard">
              <div className="project-content">
                <div>
                  <p className="project-overline">Featured project</p>
                  <h3 className="project-title">{projectData.title}</h3>
                  <div className="project-description">
                    <p>{projectData.description}</p>
                  </div>
                  <ul className="project-tech-list">
                    {projectData.technologies.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                  <div className="project-links">
                    <a
                      href={projectData.githubLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <GitHub color={primaryColor} size="25" />
                    </a>
                    <a
                      href={projectData.projectLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <ExternalLink color={primaryColor} size="25" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-image">
                <a
                  href={projectData.projectLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <figure>
                    <img src={projectData.picture} alt="img" />
                  </figure>
                </a>
              </div>
            </div>
          ) : (
            <div className="mainContainerCard">
              <div className="project-content-reversed">
                <div>
                  <p className="project-overline">Featured project</p>
                  <h3 className="project-title">{projectData.title}</h3>
                  <div className="project-description">
                    <p>{projectData.description}</p>
                  </div>
                  <ul className="project-tech-list-reversed">
                    {projectData.technologies.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                  <div className="project-links-reversed">
                    <a
                      href={projectData.githubLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <GitHub color={primaryColor} size="25" />
                    </a>
                    <a
                      href={projectData.projectLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <ExternalLink color={primaryColor} size="25" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-image-reversed">
                <a
                  href={projectData.projectLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <figure>
                    <img src={projectData.picture} alt="img" />
                  </figure>
                </a>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}
