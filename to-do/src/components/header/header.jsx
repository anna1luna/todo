import s from "./header.module.css";

const Header = () => {
  return (
    <header className={`${s.header} bg-info-subtle`}>
      <div className={s.container}>
        <img
          className={s.header_logo}
          src="https://cdn.iconscout.com/icon/free/png-512/free-social-media-3660049-3094483.png?f=avif&w=512"
          alt="logo"
        ></img>
        <h1 className={s.header_heading}> SocialIV </h1>
      </div>
      <div className={s.container_right}>
        <input type="search" className={s.search} placeholder="Search here" />
        <img
          className={s.avatar}
          src="https://media.istockphoto.com/id/1361956153/photo/black-cat-sticking-out-tongue-funny-portrait.jpg?s=612x612&w=0&k=20&c=JtXn7BNTWl573nyjOJFsI99fXEjctnXsMz5zronzs5A="
          alt="avatar"
        />
      </div>
    </header>
  );
};

export default Header;
