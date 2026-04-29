import { useEffect, useState } from "react";
import { motion, stagger, useAnimate } from "motion/react";
import Floating, { FloatingElement } from "./fancy/image/parallax-floating";
import { exampleImages } from "../utils/demo-images";

const imgStyle = {
  objectFit: "cover",
  cursor: "pointer",
  transition: "transform 0.2s",
};

const Preview = () => {
  const [scope, animate] = useAnimate();
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const check = () => {
      setIsMobile(window.innerWidth <= 600);
      setIsTablet(window.innerWidth > 600 && window.innerWidth <= 1024);
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    animate("img", { opacity: [0, 1] }, { duration: 0.5, delay: stagger(0.15) });
  }, []);

  // Scale down image sizes for tablet and mobile
  const scale = isMobile ? 0.5 : isTablet ? 0.7 : 1;
  const s = (val) => Math.round(val * scale);

  return (
    <div
      ref={scope}
      style={{
        display: "flex",
        width: "100dvw",
        height: isMobile ? "45dvh" : isTablet ? "52dvh" : "58dvh",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "transparent",
        overflow: "visible",
        position: "absolute",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.88, delay: 1.5 }}
        style={{
          zIndex: 50,
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
        }}
      />

      <Floating sensitivity={isMobile ? -0.3 : isTablet ? -0.6 : -1}>

        <FloatingElement depth={0.5} style={{ top: "8%", left: "11%" }}>
          <motion.img
            initial={{ opacity: 0 }}
            src={exampleImages[0].url}
            style={{ ...imgStyle, width: s(96), height: s(96) }}
          />
        </FloatingElement>

        <FloatingElement depth={1} style={{ top: "10%", left: "32%" }}>
          <motion.img
            initial={{ opacity: 0 }}
            src={exampleImages[1].url}
            style={{ ...imgStyle, width: s(112), height: s(112) }}
          />
        </FloatingElement>

        <FloatingElement depth={2} style={{ top: "2%", left: "53%" }}>
          <motion.img
            initial={{ opacity: 0 }}
            src={exampleImages[2].url}
            style={{ ...imgStyle, width: s(160), height: s(208) }}
          />
        </FloatingElement>

        <FloatingElement depth={1} style={{ top: "0%", left: isMobile ? "78%" : "83%" }}>
          <motion.img
            initial={{ opacity: 0 }}
            src={exampleImages[3].url}
            style={{ ...imgStyle, width: s(128), height: s(128) }}
          />
        </FloatingElement>

        <FloatingElement depth={1} style={{ top: "40%", left: isMobile ? "0%" : "2%" }}>
          <motion.img
            initial={{ opacity: 0 }}
            src={exampleImages[4].url}
            style={{ ...imgStyle, width: s(144), height: s(144) }}
          />
        </FloatingElement>

        <FloatingElement depth={2} style={{ top: "70%", left: isMobile ? "72%" : "77%" }}>
          <motion.img
            initial={{ opacity: 0 }}
            src={exampleImages[7].url}
            style={{ ...imgStyle, width: s(144), height: s(192) }}
          />
        </FloatingElement>

        <FloatingElement depth={4} style={{ top: "73%", left: isMobile ? "5%" : "15%" }}>
          <motion.img
            initial={{ opacity: 0 }}
            src={exampleImages[5].url}
            style={{ ...imgStyle, width: s(208), height: "auto" }}
          />
        </FloatingElement>

        <FloatingElement depth={1} style={{ top: "80%", left: "50%" }}>
          <motion.img
            initial={{ opacity: 0 }}
            src={exampleImages[6].url}
            style={{ ...imgStyle, width: s(128), height: s(128) }}
          />
        </FloatingElement>

      </Floating>
    </div>
  );
};

export default Preview;