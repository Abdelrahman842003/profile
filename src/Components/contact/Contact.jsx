import React from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import ScrollToTopFab from "../scroll/Scroll";
import { useForm, ValidationError } from "@formspree/react";
import Joined from "./joined/Joined";
import Reject from "./reject/reject";

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

export default function Contact() {
  const [state, handleSubmit] = useForm("xvojjpke");
  if (state.succeeded) return <Joined />;
  if (state.errors) return <Reject />;

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
          className="flex items-center justify-center p-4"
        >
          <h1 className="flex ld:text-lg  max-lg:flex-col sm:flex-col sm:items-center  flex-col-reverse align-items-center title-font  mb-4 text-4xl font-extrabold leading-10 tracking-tight sm:text-2xl sm:leading-none md:text-5xl">
            Contact Me
            <div className="flex flex-col items-center 2xl:flex-row gap-1 sm:flex-col ">
              <div className="   p-3 text-center">
                <Link
                  to={"/"}
                  className="bg-transparent  hover:bg-slate-800 hover:border-slate-500 text-slate-400 font-semibold hover:text-white p-2 m-2 px-4 border border-gray-700 hover:border-transparent rounded text-base transition duration-300 "
                >
                  Home 🏠
                </Link>
              </div>
              <div className="    p-3 text-center">
                <Link
                  to={"/skills"}
                  className="bg-transparent  hover:bg-slate-800 hover:border-slate-500 text-slate-400 font-semibold hover:text-white p-2 m-2 px-4 border border-gray-700 hover:border-transparent rounded text-base transition duration-300 "
                >
                  Skills 🛠️
                </Link>
              </div>
              <div className="    p-3 text-center">
                <Link
                  to={"/contact"}
                  className="bg-transparent  hover:bg-slate-800 hover:border-slate-500 text-slate-400 font-semibold hover:text-white p-2 m-2 px-4 border border-gray-700 hover:border-transparent rounded text-base transition duration-300 "
                >
                  contact ☎️
                </Link>
              </div>
            </div>
          </h1>
          <div className="mx-auto w-full max-w-[380px]">
            <form
              onSubmit={handleSubmit}
              action="https://formbold.com/s/FORM_ID"
              method="POST"
            >
              <div className="mb-5">
                <label
                  htmlFor="name"
                  className=" mb-3 block text-base font-medium text-white"
                >
                  Full Name
                </label>
                <input
                  autoFocus
                  required
                  autoComplete="off"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Full Name"
                  className="transition duration-300  w-full rounded-md border border-white bg-slate-800 py-3 px-6 text-base font-medium text-white outline-none focus:border-neutral-800 focus:shadow-slate-500"
                />
                <ValidationError
                  prefix="Message"
                  field="name"
                  errors={state.errors}
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="mb-3 block text-base font-medium text-white"
                >
                  Email Address
                </label>
                <input
                  required
                  autoComplete="off"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="example@domain.com"
                  className="transition duration-300 w-full rounded-md border border-white bg-slate-800 py-3 px-6 text-base font-medium text-white outline-none focus:border-neutral-800 focus:shadow-slate-500"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="subject"
                  className="mb-3 block text-base font-medium text-white"
                >
                  Subject
                </label>
                <input
                  required
                  autoComplete="off"
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Enter your subject"
                  className="transition duration-300 w-full rounded-md border border-white bg-slate-800 py-3 px-6 text-base font-medium text-white outline-none focus:border-neutral-800 focus:shadow-slate-500"
                />
                <ValidationError
                  prefix="Message"
                  field="subject"
                  errors={state.errors}
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="message"
                  className="mb-3 block text-base font-medium text-white"
                >
                  Message
                </label>
                <textarea
                  required
                  autoComplete="off"
                  rows={4}
                  name="message"
                  id="message"
                  placeholder="Type your message"
                  className="transition duration-300 w-full resize-none rounded-md border border-white bg-slate-800 py-3 px-6 text-base font-medium text-white outline-none focus:border-neutral-800 focus:shadow-slate-500"
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>
              <div>
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="hover:shadow-form rounded-md bg-[#6366f1] py-3 px-8 text-base font-semibold text-white outline-none transition duration-300 ease-in-out"
                >
                  {state.submitting ? "Submitting ...." : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </Title>

      <ScrollToTopFab />
    </Container>
  );
}
