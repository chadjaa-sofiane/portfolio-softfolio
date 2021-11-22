import ExpoCard from "@containers/exposition/ExpoCard";
import ExpositionLayout from "@containers/exposition/ExpositionLayout";
import cssExpositionInfo from "@public/css_exposition/css_exposition_info.json";
import styles from "@scss/index.module.scss";

const CssPage = () => {
  return (
    <ExpositionLayout title="welcome in softfolio css exposition">
      <div className={styles["cssExposition__cards__container"]}>
        {cssExpositionInfo.map((e, i) => (
          <ExpoCard
            key={i}
            imageSrc="/images/exposition/css.png"
            title={e.titile}
            desc="here when I show my skills at pure css "
            link={`/exposition/css/${e.name}`}
          />
        ))}
      </div>
    </ExpositionLayout>
  );
};

CssPage.pageLayout = (page) => {
  return <div>{page}</div>;
};

export default CssPage;
