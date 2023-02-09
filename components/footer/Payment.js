import styles from "./style.module.scss";

export const Payment = () => {
  return (
    <div className={styles.footer__payment}>
      <h1>WE ACCEPT</h1>
      <div className={styles.footer__flexwrap}>
        <img src="/images/visa.png" alt="" />
        <img src="/images/MasterCard.png" alt="" />
        <img src="/images/pp.png" alt="" />
      </div>
    </div>
  );
};
