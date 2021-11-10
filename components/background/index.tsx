import { useEffect, useState } from "react";
import styles from "@scss/index.module.scss";
import Shape from "./Shape";
import { generateNumbers, randomIntFromInterval } from "@lib/functions/numbers";

export type Dimentions = {
  index: number;
  width: number;
  height: number;
  left: number;
};

const addNewShapeDimention = (existStyles, element): Dimentions => {
  const newEl: Dimentions = {
    index: 0,
    width: 0,
    height: 0,
    left: 0,
  };
  let left = randomIntFromInterval(element * 2, element * 7);
  let dimentionsSize = randomIntFromInterval(1, 7);
  while (existStyles.find((e) => e.left === left)) {
    left = left + 4;
  }
  while (existStyles.find((e) => e.width === dimentionsSize)) {
    dimentionsSize = randomIntFromInterval(1, 10);
  }
  newEl.index = element;
  newEl.width = dimentionsSize + 2;
  newEl.height = dimentionsSize + 2;
  newEl.left = left;
  return newEl;
};

const generateInitialShapes = (numberOfShapes) => {
  const shapesDementions: Dimentions[] = [];
  generateNumbers(numberOfShapes).forEach((e) => {
    shapesDementions.push(addNewShapeDimention(shapesDementions, e));
  });
  return shapesDementions;
};

function Background() {
  const [shapes, setShapes] = useState([]);

  useEffect(() => {
    setShapes(generateInitialShapes(Math.floor(window.innerWidth / (16 * 5))));
  }, []);

  const changeShapeDimention = (index: number) => {
    // const newShapes = shapes.filter((s) => s.index !== index);
    // const shape = addNewShapeDimention(shapes, index);
    // newShapes.push(shape);
  };

  return (
    <div className={styles.background}>
      <div className={styles.background__container}>
        {shapes?.map((e) => (
          <Shape
            key={e.index}
            dimentions={e}
            changeShapeDimention={changeShapeDimention}
          />
        ))}
      </div>
    </div>
  );
}

export default Background;
