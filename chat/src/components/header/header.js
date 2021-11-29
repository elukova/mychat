import { useContext } from "react";
import styles from "./header.module.css";
import { ThemeContext } from "../../theme-context";
import { Link } from "react-router-dom";

export function Header() {
  const {
    theme: { theme, name },
    themeSetter,
  } = useContext(ThemeContext);
  return (
    <div className={styles.header}>
      <Link to="/">HOME</Link>
      <Link to="/profile">PROFILE</Link>
      <Link to="/chat">CHAT</Link>
      <hr />
      <p style={{ color: theme.color }}>{name}</p>
      <button disabled={name === "red"} onClick={() => themeSetter("red")}>
        red
      </button>
      <button disabled={name === "green"} onClick={() => themeSetter("green")}>
        green
      </button>
    </div>
  );
}
