import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import './styles.scss';
import { DiApple, DiAndroid } from 'react-icons/di'
import { FaDev, FaDatabase } from "react-icons/fa";

const About = () => {

  const PersonalDetails = [
    {
      label: "Name",
      value: "Manju Rathod",
    },

    {
      label: "Age",
      value: "24",
    },
    {
      label: "Address",
      value: "pune",
    },
    {
      label: "Email",
      value: "manjurathod7344@gmail.com",
    },
    {
      label: "Contact No",
      value: "7057722832",
    },
  ]

  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />


      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(-900px)"
            }}
            end={{
              transform: "translatex(0px)"
            }}
          >

            <h3>Front End Developer</h3>
            <p>
              Aspiring Front End Developer with knowledge of JavaScript, React.Js, HTML and CSS.
              Eager to contribute to the development of visually appealing and user-friendly web applications.
              A fast learner, committed to enhancing skills and creating engaging
              web experiences through continuous growth and collaboration.
              Committed to continuous learning and staying updated with the latest front-end technologies.
            </p>
          </Animate>

          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(500px)"
            }}
            end={{
              transform: "translatex(0px)"
            }}
          >

            <h3 className="personalInformationHeaderText">Personal Information</h3>
            <ul>
              {
                PersonalDetails.map((item, i) => (
                  <li key={i}>
                    <span className="title">{item.label}</span>
                    <span className="value">{item.value}</span>
                  </li>
                ))
              }
            </ul>
          </Animate>
        </div>
        <div className="about__content__servicesWrapper">
        <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(600px)"
            }}
            end={{
              transform: "translatex(0px)"
            }}
          >
          <div className="about__content__servicesWrapper__innerContent">
            <div>
              <FaDev size={60} color="var(--yellow-theme-main-color)" />
            </div>
            <div>
              <DiAndroid size={60} color="var(--yellow-theme-main-color)" />

            </div>
            <div>
              <FaDatabase size={60} color="var(--yellow-theme-main-color)" />

            </div>
            <div>
              <DiApple size={60} color="var(--yellow-theme-main-color)" />

            </div>
            
          </div>
          </Animate>
        </div>

      </div>
    </section>
  );
};
export default About;