import Link from "next/link";
import { RiSearch2Line } from "react-icons/ri";
import { FaOpencart } from "react-icons/fa";
import styles from "./style.module.scss";

export const Main = () => {
  return (
    <div className={styles.main}>
      <div className={styles.main__container}>
        <Link href="/" className={styles.logo}>
          <img src="/images/logo.png" alt="" />
        </Link>
        <div className={styles.search}>
          <input type="text" placeholder="Search..." />
          <div className={styles.search__icon}>
            <RiSearch2Line />
          </div>
        </div>
        <Link href="/cart" className={styles.cart}>
          <FaOpencart />
          <span>0</span>
        </Link>
      </div>
    </div>
  );
};