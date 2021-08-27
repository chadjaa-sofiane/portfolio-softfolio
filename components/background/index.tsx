import { useMemo, useEffect, useState, useRef } from "react";
import styles from "@scss/index.module.scss";
import Shape from "./Shape";
import { generateNumbers, randomIntFromInterval } from "@lib/functions/numbers";

function Background() {
  const [numberOfShapes, setNumberOfShapes] = useState(10);
  const ref = useRef(null);
  useEffect(() => {
    setNumberOfShapes(Math.floor(window.innerWidth / (16 * 5)));
  }, []);
  const shapes = useMemo(() => {
    const existStyles: any = [];
    generateNumbers(numberOfShapes).forEach((e) => {
      const newEl: any = {};
      let left = randomIntFromInterval(e * 2, e * 7);
      let dimentionsSize = randomIntFromInterval(1, 7);
      while (existStyles.find((e) => e.left === left)) {
        left = left + 4;
      }
      while (existStyles.find((e) => e.width === dimentionsSize)) {
        dimentionsSize = randomIntFromInterval(1, 10);
      }
      newEl.width = dimentionsSize + 2;
      newEl.height = dimentionsSize + 2;
      newEl.left = left;
      existStyles.push(newEl);
    });
    return existStyles;
  }, [numberOfShapes]);
  return (
    <div className={styles.background}>
      <div className={styles.background__container}>
        {shapes?.map((e, i) => (
          <Shape key={i} width={e.width} height={e.height} left={e.left} />
        ))}
      </div>
    </div>
  );
}

export default Background;
