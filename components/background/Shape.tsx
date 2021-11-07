import { useRef, useEffect } from "react";
import styles from "@scss/index.module.scss";
import useObserver from "@lib/hooks/useObserver";
import { Dimentions } from ".";

interface IProps {
  dimentions: Dimentions;
  changeShapeDimention: (index: number) => void;
}

const Shape: React.FC<IProps> = ({ dimentions, changeShapeDimention }) => {
  const [shape] = useObserver<HTMLSpanElement>(
    { isIntersecting: false, options: { rootMargin: "-150px 0px 0px 0px" } },
    () => changeShapeDimention(dimentions.index)
  );
  useEffect(() => {
    shape.current.style.width = `${dimentions.width}em`;
    shape.current.style.height = `${dimentions.height}em`;
    shape.current.style.left = `${dimentions.left}em`;
    shape.current.style.animationDuration = `${dimentions.width * 700}ms`;
    shape.current.style.animationDelay = `${dimentions.width * 500}ms`;
  }, []);
  return <span ref={shape} className={styles.background__shape}></span>;
};

export default Shape;
