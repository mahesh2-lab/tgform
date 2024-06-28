import React from "react";
import NavBar from "./NavBar.jsx";
import { Button } from "@material-tailwind/react";
import useGetUserdata from "../hooks/useGetUserdata.js";
import TopBarProgress from "react-topbar-progress-indicator";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import { Helmet } from "react-helmet";

const AboutUsPage = () => {
  const styles = {
    section: {
      padding: "40px 0",
    },
    flowText: {
      lineHeight: 1.6,
      color: "#333",
    },
    featureBlock: {
      backgroundColor: "#f5f5f5",
      padding: "20px",
      borderRadius: "10px",
      marginBottom: "20px",
    },
  };
  return (
    <>
      <Helmet>
        <title>TG | Print</title>
      </Helmet>
      <div className="h-full w-full">
        <NavBar number={3} />

        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            <div className="g-white rounded-lg shadow-lg max-w-full w-full mx-auto flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
              <div className="w-full flex justify-start mb-16 items-center ">
                <img
                  className="avatar rounded-lg shadow-lg"
                  src="./placeholder-avatar.jg"
                  alt="Sorry, I can't upload images; my shyness meter is off the charts! 🙈"
                  style={{ width: "170px", height: "200px" }}
                />
                <div className=" ms-20">
                  <Typography variant="h2" color="blue-gray">
                    Mahesh Sunil Chopade
                  </Typography>
                  <Typography
                    variant="medium"
                    color="gray"
                    className="font-normal"
                  >
                    Web Developer
                  </Typography>
                </div>
              </div>
              <div className="container">
                <div style={styles.section}>
                  <div className="row">
                    <div className="col s12 m8 offset-m2">
                      <div style={styles.featureBlock}>
                        <h4>About Me:</h4>
                        <p style={styles.flowText}>
                        Hello! I'm Mahesh Sunil Chopade, a second-year student with a passion for full-stack development. My journey into the world of programming and technology has led me to create the student panel known as Tg Froms.
                        </p>
                      </div>
                      <div style={styles.featureBlock}>
                        <h4>Passion and Dedication:</h4>
                        <p style={styles.flowText}>
                        Tg Froms is more than just a project; it represents my dedication to learning and mastering the art of full-stack development. Through Tg Froms, I aim to showcase my skills, creativity, and problem-solving abilities while providing a valuable tool for fellow students.

                        </p>
                      </div>
                      <div style={styles.featureBlock}>
                        <h4>Anywhere, Anytime Access</h4>
                        <p style={styles.flowText}>
                          With Tg Forms, students can access and fill out forms
                          anytime, anywhere, using any device with an internet
                          connection. Whether you're on campus, at home, or on
                          the go, Tg Forms ensures that you have the flexibility
                          and convenience to complete necessary paperwork at
                          your convenience.
                        </p>
                      </div>
                      <div style={styles.featureBlock}>
                        <h4>Streamlined Process</h4>
                        <p style={styles.flowText}>
                          Gone are the days of tedious paperwork and manual
                          document handling. Tg Forms streamlines the entire
                          process, making it quick and easy to submit
                          information and upload documents securely. Say goodbye
                          to lost forms and misplaced documents – Tg Forms keeps
                          everything organized and accessible in one centralized
                          location.
                        </p>
                      </div>
                      <div style={styles.featureBlock}>
                        <h4>Empowering Students</h4>
                        <p style={styles.flowText}>
                          As the brainchild of Mahesh Sunil Chopade, Tg Forms
                          reflects a commitment to innovation, efficiency, and
                          student empowerment. By leveraging the power of
                          technology, Tg Forms revolutionizes the way students
                          manage their academic information, empowering them to
                          take control of their academic journey with ease.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default AboutUsPage;
