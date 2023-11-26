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

export default function Skills() {
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
                <h1 className="flex max-sm:justify-between max-sm:flex-row max-sm:items-center  flex-col-reverse align-items-center title-font  mb-4 text-4xl font-extrabold leading-10 tracking-tight sm:text-5xl sm:leading-none md:text-6xl">
                  Skills
                  <div className="flex   max-sm:flex-col max-sm:p-3">
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
                        to={"/projects"}
                        className="bg-transparent hover:bg-slate-800 hover:border-slate-500 text-slate-400 font-semibold hover:text-white py-2 px-4 border border-gray-700 hover:border-transparent rounded text-base transition duration-300 "
                      >
                        Projects 🚀
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
                <div className="p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col ">
                  <div className="pattern-dots-md gray-light">
                    <div className="rounded bg-gray-800 p-4 transform translate-x-6 -translate-y-6  ">
                      <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-5 flex-shrink-0 p-2">
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                          />
                        </svg>{" "}
                      </div>

                      <div className="flex-grow ">
                        <h2 className=" text-xl title-font font-medium mb-3">
                          Frontend Developer
                        </h2>
                        <p className="leading-relaxed text-sm text-justify">
                          Your site will be special and unique with me using it.
                          <br /> HTML, CSS, JavaScript, React, Redux, API
                          Testing, Bootstrap, Material UI, Tailwind, JSON,
                          Responsive Design, User Experience, Interactive,
                          Creative 🎨💻.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col ">
                  <div className="pattern-dots-md gray-light">
                    <div className="rounded bg-gray-800 p-4 transform translate-x-6 -translate-y-6 ">
                      <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-5 flex-shrink-0">
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                          />
                        </svg>
                      </div>
                      <div className="flex-grow">
                        <h2 className=" text-xl title-font font-medium mb-3">
                          Programming basics
                        </h2>
                        <p className="leading-relaxed text-sm text-justify">
                          In the programming world, it's essential to grasp
                          fundamentals like variables, conditions, loops, and
                          algorithms to build a strong foundation. Enjoy your
                          coding journey and discover the creativity in
                          transforming your ideas into reality! 🚀📝
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col ">
                  <div className="pattern-dots-md gray-light">
                    <div className="rounded bg-gray-800 p-4 transform translate-x-6 -translate-y-6 ">
                      <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 mb-5 flex-shrink-0">
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                          />
                        </svg>
                      </div>
                      <div className="flex-grow">
                        <h2 className=" text-xl title-font font-medium mb-3">
                          Back-end & AI
                        </h2>
                        <p className="leading-relaxed text-sm text-justify">
                          Excited about mastering backend development and AI to
                          shape my career. Building advanced apps, enhancing
                          digital experiences with AI. Ready for a continuous
                          journey of learning and professional growth! 🚀🤖
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <ScrollToTopFab />

        </motion.div>
      </Title>
    </Container>
  );
}
