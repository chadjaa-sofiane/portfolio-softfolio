import useObserver from "@lib/hooks/useObserver";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import styles from "@scss/index.module.scss";

const BackToTop = () => {
  const [observerRef, isDisapear] = useObserver<HTMLDivElement>();
  const backTotop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <div className={styles["backToTop__observerDiv"]} ref={observerRef} />
      {isDisapear && (
        <div className={styles["backToTop__iconField"]} onClick={backTotop}>
          <KeyboardArrowUpIcon fontSize="large" />
        </div>
      )}
    </>
  );
};

export default BackToTop;
