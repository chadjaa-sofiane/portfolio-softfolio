import { useRef, useEffect } from "react";
import styles from "@scss/index.module.scss";

function Shape({ width, height, left }) {
  const shape = useRef(null);
  useEffect(() => {
    shape.current.style.width = `${width}em`;
    shape.current.style.height = `${height}em`;
    shape.current.style.left = `${left}em`;
    shape.current.style.animationDuration = `${width * 700}ms`;
    shape.current.style.animationDelay = `${width * 500}ms`;
  }, [width, height, left]);
  return <span ref={shape} className={styles.background__shape}></span>;
}

export default Shape;
