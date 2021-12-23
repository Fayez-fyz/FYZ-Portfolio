import React from "react";
import {
  GithubOutlined,
  LinkedinOutlined,
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
  MailOutlined
} from "@ant-design/icons";

const Social_Icon = () => {
  const github = () => {
    window.open("https://github.com/Fayez-fyz");
  };
  const linkedIn = () => {
    window.open("https://www.linkedin.com/in/fayez-b-316684203/");
  };
  const facebook = () => {
    window.open("https://www.facebook.com/Zeyaf");
  };
  const instagram = () => {
    window.open("https://www.instagram.com/zyf_fyz_007/");
  };
  const twitter = () => {
    window.open("https://twitter.com/zeyaffayez007");
  };
  const mailTo=()=>{
    window.location = "mailto:zeyaffayez007@gmail.com";
  }

  return (
    <>
      <GithubOutlined
        title="Github"
        type="button"
        onClick={github}
        className="social  mx-3  "
        style={{ fontSize: "2em" }}
      />
       <MailOutlined
        title="Mail"
        type="button"
        onClick={mailTo}
        className=" social mx-3  "
        style={{ fontSize: "2em" }}
      />
      <LinkedinOutlined
        title="LinkedIn"
        type="button"
        onClick={linkedIn}
        className="social mx-3 "
        style={{ fontSize: "2em" }}
      />
     
      {/* <InstagramOutlined
        title="Instagram"
        type="button"
        onClick={instagram}
        className="social mx-2"
        style={{ fontSize: "3em" }}
      />
      <TwitterOutlined
        title="Twitter"
        type="button"
        onClick={twitter}
        className="social mx-2"
        style={{ fontSize: "3em" }}
      /> */}
    </>
  );
};

export default Social_Icon;
