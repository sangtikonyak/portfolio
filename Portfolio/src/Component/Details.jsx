import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../ProjectContext";

const Details = () => {
  const { state } = useContext(ProductContext);
  const [project, setProject] = useState(state);

  useEffect(() => {
    setProject(state);
  }, [state]);

  console.log(project.functionalities);
  const imageUrl = "/carousel/" + project?.image;

  return (
    <div className="container">
      <h4 className="text-center fw-bold mb-4">{project?.title}</h4>
      <div
        className="image-container d-flex justify-content-center align-items-center"
        style={{ width: "100%" }}
      >
        <img
          src={imageUrl}
          className="img-fluid"
          alt="homepage"
          style={{ height: "300px" }}
        />
      </div>
      {/* Files in the public directory are served at the root path.
      Instead of /public/carousel/myntra-c2.png, use /carousel/myntra-c2.png. */}

      <div
        className="row d-flex mt-4 p-4 "
        style={{
          borderRadius: "10px",
        }}
      >
        <div className="col-12">
          <h6 className="fw-bold" style={{ borderBottom: "1px solid silver" }}>
            Description
          </h6>
          <p>{project?.description}</p>
          <h6
            className="fw-bold mt-4"
            style={{ borderBottom: "1px solid silver" }}
          >
            Functionalities
          </h6>
          <ul>
            {project?.functionalities.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <h6
            className="fw-bold mt-4"
            style={{ borderBottom: "1px solid silver" }}
          >
            Technologies and Framework Used
          </h6>
          <p>{project?.technologies}</p>

          <h6
            className="fw-bold mt-4"
            style={{ borderBottom: "1px solid silver" }}
          >
            GitHub
          </h6>
          <a href={project?.github}>View Project</a>
        </div>
      </div>
    </div>
  );
};

export default Details;