import { Card, CardBack } from "@components/Card";
import Image from "next/legacy/image";
import teamInfo from "public/json/team.json";
import styles from "@scss/index.module.scss";
import useObserver from "@lib/hooks/useObserver";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithupIcon from "@material-ui/icons/GitHub";
import TelegramIcon from "@material-ui/icons/Telegram";

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
          <Card key={index}>
            <div className={styles["team__card"]}>
              <div className={styles["team__card__pecture"]}>
                <Image src={f.image} width="400" height="400" alt={f.name} />
              </div>
              <h3 className={styles["team__card__name"]}>{f.name}</h3>
            </div>
            <CardBack>
              <div className={styles["team__card__socialMedia__container"]}>
                {f.socialMedia.linkedIn && (
                  <LinkedIn link={f.socialMedia.linkedIn} />
                )}
                {f.socialMedia.githup && <Githup link={f.socialMedia.githup} />}
                {f.socialMedia.telegram && (
                  <Telegram link={f.socialMedia.telegram} />
                )}
              </div>
            </CardBack>
          </Card>
        ))}
      </div>
    </div>
  );
};

const SocialMediaLayout: React.FC<{ link?: string }> = (props) => {
  return (
    <div className={styles["team__card__socialMedia__field"]}>
      <a href={props.link} target="_blank" rel="noreferrer">
        {props.children}
      </a>
    </div>
  );
};

const LinkedIn: React.FC<{ link?: string }> = (props) => {
  return (
    <SocialMediaLayout link={props.link || ""}>
      <LinkedInIcon fontSize="large" />
    </SocialMediaLayout>
  );
};

const Githup: React.FC<{ link?: string }> = (props) => {
  return (
    <SocialMediaLayout link={props.link || ""}>
      <GithupIcon fontSize="large" />
    </SocialMediaLayout>
  );
};

const Telegram: React.FC<{ link?: string }> = (props) => {
  return (
    <SocialMediaLayout link={props.link || ""}>
      <TelegramIcon fontSize="large" />
    </SocialMediaLayout>
  );
};

export default MyTeam;
