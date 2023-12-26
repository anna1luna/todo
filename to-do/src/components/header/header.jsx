import s from "./header.module.css";
import logo from "./../../assets/img/logo.jpg";

const Header = () => {
  return (
    <header className={s.header}>
      <img className={s.header_logo} src={logo} alt="logo"></img>
      <h1 className={s.header_heading}> TaskBuddy </h1>
    </header>
  );
};

export default Header;
