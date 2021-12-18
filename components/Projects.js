import React from "react";
// import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
// import ScrollContainer from "react-indiana-drag-scroll";
import { Link } from "react-scroll";
import "devicon";
const Projects = () => {
  const deploysocial = () => {
    window.open("https://fyz-capstone.netlify.app");
  };
  const deployblogify = () => {
    window.open("https://fyz-blogify.netlify.app");
  };
  const deploychatapp = () => {
    window.open("https://fyz-chat-app.netlify.app");
  };
  const deploycribsapp = () => {
    window.open("https://fyz-cribs.netlify.app");
  };
  const deploytodoapp = () => {
    window.open("https://fyz-todo-app.netlify.app/login");
  };
  const deployexpense = () => {
    window.open("https://fyz-moneymanager.netlify.app/login");
  };
  const deploysbadmin = () => {
    window.open("https://fayez-formik-crud-react.netlify.app");
  };
  const deploycryptoapi = () => {
    window.open("https://fayez-cryptocurrency-task.netlify.app");
  };
  const deploybreaking = () => {
    window.open("https://fayez-breaking-bad-api.netlify.app/");
  };
  
  //github frontend
  const githubsocial = () => {
    window.open("https://github.com/Fayez-fyz/fyz-capstone-frontend");
  };

  const githubblogify = () => {
    window.open("https://github.com/Fayez-fyz/fyz-blog-app-frontend");
  };
  const githubchatapp = () => {
    window.open("https://github.com/Fayez-fyz/FYZ-Chat-App");
  };
  const githubcribsapp = () => {
    window.open("https://github.com/Fayez-fyz/cribs-app-frontend");
  };
  const githubtodoapp = () => {
    window.open("https://github.com/Fayez-fyz/Todo_app_react");
  };
  const githubexpense = () => {
    window.open("https://github.com/Fayez-fyz/money-manager-react");
  };
  const githubsbadmin = () => {
    window.open("https://github.com/Fayez-fyz/formik-CRUD");
  };
  const githubcryptoapi = () => {
    window.open("https://fayez-cryptocurrency-task.netlify.app");
  };
  const githubbreaking = () => {
    window.open("https://github.com/Fayez-fyz/Breaking-Bad-task");
  };

//github backend
const githubsocialb = () => {
  window.open("https://github.com/Fayez-fyz/fyz-capstone-backend");
};

const githubblogifyb = () => {
  window.open("https://github.com/Fayez-fyz/fyz-blog-app-backend");
};
const githubcribsappb = () => {
  window.open("https://github.com/Fayez-fyz/cribs-app-backend");
};
const githubtodoappb = () => {
  window.open("https://github.com/Fayez-fyz/Todo_app_nodejs");
};
const githubexpenseb = () => {
  window.open("https://github.com/Fayez-fyz/money-manager-nodejs");
};







  const github = () => {
    window.open("https://github.com/Fayez-fyz");
  };

  // const container = useRef(null);

  // useEffect(() => {
  //   if (container.current) {
  //     container.current.scrollTo(35, 0);
  //   }
  // }, []);

  // const scrollLeft = () => {
  //   if (container.current) {
  //     container.current.scrollBy(322, 0);
  //   }
  // };
  // const scrollRight = () => {
  //   if (container.current) {
  //     container.current.scrollBy(-322, 0);
  //   }
  // };

  return (
    <>
      <section name="project">
        <div className="container py-5">
          <div>
            <h1 className=" text-center " id="montserrat">
              Projects
            </h1>
            <hr className="w-100  mx-auto" />
          </div>
          <div>
            {/* <ScrollContainer
              className="scroll-container mt-5"
              innerRef={container}
            > */}
            {/* <Link smooth={true}> */}
            <div className="row d-flex justify-content-center">
              <div className="col-md-4 my-2" style={{ width: "23rem" }}>
                <div className="card cd border border-5 border-dark rounded-3 ">
                  <img
                    src="/images/social.jpg"
                    className="card-img"
                    alt="social"
                  />

                  <div className="card-img-overlay " id="playfair">
                    <div className="text-center my-4">
                      <div className="text-white card-title fs-1">
                        Social App
                      </div>
                      <div className="d-flex justify-content-center ">
                        <div>
                          <a
                            className="btn btn-outline-primary text-white border-white mx-1"
                            onClick={githubsocial}
                          >
                            Frontend
                          </a>
                        </div>

                        <div>
                          <a
                            className="btn btn-outline-primary text-white border-white mx-1"
                            onClick={deploysocial}
                          >
                            Deploy
                          </a>
                        </div>
                        <div>
                          <a
                            className="btn btn-outline-primary text-white border-white mx-1"
                            onClick={githubsocialb}
                          >
                            Backend
                          </a>
                        </div>
                      </div>
                      <div className="row row-cols-6 d-flex justify-content-center">
                        <i
                          className="devicon-nextjs-plain colored fs-2 my-1"
                          id="skills"
                          title="Next JS"
                        ></i>
                        <i
                          className="devicon-react-original colored fs-2 my-1"
                          id="skills"
                          title="React"
                        ></i>
                        <i
                          className="devicon-bootstrap-plain colored fs-2 my-1"
                          id="skills"
                          title="Bootstrap"
                        ></i>
                        <i
                          className="devicon-nodejs-plain colored fs-2 my-1"
                          id="skills"
                          title="Node JS"
                        ></i>
                        <i
                          className="devicon-express-original fs-2 my-1"
                          id="skills"
                          title="Express JS"
                        ></i>
                        <i
                          className="devicon-mongodb-plain colored fs-2 my-1"
                          id="skills"
                          title="Mongo DB"
                        ></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 my-2" style={{ width: "23rem" }}>
                <div className="card cd border border-5 border-dark rounded-3 ">
                  <img
                    src="/images/blog-app.png"
                    className="card-img"
                    alt="blog app"
                  />
                  <div className="card-img-overlay " id="playfair">
                    <div className="text-center my-4">
                      <div className="text-white card-title fs-1">Blog App</div>
                      <div className="d-flex justify-content-center ">
                        <div>
                          <a
                            className="btn btn-outline-primary text-white border-white mx-1"
                            onClick={githubblogify}
                          >
                            Frontend
                          </a>
                        </div>

                        <div>
                          <a
                            className="btn btn-outline-primary text-white border-white mx-1"
                            onClick={deployblogify}
                          >
                            Deploy
                          </a>
                        </div>
                        <div>
                          <a
                            className="btn btn-outline-primary text-white border-white mx-1"
                            onClick={githubblogifyb}
                          >
                            Backend
                          </a>
                        </div>
                      </div>
                      <div className="row row-cols-6 d-flex justify-content-center">
                        <i
                          className="devicon-nextjs-plain colored text-white fs-2 my-1"
                          id="skills"
                          title="Next JS"
                        ></i>
                        <i
                          className="devicon-react-original colored fs-2 my-1"
                          id="skills"
                          title="React"
                        ></i>
                        <i
                          className="devicon-bootstrap-plain colored fs-2 my-1"
                          id="skills"
                          title="Bootstrap"
                        ></i>
                        <i
                          className="devicon-nodejs-plain colored fs-2 my-1"
                          id="skills"
                          title="Node JS"
                        ></i>
                        <i
                          className="devicon-express-original text-white  fs-2 my-1"
                          id="skills"
                          title="Express JS"
                        ></i>
                        <i
                          className="devicon-mongodb-plain colored fs-2 my-1"
                          id="skills"
                          title="Mongo DB"
                        ></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="col-md-4 my-2" style={{ width: "23rem" }}>
                <div className="card cd border border-5 border-dark  rounded-3">
                  <img
                    src="/images/cribs.png"
                    className="card-img "
                    alt="crud"
                  />
                  <div className="card-img-overlay " id="playfair">
                    <div className="text-center my-4">
                      <div className="text-white card-title fs-1">
                        Cribs App
                      </div>
                      <div className="d-flex justify-content-center ">
                        <div>
                          <a
                            className="btn btn-outline-primary text-white border-white mx-1"
                            onClick={githubcribsapp}
                          >
                            Frontend
                          </a>
                        </div>

                        <div>
                          <a
                            className="btn btn-outline-primary text-white border-white mx-1"
                            onClick={deploycribsapp}
                          >
                            Deploy
                          </a>
                        </div>
                        <div>
                          <a
                            className="btn btn-outline-primary text-white border-white mx-1"
                            onClick={githubcribsappb}
                          >
                            Backend
                          </a>
                        </div>
                      </div>
                      <div className="row row-cols-6 d-flex justify-content-center">
                        <i
                          className="devicon-nextjs-plain colored fs-2 my-1"
                          id="skills"
                          title="Next JS"
                        ></i>
                        <i
                          className="devicon-react-original colored fs-2 my-1"
                          id="skills"
                          title="React"
                        ></i>
                        <i
                          className="devicon-bootstrap-plain colored fs-2 my-1"
                          id="skills"
                          title="Bootstrap"
                        ></i>
                        <i
                          className="devicon-nodejs-plain colored fs-2 my-1"
                          id="skills"
                          title="Node JS"
                        ></i>
                        <i
                          className="devicon-express-original text-white fs-2 my-1"
                          id="skills"
                          title="Express JS"
                        ></i>
                        <i
                          className="devicon-mongodb-plain colored fs-2 my-1"
                          id="skills"
                          title="Mongo DB"
                        ></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 my-2" style={{ width: "23rem" }}>
                <div className="card cd border border-5 border-dark  rounded-3">
                  <img
                    src="/images/money-manager.jpg"
                    className="card-img "
                    alt="expense"
                  />
                  <div className="card-img-overlay " id="playfair">
                    <div className="text-center my-4">
                      <div className="text-white card-title fs-1">
                        Money Manager
                      </div>
                      <div className="d-flex justify-content-center ">
                        <div>
                          <a
                            className="btn btn-outline-primary text-white border-white mx-1"
                            onClick={githubexpense}
                          >
                            Frontend
                          </a>
                        </div>

                        <div>
                          <a
                            className="btn btn-outline-primary text-white border-white mx-1"
                            onClick={deployexpense}
                          >
                            Deploy
                          </a>
                        </div>
                        <div>
                          <a
                            className="btn btn-outline-primary text-white border-white mx-1"
                            onClick={githubexpenseb}
                          >
                            Backend
                          </a>
                        </div>
                      </div>
                      <div className="row row-cols-6 d-flex justify-content-center">
                        {/* <i
                          className="devicon-nextjs-plain colored fs-2 my-1"
                          id="skills"
                          title="Next JS"
                        ></i> */}
                        <i
                          className="devicon-react-original colored fs-2 my-1"
                          id="skills"
                          title="React"
                        ></i>
                        <i
                          className="devicon-nodejs-plain colored fs-2 my-1"
                          id="skills"
                          title="Node JS"
                        ></i>
                        <i
                          className="devicon-express-original fs-2 my-1"
                          id="skills"
                          title="Express JS"
                        ></i>
                        <i
                          className="devicon-mongodb-plain colored fs-2 my-1"
                          id="skills"
                          title="Mongo DB"
                        ></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 my-2" style={{ width: "23rem" }}>
                <div className="card cd border border-5 border-dark  rounded-3 ">
                  <img
                    src="/images/chat-app.jpg"
                    className="card-img"
                    alt="social"
                  />
                  <div className="card-img-overlay " id="playfair">
                    <div className="text-center my-4">
                      <div className="text-white card-title fs-1">Chat App</div>
                      <div className="d-flex justify-content-center ">
                        <div>
                          <a
                            className="btn btn-outline-primary text-white border-white mx-1"
                            onClick={githubchatapp}
                          >
                            Frontend
                          </a>
                        </div>

                        <div>
                          <a
                            className="btn btn-outline-primary text-white border-white mx-1"
                            onClick={deploychatapp}
                          >
                            Deploy
                          </a>
                        </div>
                        <div>
                          <a
                            className="btn btn-outline-primary text-white border-white mx-1"
                            onClick={githubchatapp}
                          >
                            Backend
                          </a>
                        </div>
                      </div>
                      <div className="row row-cols-6 d-flex justify-content-center">
                        <i
                          className="devicon-nextjs-plain colored fs-2 my-1"
                          id="skills"
                          title="Next JS"
                        ></i>
                        <i
                          className="devicon-react-original colored fs-2 my-1"
                          id="skills"
                          title="React"
                        ></i>
                        {/* <i
                          className="devicon-nodejs-plain colored fs-2 my-1"
                          id="skills"
                          title="Node JS"
                        ></i>
                        <i
                          className="devicon-express-original fs-2 my-1"
                          id="skills"
                          title="Express JS"
                        ></i>
                        <i
                          className="devicon-mongodb-plain colored fs-2 my-1"
                          id="skills"
                          title="Mongo DB"
                        ></i> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="col-md-4 my-2" style={{ width: "23rem" }}>
                    <div className="card cd border border-5 border-dark  rounded-3">
                      <img
                        src="/images/todoapp.jpg"
                        className="card-img "
                        alt="todo"
                      />
                      <div className="card-img-overlay " id="playfair">
                        <div className="text-center my-5">
                          <h5 className="text-white fs-2 ">Todo App</h5>
                          <a
                            className="btn btn-outline-success text-white  border-white mx-1"
                            onClick={deploytodoapp}
                          >
                            Deploy Link
                          </a>
                          <a
                            className="btn btn-outline-primary text-white border-white mx-1"
                            onClick={githubtodoapp}
                          >
                            Github Link
                          </a>
                        </div>
                      </div>
                    </div>
                  </div> */}
              <div className="col-md-4  my-2" style={{ width: "23rem" }}>
                <div className="card cd border border-5 border-dark  rounded-3">
                  <img
                    src="/images/bd.png"
                    className="card-img"
                    alt="breaking bad"
                  />
                  <div className="card-img-overlay " id="playfair">
                    <div className="text-center my-4">
                      <div className="text-white card-title fs-1">
                        Breaking Bad 
                      </div>
                      <div className="d-flex justify-content-center ">
                        <div>
                          <a
                            className="btn btn-outline-primary text-white border-white mx-1"
                            onClick={githubbreaking}
                          >
                            Frontend
                          </a>
                        </div>

                        <div>
                          <a
                            className="btn btn-outline-primary text-white border-white mx-1"
                            onClick={deploybreaking}
                          >
                            Deploy
                          </a>
                        </div>
                        <div>
                          <a
                            className="btn btn-outline-primary text-white border-white mx-1"
                            onClick={githubbreaking}
                          >
                            Backend
                          </a>
                        </div>
                      </div>
                      <div className="row row-cols-6 d-flex justify-content-center">
                        <i
                          className="devicon-html5-plain colored fs-2 my-1"
                          id="skills"
                          title="HTML"
                        ></i>
                        <i
                          className="devicon-css3-plain colored fs-2 my-1"
                          id="skills"
                          title="CSS"
                        ></i>
                        <i
                          className="devicon-javascript-plain colored fs-2 my-1"
                          id="skills"
                          title="JavaScript"
                        ></i>
                        <i
                          className="devicon-bootstrap-plain colored fs-2 my-1"
                          id="skills"
                          title="Bootstrap"
                        ></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="col-md-4  my-2" style={{ width: "23rem" }}>
                    <div className="card cd border border-5 border-dark  rounded-3">
                      <img
                        src="/images/cryptoapi.jpg"
                        className="card-img "
                        alt="crypto"
                      />
                      <div className="card-img-overlay " id="playfair">
                        <div className="text-center my-5">
                          <h5 className="text-white fs-2 ">Live Crypto App</h5>
                          <a
                            className="btn btn-outline-success text-white  border-white mx-1"
                            onClick={deploycryptoapi}
                          >
                            Deploy Link
                          </a>
                          <a
                            className="btn btn-outline-primary text-white border-white mx-1"
                            onClick={githubcryptoapi}
                          >
                            Github Link
                          </a>
                        </div>
                      </div>
                    </div>
                  </div> */}
            </div>
            {/* </Link> */}
            {/* </ScrollContainer> */}
          </div>
          {/* 
          <div className="text-center mt-4">
            <button
              onClick={scrollRight}
              className="btn btn-sm btn-outline-secondary mx-3 border-white text-white"
            >
              <ArrowLeftOutlined className=" text-white h5" />
            </button>
            <button
              onClick={scrollLeft}
              className="btn btn-sm btn-outline-secondary mx-3 border-white text-white"
            >
              <ArrowRightOutlined className="text-white h5" />
            </button>
          </div> */}

          <div className="d-flex justify-content-center my-2">
            <a className="btn btn-outline-secondary" onClick={github}>
              See more
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
