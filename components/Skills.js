import React from "react";
import "devicon";

const Skills = () => {
  return (
    <div name='skill'>
      <div
        className=" text-white text-center vh-100  py-5 vh-50 "
        style={{ backgroundColor: "#121222" }}
        
      >
        <div className="col-lg-12 ">
          <div className="container">
            <h1 className=" text-white" id="montserrat">
              Skills
            </h1>
            <hr className="w-100 mx-auto" />
            <div >
            <div className="row row-cols-3 mx-2 pt-4">
              <i
                className="devicon-html5-plain colored my-3"
                id="skills"
                title="HTML"
              ></i>
              <i
                className="devicon-css3-plain colored my-3"
                id="skills"
                title="CSS"
              ></i>
              <i
                className="devicon-javascript-plain colored my-3"
                id="skills"
                title="JavaScript"
              ></i>
              <i
                className="devicon-bootstrap-plain colored my-3"
                id="skills"
                title="Bootstrap"
              ></i>
              <i
                className="devicon-materialui-plain colored my-3"
                id="skills"
                title="Material UI"
              ></i>
              <i
                className="devicon-react-original colored my-3"
                id="skills"
                title="React"
              ></i>
              <i
                className="devicon-nodejs-plain colored my-3"
                id="skills"
                title="Node JS"
              ></i>
              <i
                className="devicon-express-original my-3"
                id="skills"
                title="Express JS"
              ></i>
              <i
                className="devicon-mongodb-plain colored  my-3"
                id="skills"
                title="Mongo DB"
              ></i>
              <i
                className="devicon-nextjs-line my-3"
                id="skills"
                title="Next JS"
              ></i>
              <i
                className="devicon-github-original my-3"
                id="skills"
                title="Github"
              ></i>
              <i
                className="devicon-heroku-original colored my-3"
                id="skills"
                title="Heroku"
              ></i>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
