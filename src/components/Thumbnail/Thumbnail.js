import { React, useState } from "react";
import "./Thumbnail.css";

import { useSpring, animated } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";

export default function Thumbnail(props) {
  const [{ x, y }, api] = useSpring(() => ({ x: 0, y: 0 }));

  // Set the drag hook and define component movement based on gesture data
  const bind = useDrag(({ down, movement: [mx, my] }) => {
    api.start({ x: down ? mx : 0, y: down ? my : 0, immediate: down });
  });

  const [flipped, set] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 700, friction: 80 },
  });

  // Bind it to a component
  return (
    <animated.div
      {...bind()}
      style={{ x, y, width: "35vh", height: "40vh" }}
      className="thumbnail mb-4 ml-1 mr-1 my-2"
      onMouseEnter={() => set((state) => !state)}
      onMouseLeave={() => set((state) => !state)}
    >
      <animated.div style={{ opacity: opacity.to((o) => 1 - o), transform }}>
        <img
          className="thumbnail-image"
          src={props.image}
          l
          alt={props.title}
          style={{
            objectFit: "cover",
            width: "100%",
            height: "30vh",
            borderBottom: "1px solid grey",
          }}
          href={props.link}
        />
        <div className="thumbnail-text">
          <p className="thumbnail-title">{props.title}</p>
          <p className="thumbnail-category">{props.category}</p>
        </div>
      </animated.div>
      <animated.div
        style={{ opacity, transform, rotateX: "180deg" }}
        className="thumbnail-description"
      >
        {props.description.map((content) => {
          return <p>{content}</p>;
        })}
        <p>
          See more <a href={props.link} target="_blank" rel="noreferrer">HERE</a>
        </p>
      </animated.div>
    </animated.div>
  );
}
