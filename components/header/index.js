import { Ad } from "./Ad";
import { Main } from "./Main";
import style from "./style.module.scss";
import { Top } from "./Top";
export const Header = ({ country }) => {
  return (
    <header className={style.header}>
      <Ad />
      <Top country={country} />
      <Main />
    </header>
  );
};
