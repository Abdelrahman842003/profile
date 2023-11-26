import React from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import ScrollToTopFab from "../scroll/Scroll";

const multipleBoxShadow = (n) => {
  const random = (max) => Math.floor(Math.random() * max);

  let value = `${random(2000)}px ${random(2000)}px #FFF`;

  for (let i = 2; i <= n; i++) {
    value += `, ${random(2000)}px ${random(2000)}px #FFF`;
  }

  return value;
};

const animStar = keyframes`
  from {
    transform: translateY(0px);
  }

  to {
    transform: translateY(-2000px);
  }
`;

const starsSmall = multipleBoxShadow(700);
const starsMedium = multipleBoxShadow(200);
const starsBig = multipleBoxShadow(100);
const Container = styled.div`
  height: 100%;
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
  overflow: hidden;
`;

const Stars = styled.div`
  width: 1px;
  height: 1px;
  background: transparent;
  box-shadow: ${starsSmall};
  animation: ${animStar} 50s linear infinite;

  &:after {
    content: " ";
    position: absolute;
    top: 2000px;
    width: 1px;
    height: 1px;
    background: transparent;
    box-shadow: ${starsSmall};
  }
`;

const Stars2 = styled(Stars)`
  width: 2px;
  height: 2px;
  box-shadow: ${starsMedium};
  animation: ${animStar} 100s linear infinite;

  &:after {
    width: 2px;
    height: 2px;
    box-shadow: ${starsMedium};
  }
`;

const Stars3 = styled(Stars)`
  width: 3px;
  height: 3px;
  box-shadow: ${starsBig};
  animation: ${animStar} 150s linear infinite;

  &:after {
    width: 3px;
    height: 3px;
    box-shadow: ${starsBig};
  }
`;

const Title = styled.div`
  color: #fff;
  text-align: center;
  font-family: "Lato", sans-serif;
  font-weight: 300;
  font-size: 50px;
  margin-top: -60px;
  padding-left: 10px;

  span {
    background: -webkit-linear-gradient(white, #38495a);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export default function Projects() {
  return (
    <Container>
      <Stars />
      <Stars2 />
      <Stars3 />
      <Title>
        <br />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <section className="text-gray-200 ">
            <div className="max-w-6xl mx-auto px-5  ">
              <div className="text-center mb-20">
              <h1 className="flex  max-sm:justify-between max-sm:flex-row max-sm:items-center  flex-col-reverse align-items-center title-font  mb-4 text-4xl font-extrabold leading-10 tracking-tight sm:text-5xl sm:leading-none md:text-6xl">
                  Projects
                  <div className="flex  max-sm:flex-col max-sm:p-3">
                    <div className=" max-md:py-1 max-md:pt-1 max-lg:py-1 max-lg:pt-1 max-sm:p-2 max-sm:mr-1 max-sm:text-sm mr-4 p-3 text-center">
                      <Link
                        to={"/"}
                        className="bg-transparent hover:bg-slate-800 hover:border-slate-500 text-slate-400 font-semibold hover:text-white py-2 px-4 border border-gray-700 hover:border-transparent rounded text-base transition duration-300 "
                      >
                        Home 🏠
                      </Link>
                    </div>
                    <div className=" max-md:py-1 max-md:pt-1 max-lg:py-1 max-lg:pt-1 max-sm:p-2 max-sm:mr-1 max-sm:text-sm mr-4 p-3 text-center">
                      <Link
                        to={"/skills"}
                        className="bg-transparent hover:bg-slate-800 hover:border-slate-500 text-slate-400 font-semibold hover:text-white py-2 px-4 border border-gray-700 hover:border-transparent rounded text-base transition duration-300 "
                      >
                        Skills 🛠️
                      </Link>
                    </div>
                    <div className=" max-md:py-1 max-md:pt-1 max-lg:py-1 max-lg:pt-1 max-sm:p-2 max-sm:mr-1 max-sm:text-sm mr-4 p-3 text-center">
                      <Link
                        to={"/contact"}
                        className="bg-transparent hover:bg-slate-800 hover:border-slate-500 text-slate-400 font-semibold hover:text-white py-2 px-4 border border-gray-700 hover:border-transparent rounded text-base transition duration-300 "
                      >
                        contact ☎️
                      </Link>
                    </div>
                  </div>
                </h1>
                <p className="text-base leading-relaxed xl:w-full lg:w-3/4 mx-auto">
                  "As a computer science student, I possess foundational
                  programming skills and excel in user-friendly website design.
                  Proficient in multiple languages and modern technologies, I am
                  adept at translating project requirements into efficient code.
                  A committed team player, I stay updated on the latest software
                  engineering trends, ensuring continuous improvement for
                  impactful contributions."
                </p>

                <div className="flex mt-6 justify-center">
                  <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex" />
                </div>
              </div>
              <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 ">
                <div className="p-10 md:w-1/3 md:mb-0 mb-6 flex flex-wrap flex-col ">
                  <div className="pattern-dots-md gray-light">
                    <div className="rounded bg-gray-800 p-4 transform translate-x-6 -translate-y-6  ">
                      <div className="flex-grow ">
                        <h2 className=" text-xl title-font font-medium mb-3">
                          Prayer App 🙏
                        </h2>
                        <p className="leading-relaxed text-sm text-left">
                          Project Description: A user-friendly application that
                          enables users to access prayer times and Qibla
                          direction based on their current location. Developed
                          using HTML, CSS,Teact, and JavaScript . 🚀🤖
                        </p>
                        <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                          <div className="max-sm:py-6 max-sm:mt-7  py-6 px-3 mt-32 sm:mt-0">
                            <button
                              style={{
                                backgroundColor: "rgba(47, 53, 66, 0.3)",
                              }}
                              className=" group relative h-12 w-48 overflow-hidden rounded-lg bg-transparent text-lg shadow"
                            >
                              <div className=" absolute inset-0 w-3 bg-black -all duration-[250ms] ease-out group-hover:w-full"></div>
                              <a
                                href="https://abdelrahman842003.github.io/prayer/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className=" relative text-gray-400 group-hover:text-white"
                              >
                                Go Hero!
                              </a>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col flex-wrap">
                  <div className="pattern-dots-md gray-light">
                    <div className="rounded bg-gray-800 p-4 transform translate-x-6 -translate-y-6  ">
                      <div className="flex-grow ">
                        <h2 className=" text-xl title-font font-medium mb-3">
                          News 📰
                        </h2>
                        <p className="leading-relaxed text-sm text-left">
                          Project Description: An innovative news application
                          that aggregates and displays the latest news and
                          articles from various sources. It utilizes React.js
                          and Redux for seamless user experience. 🚀🤖
                        </p>
                        <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                          <div className="max-sm:py-6 max-sm:mt-7  py-6 px-3 mt-32 sm:mt-0">
                            <button
                              style={{
                                backgroundColor: "rgba(47, 53, 66, 0.3)",
                              }}
                              className=" group relative h-12 w-48 overflow-hidden rounded-lg bg-transparent text-lg shadow"
                            >
                              <div className=" absolute inset-0 w-3 bg-black -all duration-[250ms] ease-out group-hover:w-full"></div>
                              <a
                                href="https://github.com/Abdelrahman842003/news"
                                target="_blank"
                                rel="noopener noreferrer"
                                className=" relative text-gray-400 group-hover:text-white"
                              >
                                Go Hero!
                              </a>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col flex-wrap">
                  <div className="pattern-dots-md gray-light">
                    <div className="rounded bg-gray-800 p-4 transform translate-x-6 -translate-y-6  ">
                      <div className="flex-grow ">
                        <h2 className=" text-xl title-font font-medium mb-3">
                          E-commerce Project 🛒
                        </h2>
                        <p className="leading-relaxed text-sm text-left">
                          Project Description: A robust e-commerce platform
                          showcasing a wide range of products with an elegant
                          and intuitive user interface. Built using React.js and
                          Redux for efficient state management. 🚀🤖
                        </p>
                        <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                          <div className="max-sm:py-6 max-sm:mt-7  py-6 px-3 mt-32 sm:mt-0">
                            <button
                              style={{
                                backgroundColor: "rgba(47, 53, 66, 0.3)",
                              }}
                              className=" group relative h-12 w-48 overflow-hidden rounded-lg bg-transparent text-lg shadow"
                            >
                              <div className=" absolute inset-0 w-3 bg-black -all duration-[250ms] ease-out group-hover:w-full"></div>
                              <a
                                href="https://abdelrahman842003.github.io/Ecommerce-project/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className=" relative text-gray-400 group-hover:text-white"
                              >
                                Go Hero!
                              </a>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col flex-wrap">
                  <div className="pattern-dots-md gray-light">
                    <div className="rounded bg-gray-800 p-4 transform translate-x-6 -translate-y-6  ">
                      <div className="flex-grow ">
                        <h2 className=" text-xl title-font font-medium mb-3">
                          DRUCS Project 💻
                        </h2>
                        <p className=" text-sm text-left">
                          A comprehensive university management system
                          encompassing student management, course
                          administration, faculty members, and timetabling.
                          Developed using React.js and Redux for scalability and
                          modularity. 🚀🤖
                        </p>
                        <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                          <div className="max-sm:py-6 max-sm:mt-7  py-6 px-3 mt-32 sm:mt-0">
                            <button
                              style={{
                                backgroundColor: "rgba(47, 53, 66, 0.3)",
                              }}
                              className=" group relative h-12 w-48 overflow-hidden rounded-lg bg-transparent text-lg shadow"
                            >
                              <div className=" absolute inset-0 w-3 bg-black -all duration-[250ms] ease-out group-hover:w-full"></div>
                              <a
                                href="https://github.com/Abdelrahman842003/DRUCS/tree/master"
                                target="_blank"
                                rel="noopener noreferrer"
                                className=" relative text-gray-400 group-hover:text-white"
                              >
                                Go Hero!
                              </a>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col flex-wrap">
                  <div className="pattern-dots-md gray-light">
                    <div className="rounded bg-gray-800 p-4 transform translate-x-6 -translate-y-6  ">
                      <div className="flex-grow ">
                        <h2 className=" text-xl title-font font-medium mb-3">
                          Image Editor 🎨
                        </h2>
                        <p className="leading-relaxed text-sm text-left">
                          Project Description: An advanced image editing
                          application empowering users to apply filters, crop,
                          and enhance images with ease. Developed using HTML,
                          CSS, and JavaScript. 🚀🤖
                        </p>
                        <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                          <div className="max-sm:py-6 max-sm:mt-7  py-6 px-3 mt-32 sm:mt-0">
                            <button
                              style={{
                                backgroundColor: "rgba(47, 53, 66, 0.3)",
                              }}
                              className=" group relative h-12 w-48 overflow-hidden rounded-lg bg-transparent text-lg shadow"
                            >
                              <div className=" absolute inset-0 w-3 bg-black -all duration-[250ms] ease-out group-hover:w-full"></div>
                              <a
                                href="https://github.com/Abdelrahman842003/make_image_editor/tree/master"
                                target="_blank"
                                rel="noopener noreferrer"
                                className=" relative text-gray-400 group-hover:text-white"
                              >
                                Go Hero!
                              </a>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </motion.div>
      </Title>

      <ScrollToTopFab />
    </Container>
  );
}
