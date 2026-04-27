import { useEffect } from "react";
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

  useEffect(() => {
    animate("img", { opacity: [0, 1] }, { duration: 0.5, delay: stagger(0.15) });
  }, []);

  return (
    <div
      ref={scope}
      style={{
        display: "flex",
        width: "100dvw",
        height: "58dvh",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "transparent",
        overflow: "visible",
        position: "absolute",
        top: "21%"
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
      >
        
      </motion.div>

      <Floating sensitivity={-1}>
        <FloatingElement depth={0.5} style={{ top: "8%", left: "11%" }}>
          <motion.img
            initial={{ opacity: 0 }}
            src={exampleImages[0].url}
            style={{ ...imgStyle, width: 96, height: 96 }}
          />
        </FloatingElement>

        <FloatingElement depth={1} style={{ top: "10%", left: "32%" }}>
          <motion.img
            initial={{ opacity: 0 }}
            src={exampleImages[1].url}
            style={{ ...imgStyle, width: 112, height: 112 }}
          />
        </FloatingElement>

        <FloatingElement depth={2} style={{ top: "2%", left: "53%" }}>
          <motion.img
            initial={{ opacity: 0 }}
            src={exampleImages[2].url}
            style={{ ...imgStyle, width: 160, height: 208 }}
          />
        </FloatingElement>

        <FloatingElement depth={1} style={{ top: "0%", left: "83%" }}>
          <motion.img
            initial={{ opacity: 0 }}
            src={exampleImages[3].url}
            style={{ ...imgStyle, width: 128, height: 128 }}
          />
        </FloatingElement>

        <FloatingElement depth={1} style={{ top: "40%", left: "2%" }}>
          <motion.img
            initial={{ opacity: 0 }}
            src={exampleImages[4].url}
            style={{ ...imgStyle, width: 144, height: 144 }}
          />
        </FloatingElement>

        <FloatingElement depth={2} style={{ top: "70%", left: "77%" }}>
          <motion.img
            initial={{ opacity: 0 }}
            src={exampleImages[7].url}
            style={{ ...imgStyle, width: 144, height: 192 }}
          />
        </FloatingElement>

        <FloatingElement depth={4} style={{ top: "73%", left: "15%" }}>
          <motion.img
            initial={{ opacity: 0 }}
            src={exampleImages[5].url}
            style={{ ...imgStyle, width: 208, height: "auto" }}
          />
        </FloatingElement>

        <FloatingElement depth={1} style={{ top: "80%", left: "50%" }}>
          <motion.img
            initial={{ opacity: 0 }}
            src={exampleImages[6].url}
            style={{ ...imgStyle, width: 128, height: 128 }}
          />
        </FloatingElement>
      </Floating>
    </div>
  );
};

export default Preview;