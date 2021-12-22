import React from "react";
import "devicon";
import Image from "next/image";
const About = () => {
  return (
    <>
      <section name="about">
        <div className="container py-5">
          <div>
            <h1 className="display-5 text-center " id="montserrat">
              About
            </h1>
            <hr className="w-100 mx-auto" />
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div
                className="card abt-card mb-3 mx-auto"
                style={{ maxWidth: "90%", backgroundColor: "#EAEAFF" }}
              >
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src="/images/fz_pic.jpg"
                      alt="fyz"
                      id="pic"
                      className="img-fluid rounded-start"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <p className="card-text fw-bold my-3" id="montserrat">
                        Hello! I'm Fayez, a Full stack developer from Tamil
                        Nadu,India.
                        <br /> <br />
                        I love to creating certain things that live on the
                        internet and also  have good designing skills
                        ,development skills and problem solving skills. I develop
                        web apps with appealing UI and robust performance. Right
                        now, I currently going to complete Full stack developer
                        course in Guvi geek network private limited. In this
                        course i participated two hackathons, one capstone and
                        more mini projects.
                        <br /> <br />
                        Now I'm currently looking for challenging, respectable and
                        responsible work that can form out my personal and
                        professional growth and helps me to contribute
                        effectively to the company.
                        <br /> <br />I have many hobbies like play table tennis,
                        football, explore new places with friends , coding,
                        designing.
                      </p>
                      <blockquote className="blockquote lead text-center fw-bold mt-5 fs-5">
                        <p>
                          "I may not to be perfect,but I am surely of some help"
                        </p>{" "}
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
