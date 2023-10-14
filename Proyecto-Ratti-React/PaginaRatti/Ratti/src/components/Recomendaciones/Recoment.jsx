import React from "react";
import { CardContainer, CardStyles, Splash } from "./RecomentStyles";
import { RecomentData } from "../../data/RecomentData";

const Card = ({ image, hueA, hueB }) => {
  const cardVariants = {
    offscreen: {
      y: 200,
    },
    onscreen: {
      y: 10,
      rotate: -10,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  const hue = (h) => `hsl(${h}, 80%, 20%)`;
  const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;

  return (
    <CardContainer
      initial="offscreen"
      whileInView="onscreen"
      variants={cardVariants}
      viewport={{ once: true, amount: 0.8 }}
    >
      <Splash style={{ background }}>
        <a
          href="https://g.co/kgs/99WdvC"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click aca para ir a Google
        </a>{" "}
      </Splash>
      <CardStyles
        variants={cardVariants}
        whileHover={{ scale: 1.1, rotate: 10 }}
      >
        <img src={image} alt="food" />
      </CardStyles>
    </CardContainer>
  );
};

const Recoment = () => {
  return RecomentData.map(({ image, hueA, hueB }) => (
    <Card image={image} hueA={hueA} hueB={hueB} key={image} />
  ));
};

export default Recoment;
