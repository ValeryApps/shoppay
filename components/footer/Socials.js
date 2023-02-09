import {
  BsInstagram,
  BsPinterest,
  BsSnapchat,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";
import { FaFacebook, FaTiktok } from "react-icons/fa";
import styles from "./style.module.scss";

export const Socials = () => {
  return (
    <div className={styles.footer__socials}>
      <section>
        <h1 className="text-[12px] font-[700] text-gray-600">STAY CONNECTED</h1>
        <ul>
          <li>
            <a href="/" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
          </li>
          <li>
            {" "}
            <a href="/" target="_blank" rel="noopener noreferrer">
              <BsInstagram />
            </a>
          </li>
          <li>
            <a href="/" target="_blank" rel="noopener noreferrer">
              <BsTwitter />
            </a>
          </li>
          <li>
            {" "}
            <a href="/" target="_blank" rel="noopener noreferrer">
              <BsYoutube />
            </a>
          </li>
          <li>
            {" "}
            <a href="/" target="_blank" rel="noopener noreferrer">
              <BsPinterest />
            </a>
          </li>
          <li>
            {" "}
            <a href="/" target="_blank" rel="noopener noreferrer">
              <BsSnapchat />
            </a>
          </li>
          <li>
            {" "}
            <a href="/" target="_blank" rel="noopener noreferrer">
              <FaTiktok />
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};
