import Link from "next/link";
import styles from "./style.module.scss";

export const Links = () => {
  return (
    <div className={styles.footer__links}>
      {links.map((link, index) => (
        <ul key={link.heading}>
          {index === 0 ? (
            <img src="/images/logo1.png" alt="" />
          ) : (
            <b>{link.heading}</b>
          )}

          {link.links.map((link) => (
            <li key={link.name}>
              <Link href={link.link}>{link.name}</Link>
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
};
const links = [
  {
    heading: "SHOPPAY",
    links: [
      { name: "About us", link: "" },
      { name: "Contact us", link: "" },
      { name: "Social Responsibility", link: "" },
      { name: " ", link: "" },
    ],
  },
  {
    heading: "HELP & SUPPORT",
    links: [
      { name: "shipping Info", link: "" },
      { name: "returns ", link: "" },
      { name: "How To Order ", link: "" },
      { name: "How To Track ", link: "" },
      { name: "Size Guide ", link: "" },
    ],
  },
  {
    heading: "Customer service",
    links: [
      { name: "Customer Service ", link: "" },
      { name: "Terms and Conditions", link: "" },
      { name: "Consumers (Transactions)", link: "" },
      { name: "Take our feedback survey ", link: "" },
    ],
  },
];
