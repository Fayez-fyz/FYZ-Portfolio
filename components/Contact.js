import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import {
  EnvironmentOutlined,
  PhoneOutlined,
  MailOutlined,
} from "@ant-design/icons";
import Social_Icon from "./Social Icon/Social_Icon";
const Contact = () => {
  const [response, setResponse] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const sendEmail = async (e) => {
    e.preventDefault();
    try {
      const data = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        e.target,
        process.env.NEXT_PUBLIC_ID
      );
      console.log(data);
      if (data.status == 200) {
        setResponse("Your message successfully sent");

        setTimeout(() => {
          setResponse("");
        }, 8000);
      }

      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      setResponse("Something wrong in server");
      setTimeout(() => {
        setResponse("");
      }, 8000);
      console.log(error);
    }
  };

  const tel = () =>{
    window.open('tel:+918098838503')
  }
  const mailTo=()=>{
    window.location = "mailto:zeyaffayez007@gmail.com";
  }
  const  location = ()=>{
    window.open('https://goo.gl/maps/cPdc9xbVm4sHyvaFA')
  }

  return (
    <>
      <section name="contact" style={{ backgroundColor: "#121222" }}>
        <div className="container mb-2">
          <div>
            <h1 className="text-center text-white mt-5" id="montserrat">
              Contact
            </h1>
            <hr className="w-100 text-white mx-auto" />
          </div>
          <div className="text-white px-3 py-3">
           

           <div className="row">
              <div className="col-lg-6">
                <div
                  className={`lead text-center ${
                    response === "Your message successfully sent"
                      ? "text-success"
                      : "text-danger"
                  } `}
                >
                  {response}
                </div>
                <form onSubmit={sendEmail}>
                  <div className="form-group">
                    <label className="" htmlFor="name">
                      Name
                    </label>
                    <input
                      className="form-control text-white border-white"
                      style={{ backgroundColor: "#121222" }}
                      id="name"
                      type="text"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      placeholder="Name"
                    />
                  </div>
                  <div className="form-group">
                    <label className="" htmlFor="email">
                      Email
                    </label>
                    <input
                      className="form-control  text-white border-white"
                      style={{ backgroundColor: "#121222" }}
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      name="user_email"
                      required
                      placeholder="Email"
                    />
                  </div>
                  <div className="form-group">
                    <label className="" htmlFor="message">
                      Message
                    </label>
                    <textarea
                      className="form-control  text-white border-white"
                      style={{ backgroundColor: "#121222" }}
                      id="message"
                      name="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows="12"
                      required
                      placeholder="Message"
                    />
                  </div>
                  <input
                    className="btn btn-outline-secondary border-white text-white my-2 col-12"
                    type="submit"
                    defaultValue="Submit"
                    onClick={() => response}
                  />
                </form>
              </div>
              <div className="col-lg-6 ">
              {/* <div className="row row-cols-1 g-4"> */}
          <div className="col">
              <div className="card h-25 mx-auto cr border border-white border-1 "  onClick={location} style={{ backgroundColor: "#121222" }}>
                <div className="card-body text-center my-2">
                <EnvironmentOutlined className='my-2'
                    style={{ fontSize: "3rem", textAlign: "center" }}
                    size={10}
                  >
                    {" "}
                  </EnvironmentOutlined>
                  <h5 className="card-title text-light my-2">Thanjavur, Tamil Nadu</h5>
                  
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card mx-auto cr  border border-white border-1  my-3 " onClick={tel} style={{ backgroundColor: "#121222" }}>
                <div className="card-body text-center my-2">
                <PhoneOutlined className='my-2'
                    style={{ fontSize: "3rem", textAlign: "center" }}
                    size={10}
                  >
                    {" "}
                  </PhoneOutlined>
                  <h5 className="card-title text-light my-2">+91-8098838503</h5>
                  
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card mx-auto cr  border border-white border-1 "  onClick={mailTo} style={{ backgroundColor: "#121222" }}>
                <div className="card-body text-center my-2">
                <MailOutlined className='my-2'
                    style={{ fontSize: "3rem", textAlign: "center" }}
                    size={10}
                  >
                    {" "}
                  </MailOutlined>
                  <h5 className="card-title text-light my-2">zeyaffayez007@gmail.com</h5>
                  
                </div>
              </div>
            {/* </div> */}
          </div>

                {/* <div className="container py-2">
                <h1 className='display-5 fw-bold text-white text-center'>Get in Touch</h1>
                <hr className="w-100 text-white mx-auto" />
                  <div className=" d-flex justify-content-center">
                  
                   <div>
                   <EnvironmentOutlined  style={{ fontSize: "3rem", textAlign: "left" }}></EnvironmentOutlined>
                   <span className="lead">Thanjavur,Tamil Nadu</span>
                   </div>
                  </div>
                  <div className=" d-flex justify-content-center my-3">
                  
                  <div>
                  <PhoneOutlined  style={{ fontSize: "3rem", textAlign: "left" }}></PhoneOutlined>
                  <span className="lead ">+91-8098838503</span>
                  </div>
                 </div>
                 <div className=" d-flex justify-content-center my-3">
                 <MailOutlined className='mx-2' style={{ fontSize: "3rem", textAlign: "left" }}></MailOutlined>
                  
                 
                  <span className="lead">zeyaffayez007@gmail.com</span>
                  
                 </div>
                </div>  */}
              </div>

              {/* <div className="col-md-6 ">
                <div className="container py-2  ">
                  <div className="my-4 text-center ">
                    <EnvironmentOutlined
                      style={{ fontSize: "3rem", textAlign: "center" }}
                      size={10}
                    >
                      {" "}
                    </EnvironmentOutlined>
                    <span className="lead mx-3"> Thanjavur,Tamil Nadu</span>
                  </div>
                  <div className="my-4 text-center">
                    <PhoneOutlined
                      style={{ fontSize: "3rem", textAlign: "center" }}
                      size={10}
                    >
                      {" "}
                    </PhoneOutlined>
                    <span className="lead mx-3"> +91-8098838503</span>
                  </div>
                  <div className="my-4 text-center">
                    <MailOutlined
                      style={{ fontSize: "3rem", textAlign: "center" }}
                      size={10}
                    >
                      {" "}
                    </MailOutlined>
                    <span className="lead mx-3"> zeyaffayez007@gmail.com</span>
                  </div>

                  <hr className="w-100 mt-3" />
                  <div className="text-center my-4 ">
                    <Social_Icon />
                  </div>
                  <hr className="w-100 mt-3" />
                  <div className="text-center">
                    &copy; ALL OF THE RIGHTS RESERVED
                  </div>
                </div>
              </div> */}
            </div>
            <hr className="w-100 mt-3" />
                  <div className="text-center">
                    &copy; ALL OF THE RIGHTS RESERVED
                  </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
