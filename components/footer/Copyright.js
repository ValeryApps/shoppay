import Link from "next/link";
import styles from "./style.module.scss";
import { IoLocationSharp } from "react-icons/io5";

export const Copyright = ({ country }) => {
  return (
    <div className={styles.footer__copyright}>
      <section>2023 SHOPPAY All Rights Reserved</section>
      <section>
        <ul>
          {data.map((d) => (
            <li key={d.name}>
              <Link href={d.link}>{d.name}</Link>
            </li>
          ))}
          <li>
            <IoLocationSharp /> <span> {country.name}</span>
          </li>
        </ul>
      </section>
    </div>
  );
};
const data = [
  { name: "Privacy Center", link: "" },
  { name: "Privacy & Cookie Policy", link: "" },
  { name: "Manage Cookies", link: "" },
  { name: "Terms & Condition", link: "" },
  { name: "Copyright Note", link: "" },
];
