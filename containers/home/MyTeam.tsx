import { useMemo } from "react";
import { Card, CardContent } from "@components/Card";
import Image from "next/image";
import styles from "@scss/index.module.scss";

function MyTeam() {
  const MyTeam = useMemo(() => MY_TEAM, []);
  return (
    <div className={styles.myTeam__wrapper}>
      <h1 className={styles.title}> MY TEAM </h1>
      <div className={styles.myTeam__container}>
        {MyTeam?.map((f, index) => (
          <Card key={index} className={styles.myTeam__card}>
            <CardContent>
              {/* <h3 className={styles.myTeam__card__name}> {f.name}</h3> */}
              <div className={styles.myTeam__card__pecture}>
                <Image src={f.image} width="400" height="400" />j
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

const MY_TEAM = [
  {
    name: "ouss",
    image: "/images/team/ouss.jpg",
  },
  {
    name: "chadjaa sofiane",
    image: "/images/zepli.jpg",
  },
];

export default MyTeam;
