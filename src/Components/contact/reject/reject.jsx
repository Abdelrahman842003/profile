import React from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

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

export default function Reject() {
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
          className="flex h-screen items-center justify-center "
        >
          <div className="rounded-lg bg-red-300 px-10 py-5 w-5/6">
            <div className="flex justify-center">
              <div className="rounded-full bg-red-700 p-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-600 p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="h-8 w-8 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <h3 className="max-sm:text-base my-4 text-center text-3xl font-semibold text-gray-700">
              Rejected!!!
            </h3>
            <p className="w-full text-center text-base font-bold text-gray-600">
            There is a problem connecting to the Internet, please try again ....{" "}
            </p>
            <Link to={"./"}>
              <button className="mx-auto mt-10 block rounded-xl border-4 border-transparent bg-slate-800 px-6 py-3 text-center text-base font-medium text-orange-100 outline-1 hover:outline hover:duration-500">
                To Contract{" "}
              </button>
            </Link>
            
          </div>
        </motion.div>
      </Title>
    </Container>
  );
}
