import React, { useEffect, useState } from "react";
import "./Thumbnail.css";
import { useSpring, animated } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";

export interface ThumbnailProps {
  image: any;
  title: string;
  category: string;
  link: string;
  description: string[];
}

export default function Thumbnail(props: ThumbnailProps) {
  const [width, setWidth] = useState(window.innerWidth);
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
  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;

  // Bind it to a component
  return (
    <animated.div
      {...bind()}
      style={{ x, y, width: "35vh", height: "50vh" }}
      className="thumbnail mb-4 ml-1 mr-1 my-2"
      onMouseEnter={() => {if(!isMobile) set((state) => !state)}}
      onMouseLeave={() => {if(!isMobile) set((state) => !state)}}
      onClick={() => {isMobile && set((state) => !state)}}
    >
      <animated.div style={{ opacity: opacity.to((o) => 1 - o), transform }}>
        <img
          className="thumbnail-image"
          src={props.image}
          alt={props.title}
          style={{
            objectFit: "cover",
            width: "100%",
            height: "30vh",
            borderBottom: "1px solid grey",
          }}
          
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
