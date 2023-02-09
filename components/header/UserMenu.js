import Link from "next/link";
import styles from "./style.module.scss";
import { signIn, signOut } from "next-auth/react";

export const UserMenu = ({ loggedIn }) => {
  return (
    <div className={styles.menu}>
      <h4> Welcome to Shoppay</h4>
      {loggedIn ? (
        <div className={styles.flex}>
          <img
            src={loggedIn?.user?.image}
            alt=""
            className={styles.menu__img}
          />
          <div className={styles.col}>
            <span>Welcome back</span>
            <h3>{loggedIn?.user?.name}</h3>
            <span
              className="underline text-blue-600 font-bold"
              onClick={() => signOut()}
            >
              Sign out
            </span>
          </div>
        </div>
      ) : (
        <div className={styles.flex}>
          <button className={styles.btn_primary}>Register</button>
          <button className={styles.btn_outlined} onClick={() => signIn()}>
            Login
          </button>
        </div>
      )}
      <ul>
        <li>
          <Link href="/profile">Account</Link>
        </li>
        <li>
          <Link href="/profile/orders">My Orders</Link>
        </li>
        <li>
          <Link href="/profile/message">Message Center</Link>
        </li>
        <li>
          <Link href="/profile/address">Address</Link>
        </li>
        <li>
          <Link href="/profile/wishlist">Wishlist</Link>
        </li>
      </ul>
    </div>
  );
};
