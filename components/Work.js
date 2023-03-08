import Image from "next/image";
import React from "react";
import foto1 from "../assets/portfolio-img1.png";
import foto2 from "../assets/portfolio-img2.png";
import foto2 from "../assets/portfolio-img2.png";

const Work = () => {
  const aisearch = () => {
    window.open("https://open-ai-replica.vercel.app/");
  };

  const blkchnLink = () => {
    window.open("https://www.linkedin.com/in/bamidele-simeon-406a10181/");
  };

  const socialApp = () => {
    window.open("https://www.linkedin.com/in/bamidele-simeon-406a10181/");
  };
  return (
    <section className="section lg:mb-24" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <div className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0">
            {/* text */}
            <div>
              <h2 className="h2 leading-tight text-accent">
                My Latest <br />
                Projects
              </h2>
              <p className="max-w-sm mb-16">Here are some completed projects</p>

              <button className="btn btn-sm">See my stuff</button>
            </div>
            {/* image */}
            <div className="overflow-hidden border-2 border-white/50 rounded-xl">
              {/* img */}
              <Image
                height={200}
                width={200}
                className="w-full"
                src={foto1}
                alt="project1"
              />

              <div className="p-2 flex items-center justify-between">
                <span className="text-3xl text-white">Project One</span>
                <button onClick={socialApp} className="btn btn-sm">
                  View Project
                </button>
              </div>
            </div>
          </div>

          <div className="flex-1 flex flex-col gap-y-5">
            <div className="overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay */}

              {/* img */}
              <Image
                height={200}
                width={200}
                className="w-full"
                src={foto2}
                alt="project1"
              />

              <div className="p-2 flex items-center justify-between">
                <span className="text-3xl text-white">Project One</span>
                <button onClick={blkchnLink} className="btn btn-sm">
                  View Project
                </button>
              </div>
            </div>

            <div className="overflow-hidden border-2 border-white/50 rounded-xl">
              <Image
                height={200}
                width={200}
                className="w-full"
                src={foto2}
                alt="project1"
              />

              <div className="p-2 flex items-center justify-between">
                <span className="text-3xl text-white">Project One</span>
                <button onClick={aisearch} className="btn btn-sm">
                  View Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
