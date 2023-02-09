import Link from "next/link";
import styles from "./style.module.scss";

export const Ad = () => {
  return (
    <Link href={"/browse"}>
      <div className={styles.ad}>
        ad
        {/* <img
        src="/images/ad.jpg"
        alt=""
        width={"100%"}
        height={70}
        
      /> */}
      </div>
    </Link>
  );
};
