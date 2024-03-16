import { useRef, useState } from "react";

import ModelView from "./ModelView";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { yellowImg } from "../utils";

const Model = () => {
  const [size, setSize] = useState("small");
  const [model, setModel] = useState({
    title: "iPhone 15 Pro in Natural Titanium",
    color: ["#8F8A81", "#FFE7B9", "#+F+C+5"],
    img: yellowImg,
  });
  const cameraControlSmall = useRef();
  const cameraControlLarge = useRef();

  useGSAP(() => {
    gsap.to("#heading", {
      y: 0,
      opacity: 1,
    });
  }, []);
  return (
    <section className="common-padding">
      <div className="screen max width">
        <h1 id="heading" className="section-heading">
          Take a closer look
        </h1>
        <div className="flex flex-col items-center mt-5">
          <div className="w-full h-[75vh] md:h-[90vh] overflow-hidden relative">
            4
            <ModelView />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Model;
