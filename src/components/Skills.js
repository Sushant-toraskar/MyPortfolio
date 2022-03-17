// import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skill } from "./data";
import '../components/skills.css'

export default function Skills() {
  return (
    <section id="skills">
      <div className="Container">
        <div className="title-container">
        <i class="uil uil-processor"></i>
          <h1 className="Main-title">
            Skills &amp; Technologies
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi sit
            ipsa delectus eum quo voluptas aspernatur accusantium distinctio
            possimus est.
          </p>
        </div>
        <div className="container content-container">
          {skill.map((skill,key) => (
            <div key={key} className="">
              <div className="skills-names">
                {/* <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" /> */}
                <i class="uil uil-circle"></i>
                <span className="skills">
                  {skill}
                    {/* hiiii */}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}