import ShowComponent from "hoc/ShowCompoenet";
import withLoader from "hoc/withLoading";
import { useState, useEffect } from "react";

const wait = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const About = () => {
  const [show] = useState(false);
  const [isAdmin] = useState(true);
  const [mode] = useState("edit");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fechFakeData = async () => {
      await wait(3000);
      setLoading(false);
    };
    fechFakeData();
  }, []);

  return (
    <>
      <ShowComponent conditions={[show, isAdmin, mode === "display"]}>
        <h1> display </h1>
      </ShowComponent>
      <ShowComponent conditions={[mode === "edit"]}>
        <h1> edit </h1>
      </ShowComponent>
      <ItemsList loading={loading} />
      <h1> about page </h1>
    </>
  );
};

const items = ["ddd", "ddd"];
// withLoader( component )
const ItemsList = withLoader(() => {
  return (
    <div>
      {items.map((item, index) => (
        <h1 key={index}> {item} </h1>
      ))}
    </div>
  );
});

//http://localhost:3000/about

export default About;
