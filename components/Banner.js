import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../pages/variants";
const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
      id="about"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row">
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              className="text-[55px] font-bold leading-[0.8] lg:text-[110px]"
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
            >
              Asaju <span>Bamidele</span>
            </motion.h1>

            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.4 }}
              className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]"
            >
              <TypeAnimation
                sequence={[
                  "I Am A Fullstack",
                  1500,
                  "Web",
                  1500,
                  "Developer",
                  1500,
                ]}
                className="text-accent"
                speed={50}
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.4 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0"
            >
              I have over two years experience in web development, design and
              implementation of internet based applications. I sm able to learn
              and work well with new technologies. I look forward to working
              with a great team of individuals who are using software technology
              to solve real world problems.
            </motion.p>
          </div>
          <motion.div
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.4 }}
          >
            <img
              src="https://media.licdn.com/dms/image/C5603AQGWfDFTNLO6gg/profile-displayphoto-shrink_200_200/0/1647713803450?e=1683158400&v=beta&t=e9jvwurOgS-eToe8ojxhSDN8pu9NdBCTH4c0RchCVrY"
              alt="profilepix"
              className="rounded-xl ml-24 lg:ml-0 lg:mx-w-[482]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
