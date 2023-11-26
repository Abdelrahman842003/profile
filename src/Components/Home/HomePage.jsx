import React from "react";
import styled, { keyframes } from "styled-components";
import ImageLogo from "../img/my-avatar.png";

import { useEffect } from "react";
import { useRef } from "react";
import CV from "../cv/Abdelrahman eid (CV).pdf";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const random = (max) => Math.floor(Math.random() * max);

const multipleBoxShadow = (n) => {
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
  height: 100vh;
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
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  color: #fff;
  text-align: center;
  font-family: "Lato", sans-serif;
  font-weight: 300;
  font-size: 50px;
  letter-spacing: 10px;
  margin-top: -60px;
  padding-left: 10px;
  transition: 0.3s;

  span {
    background: -webkit-linear-gradient(white, #38495a);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const HomePage = () => {
  const texts = [
    "Software Engineer",
    "Web Developer",
    "UI/UX Designer",
    "Frontend Developer",
  ];

  const elts = {
    text1: useRef(null),
    text2: useRef(null),
  };

  let textIndex = texts.length - 1;
  let morph = 0;
  let cooldown = 0.25;

  const doMorph = () => {
    morph -= cooldown;
    cooldown = 0;

    let fraction = morph / 1;

    if (fraction > 1) {
      cooldown = 0.25;
      fraction = 1;
    }

    setMorph(fraction);
  };

  const setMorph = (fraction) => {
    elts.text2.current.style.filter = `blur(${Math.min(
      8 / fraction - 8,
      100
    )}px)`;
    elts.text2.current.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

    fraction = 1 - fraction;
    elts.text1.current.style.filter = `blur(${Math.min(
      8 / fraction - 8,
      100
    )}px)`;
    elts.text1.current.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

    elts.text1.current.textContent = texts[textIndex % texts.length];
    elts.text2.current.textContent = texts[(textIndex + 1) % texts.length];
  };

  const doCooldown = () => {
    morph = 0;

    elts.text2.current.style.filter = "";
    elts.text2.current.style.opacity = "100%";

    elts.text1.current.style.filter = "";
    elts.text1.current.style.opacity = "0%";
  };

  useEffect(
    () => {
      let animationFrameId;
      const animate = () => {
        animationFrameId = requestAnimationFrame(animate);

        let newTime = new Date();
        let shouldIncrementIndex = cooldown > 0;
        let dt = (newTime - time) / 5000;
        time = newTime;

        cooldown -= dt;

        if (cooldown <= 0) {
          if (shouldIncrementIndex) {
            textIndex++;
          }

          doMorph();
        } else {
          doCooldown();
        }
      };

      let time = new Date();
      animate();

      // Cleanup function

      return () => {
        cancelAnimationFrame(animationFrameId);
      };
    },
    [
      /* dependencies */
    ]
  );
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
          className="container mx-auto px-4"
        >
          <div
            className="relative flex flex-col min-w-0 break-words bg-slate-800 w-full mb-6 shadow-2xl rounded-lg -mt-64"
            style={{ backgroundColor: "rgba(47, 53, 66, 0.3)" }}
          >
            <div className="px-6">
              <div className="flex flex-wrap justify-center">
                <div className=" w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                  <div className="relative">
                    <img
                      alt="..."
                      src={ImageLogo}
                      className="shadow-xl rounded-full h-auto align-middle border border-slate-700  absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                  <div className="max-sm:py-6 max-sm:mt-7  py-6 px-3 mt-32 sm:mt-0">
                    <button
                      style={{ backgroundColor: "rgba(47, 53, 66, 0.3)" }}
                      className=" group relative h-12 w-48 overflow-hidden rounded-lg bg-transparent text-lg shadow"
                    >
                      <div className=" absolute inset-0 w-3 bg-black -all duration-[250ms] ease-out group-hover:w-full"></div>
                      <a
                        href={CV}
                        target="_blank"
                        rel="noopener noreferrer"
                        className=" relative text-gray-400 group-hover:text-white"
                      >
                        Download CV!
                      </a>
                    </button>
                  </div>
                </div>
                <div className="max-md:py-1 max-md:pt-1 lg:w-4/12    max-sm:py-1 max-sm:pt-1 max-sm:flex-col lg:flex-col flex justify-center py-4  pt-8">
                  <Link
                    to={"/skills"}
                    className="bg-transparent m-1 hover:bg-slate-800 hover:border-slate-500 text-slate-400 font-semibold hover:text-white py-2 px-4 border border-gray-700 hover:border-transparent rounded text-base transition duration-300 "
                  >
                    Skills
                  </Link>
                  <Link
                    to={"/projects"}
                    className="  bg-transparent m-1 hover:bg-slate-800 hover:border-slate-500 text-slate-400 font-semibold hover:text-white py-2 px-4 border border-gray-700 hover:border-transparent rounded text-base transition duration-300 "
                  >
                    Projects
                  </Link>
                  <Link
                    to={"/contact"}
                    className="bg-transparent m-1 hover:bg-slate-800 hover:border-slate-500 text-slate-400 font-semibold hover:text-white py-2 px-4 border border-gray-700 hover:border-transparent rounded text-base transition duration-300 "
                  >
                    Contact
                  </Link>
                </div>
              </div>
              <div className="max-md:mt-5 max-lg:mt-5 max-sm:mt-5  text-center mt-12">
                <h3 className="max-md:text-xl max-lg:text-xl  max-sm:text-sm text-4xl font-semibold leading-normal  text-slate-600 mb-2">
                  Welcome , I am <span> Abdelrahman Eid</span>{" "}
                </h3>
                <div className="m-4 relative top-15 inset-0 mx-auto w-full h-20 flex items-center justify-center filter blur-[0.6px]">
                  <span
                    ref={elts.text1}
                    id="text1"
                    className=" max-sm:text-sm absolute w-full inline-block text-4xl font-extrabold text-center select-none"
                  >
                    {texts[textIndex % texts.length]}
                  </span>
                  <span
                    ref={elts.text2}
                    id="text2"
                    className="max-sm:text-sm  absolute w-full inline-block text-4xl font-extrabold text-center select-none"
                  >
                    {texts[(textIndex + 1) % texts.length]}
                  </span>
                </div>

                <div className="w-full text-center">
                  <div className=" max-sm:pt-1 flex justify-center pt-8 pb-0 lg:pt-4">
                    <div className="flex space-x-2">
                      <a
                        className="transition duration-300   p-1 -m-1 text-gray-400 hover:text-amber-500 focus:outline-none focus-visible:ring-2 ring-primary"
                        href="https://github.com/Abdelrahman842003"
                        rel="noopener"
                        aria-label="Ariel Cerda on Github"
                        target="_blank"
                      >
                        <svg
                          className="w-6 h-6 overflow-visible fill-current"
                          alt=""
                          aria-hidden="true"
                          viewBox="0 0 140 140"
                        >
                          <path d="M70 1.633a70 70 0 00-21.7 136.559h1.692a5.833 5.833 0 006.183-6.184v-1.225-6.358a2.917 2.917 0 00-1.167-1.925 2.917 2.917 0 00-2.45-.583C36.925 125.3 33.6 115.5 33.367 114.858a27.067 27.067 0 00-10.034-12.775 6.767 6.767 0 00-.875-.641 3.675 3.675 0 012.217-.409 8.575 8.575 0 016.708 5.134 17.5 17.5 0 0023.334 6.766 2.917 2.917 0 001.691-2.1 11.667 11.667 0 013.267-7.175 2.917 2.917 0 00-1.575-5.075c-13.825-1.575-27.942-6.416-27.942-30.275a23.333 23.333 0 016.125-16.216A2.917 2.917 0 0036.808 49a20.533 20.533 0 01.059-14 32.317 32.317 0 0114.7 6.708 2.858 2.858 0 002.45.409A61.892 61.892 0 0170 39.958a61.075 61.075 0 0116.042 2.159 2.858 2.858 0 002.391-.409 32.608 32.608 0 0114.7-6.708 20.825 20.825 0 010 13.883 2.917 2.917 0 00.525 3.092 23.333 23.333 0 016.125 16.042c0 23.858-14.175 28.641-28.058 30.216a2.917 2.917 0 00-1.575 5.134 12.833 12.833 0 013.558 10.15v18.55a6.183 6.183 0 002.1 4.841 7 7 0 006.184 1.109A70 70 0 0070 1.633z"></path>
                        </svg>
                      </a>
                      <a
                        className="transition duration-300 p-1 -m-1 text-gray-400 hover:text-black focus:outline-none focus-visible:ring-2 ring-primary"
                        href="https://www.linkedin.com/in/abdelrahman-eid-394337227/"
                        rel="noopener"
                        aria-label="Ariel Cerda on Linkedin"
                        target="_blank"
                      >
                        <svg
                          className="w-6 h-6 overflow-visible fill-current"
                          alt=""
                          aria-hidden="true"
                          viewBox="0 0 140 140"
                        >
                          <path d="M23.4 44.59h-4.75a12.76 12.76 0 00-9.73 2.19 9.44 9.44 0 00-2.35 7.12V131a9.08 9.08 0 002.3 7 9.24 9.24 0 006.82 2c2.22 0 4.15-.21 8.24-.06a12 12 0 009.25-2 9.1 9.1 0 002.29-7V53.9a9.44 9.44 0 00-2.34-7.12 12.68 12.68 0 00-9.73-2.19zM21 0A16.19 16.19 0 005.09 15.6 16.52 16.52 0 0021 31.86 16.12 16.12 0 0037 15.6 16.18 16.18 0 0021 0zM99.74 43.63a31.09 31.09 0 00-20.93 6.3A7.25 7.25 0 0077 46.34a6.08 6.08 0 00-4.52-1.78 119.08 119.08 0 00-15 .3c-4.16.84-6.18 3.79-6.18 9V131a9.14 9.14 0 002.28 7 12.06 12.06 0 009.26 2c4.47-.17 5.74.06 8.22.06a9.26 9.26 0 006.83-2 9.12 9.12 0 002.3-7V89.88A12.48 12.48 0 0192.93 76 12.44 12.44 0 01106 89.88V131a9.1 9.1 0 002.29 7 12 12 0 009.24 2c1.83-.07 4-.07 5.8 0a12.09 12.09 0 009.26-2 9.14 9.14 0 002.28-7V78.32a33.07 33.07 0 00-35.13-34.69z"></path>
                        </svg>
                      </a>
                      <a
                        className="transition duration-300 p-1 -m-1 text-gray-400 hover:text-red-500 focus:outline-none focus-visible:ring-2 ring-primary"
                        href="https://www.instagram.com/abdelrahman_eid_94/"
                        rel="noopener"
                        aria-label="Ariel Cerda on Instagram"
                        target="_blank"
                      >
                        <svg
                          className="w-6 h-6 overflow-visible fill-current"
                          alt=""
                          aria-hidden="true"
                          viewBox="0 0 140 140"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M73.1735 2C89.9405 2 92.3831 2.0897 99.4487 2.414C106.79 2.7521 111.807 3.9182 116.195 5.6225C120.801 7.35353 124.973 10.0686 128.422 13.5782C131.931 17.0266 134.646 21.1993 136.378 25.805C138.082 30.1934 139.248 35.2097 139.586 42.5513C139.917 49.9136 140 52.2596 140 71V71.552C140 89.7887 139.917 92.1623 139.586 99.4487C139.248 106.79 138.082 111.807 136.378 116.195C134.646 120.801 131.931 124.973 128.422 128.422C124.973 131.931 120.801 134.646 116.195 136.378C111.807 138.082 106.79 139.248 99.4487 139.586C92.0864 139.917 89.7404 140 71 140H70.448C52.2113 140 49.8377 139.917 42.5513 139.586C35.2097 139.248 30.1934 138.082 25.805 136.378C21.1993 134.646 17.0266 131.931 13.5782 128.422C10.0686 124.973 7.35353 120.801 5.6225 116.195C3.9182 111.807 2.7521 106.79 2.414 99.4487C2.0897 92.3831 2 89.9336 2 73.1735V68.8265C2 52.0595 2.0897 49.6169 2.414 42.5513C2.7521 35.2097 3.9182 30.1934 5.6225 25.805C7.35353 21.1993 10.0686 17.0266 13.5782 13.5782C17.0266 10.0686 21.1993 7.35353 25.805 5.6225C30.1934 3.9182 35.2097 2.7521 42.5513 2.414C49.6169 2.0897 52.0664 2 68.8265 2H73.1735V2ZM72.6146 14.4338H69.3854C52.439 14.4338 50.1758 14.5097 43.1171 14.834C36.3896 15.1445 32.7395 16.2623 30.3038 17.2076C27.0815 18.4634 24.7838 19.9538 22.3688 22.3688C19.9538 24.7838 18.4634 27.0815 17.2076 30.3038C16.2623 32.7395 15.1376 36.3896 14.834 43.1171C14.5097 50.1758 14.4338 52.439 14.4338 69.3854V72.6146C14.4338 89.561 14.5097 91.8242 14.834 98.8829C15.1445 105.61 16.2623 109.261 17.2076 111.696C18.4634 114.912 19.9607 117.216 22.3688 119.631C24.7838 122.046 27.0815 123.537 30.3038 124.792C32.7395 125.738 36.3896 126.862 43.1171 127.166C50.3897 127.497 52.5701 127.566 71 127.566H71.552C89.4713 127.566 91.6793 127.497 98.876 127.166C105.61 126.855 109.261 125.738 111.696 124.792C114.912 123.537 117.216 122.046 119.631 119.631C122.046 117.216 123.537 114.919 124.792 111.696C125.738 109.261 126.862 105.61 127.166 98.8829C127.497 91.6034 127.566 89.4299 127.566 71V70.448C127.566 52.5287 127.497 50.3207 127.166 43.124C126.855 36.3896 125.738 32.7395 124.792 30.3038C123.687 27.3062 121.923 24.5947 119.631 22.3688C117.405 20.077 114.694 18.3134 111.696 17.2076C109.261 16.2623 105.61 15.1376 98.8829 14.834C91.8242 14.5097 89.561 14.4338 72.6146 14.4338ZM71 35.5685C75.6529 35.5685 80.2603 36.485 84.559 38.2656C88.8578 40.0462 92.7637 42.656 96.0539 45.9461C99.344 49.2363 101.954 53.1422 103.734 57.441C105.515 61.7397 106.432 66.3471 106.432 71C106.432 75.6529 105.515 80.2603 103.734 84.559C101.954 88.8578 99.344 92.7637 96.0539 96.0539C92.7637 99.344 88.8578 101.954 84.559 103.734C80.2603 105.515 75.6529 106.432 71 106.432C61.603 106.432 52.5908 102.699 45.9461 96.0539C39.3015 89.4092 35.5685 80.397 35.5685 71C35.5685 61.603 39.3015 52.5908 45.9461 45.9461C52.5908 39.3015 61.603 35.5685 71 35.5685V35.5685ZM71 48.0023C64.9006 48.0023 59.0511 50.4253 54.7382 54.7382C50.4253 59.0511 48.0023 64.9006 48.0023 71C48.0023 77.0994 50.4253 82.9489 54.7382 87.2618C59.0511 91.5747 64.9006 93.9977 71 93.9977C77.0994 93.9977 82.9489 91.5747 87.2618 87.2618C91.5747 82.9489 93.9977 77.0994 93.9977 71C93.9977 64.9006 91.5747 59.0511 87.2618 54.7382C82.9489 50.4253 77.0994 48.0023 71 48.0023V48.0023ZM107.832 25.8878C110.028 25.8878 112.134 26.7602 113.687 28.313C115.24 29.8658 116.112 31.9718 116.112 34.1678C116.112 36.3638 115.24 38.4698 113.687 40.0226C112.134 41.5754 110.028 42.4478 107.832 42.4478C105.636 42.4478 103.53 41.5754 101.977 40.0226C100.425 38.4698 99.5522 36.3638 99.5522 34.1678C99.5522 31.9718 100.425 29.8658 101.977 28.313C103.53 26.7602 105.636 25.8878 107.832 25.8878Z"
                          ></path>
                        </svg>
                      </a>

                      <a
                        className="transition duration-300   p-1 -m-1 text-gray-400 hover:text-blue-500 focus:outline-none focus-visible:ring-2 ring-primary"
                        href="https://www.facebook.com/abdelrahmn.eid/https://www.facebook.com/abdelrahmn.eid/"
                        rel="noopener"
                        aria-label="Your Facebook Page"
                        target="_blank"
                      >
                        <svg
                          className="w-6 h-6 fill-current"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="max-md:text-xl max-md:py-2 max-lg:text-lg max-xl:text-4xl max-lg:py-2    max-sm:text-base m-4 text-blueGray-400">
                  <i className="fas fa-university mr-2 text-lg text-slate-300"></i>
                  Computer Science
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Title>
    </Container>
  );
};

export default HomePage;
