import styles from "./style.module.scss";
import { MdSecurity } from "react-icons/md";
import { BsSuitHeart } from "react-icons/bs";
import { RiAccountPinCircleLine, RiArrowDropDownFill } from "react-icons/ri";
import Link from "next/link";
import { useState } from "react";
import { UserMenu } from "./UserMenu";
import { useSession } from "next-auth/react";

export const Top = ({ country }) => {
  const { data: session } = useSession();
  const [loggedIn, setLoggedIn] = useState(false);
  const [visible, setVisible] = useState(false);
  return (
    <div className={styles.top}>
      <div className={styles.top__container}>
        <div></div>
        <ul className={styles.top__list}>
          <li>
            <img src={country?.flag} alt="" />
            <span>{country?.name} /USD</span>
          </li>
          <li>
            <MdSecurity />
            <span>Buyer Protection</span>
          </li>
          <li>
            <span>Customer Service</span>
          </li>
          <li>
            <span>Help</span>
          </li>
          <li>
            <BsSuitHeart />
            <Link href={"/profile/wishlist"}>
              <span>Wishlist</span>
            </Link>
          </li>
          <li
            onMouseOver={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
          >
            {session ? (
              <div>
                <div className={styles.flex}>
                  <img src={session?.user?.image} alt="" />
                  <span>{session?.user?.name}</span>
                  <RiArrowDropDownFill />
                </div>
              </div>
            ) : (
              <div>
                <div className={styles.flex}>
                  <RiAccountPinCircleLine />
                  <span>Account</span>
                  <RiArrowDropDownFill />
                </div>
              </div>
            )}
            {visible && <UserMenu loggedIn={session} />}
          </li>
        </ul>
      </div>
    </div>
  );
};
