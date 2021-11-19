import { Card } from "@components/Card";
import Image from "next/image";
import teamInfo from "public/json/team.json";
import styles from "@scss/index.module.scss";
import useObserver from "@lib/hooks/useObserver";

const MyTeam = () => {
  const [teamCompoenentRef, teamComponentApear] = useObserver<HTMLDivElement>({
    isIntersecting: true,
    options: { threshold: 0.25 },
    disconnect: true,
  });
  return (
    <div
      ref={teamCompoenentRef}
      className={`${styles["team__wrapper"]} ${
        teamComponentApear ? styles.homeComponentsApears : ""
      }`}
    >
      <h1 className={styles["title"]}> MY TEAM </h1>
      <div className={styles["team__container"]}>
        {teamInfo?.map((f, index) => (
          <Card key={index} className={styles["team__card"]}>
            {/* <h3 className={styles.myTeam__card__name}> {f.name}</h3> */}
            <div className={styles["team__card__pecture"]}>
              <Image src={f.image} width="400" height="400" />
            </div>
            <h3 className={styles["team__card__name"]}>{f.name}</h3>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MyTeam;
