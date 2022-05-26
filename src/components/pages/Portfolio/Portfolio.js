import {
  faFacebookF,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import site1 from "../../../asset/images/3-project/Screenshot_5.png";
import site2 from "../../../asset/images/3-project/web-2.png";
import site3 from "../../../asset/images/3-project/web-3.png";

const Portfolio = () => {
  return (
    <div>
      <div className=" flex flex-col items-start bg-slate-200 p-4 my-5 rounded-xl">
        <div>
          <img
            src="https://i.ibb.co/YDFPsvV/profile-img-500x500.jpg"
            alt=""
            className="w-[150px]"
          />
          <h3>MD Zakaria</h3>
          <p>zakaria7262@gmail.com</p>
        </div>

        <div className="my-5">
          <h2 className="">Education</h2>
          <span>
            <p>South Ease university 7th semester (CSE)</p>
          </span>
        </div>

        <div className="my-5">
          <h2 className="">Technology / Skill</h2>
          <ul>
            <li>Html</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>React</li>
            <li>Mongodb</li>
          </ul>
        </div>

        <div className="my-5">
          <h2 className="">Project</h2>
          <div className="flex flex-wrap gap-4 p-4">
            <div className="w-[200px] h-[200px] bg-slate-300">
              <a
                href="https://e-warehouse-4345a.web.app/"
                rel="noreferrer"
                target="_blank">
                <img src={site1} alt="" className="w-full h-full" />
              </a>
            </div>
            <div className="w-[200px] h-[200px] bg-slate-300">
              <a
                href="https://tooth-care-80c49.web.app/"
                rel="noreferrer"
                target="_blank">
                <img src={site2} alt="" className="w-full h-full" />
              </a>
            </div>

            <div className="w-[200px] h-[200px] bg-slate-300">
              <a
                href="https://orbit-tools.web.app/"
                rel="noreferrer"
                target="_blank">
                <img src={site3} alt="" className="w-full h-full" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
