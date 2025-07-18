import { useRef } from "react";

const Hero = () => {
  const contextRef = useRef(null);
  return (
    <section id="home" className="flex flex-col justify-end min-h-screen">
      <div ref={contextRef}>
        <div
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
          className=""
        ></div>
      </div>
    </section>
  );
};

export default Hero;
