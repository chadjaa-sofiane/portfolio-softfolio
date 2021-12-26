import Image from "next/image";
import styles from "@scss/index.module.scss";
import useObserver from "@lib/hooks/useObserver";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithupIcon from "@material-ui/icons/GitHub";
import TelegramIcon from "@material-ui/icons/Telegram";
import info from "public/json/team.json";

const AboutMe = () => {
  const [aboutMeDivRef, aboutMeDivAppear] = useObserver<HTMLDivElement>({
    isIntersecting: true,
    options: { threshold: 0.25 },
    disconnect: true,
  });
  const downloadCv = () => {
    const a: HTMLAnchorElement = document.createElement("a");
    a.href = "/CV_Chadjaa_Sofiane.pdf";
    a.download = "chadjaa_sofiane_cv";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };
  return (
    <div
      ref={aboutMeDivRef}
      className={`${styles["aboutMe__wrapper"]} ${
        aboutMeDivAppear ? styles["homeComponentsApears"] : ""
      }`}
    >
      <h1> About Me </h1>
      <div className={styles["aboutMe__container"]}>
        <div className={styles["aboutMe__imageField"]}>
          <div className={styles["aboutMe__imageField__image"]}>
            <Image src="/images/me.jpg" layout="fill" alt="my face" />
          </div>
        </div>
        <div className={styles["aboutMe__desc"]}>
          <p className={styles["aboutMe__desc__text"]}>
            my name is <span>chadjaa sofiane</span>, a full stack developer
          </p>
          <div className={styles["aboutMe__btnfield"]}>
            <button
              className={`${styles["button"]} ${styles["button--secondary"]}`}
              onClick={downloadCv}
            >
              Download My CV
            </button>
          </div>
          <div className={styles["aboutMe__socialsMedia"]}>
            <LinkedIn link={info[0].socialMedia.linkedIn} />
            <Githup link={info[0].socialMedia.githup} />
            <Telegram link={info[0].socialMedia.telegram} />
          </div>
        </div>
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

export default AboutMe;
