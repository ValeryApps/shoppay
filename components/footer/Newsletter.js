import Link from "next/link";
import styles from "./style.module.scss";

export const Newsletter = () => {
  return (
    <div className={styles.footer__newsletter}>
      <h1>SIGN UP FOR OUR NEWSLETTER</h1>
      <div className={styles.footer__flex}>
        <input type="text" placeholder="YOUR EMAIL ADDRESS" />
        <button className={styles.btn_primary}>SUBSCRIBE</button>
      </div>
      <p>
        By clicking SUBSCRIBE you agree to{" "}
        <Link href="/">our Privacy & Cookies policy</Link>
      </p>
    </div>
  );
};
