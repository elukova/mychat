// import { Link } from "react-router-dom";
import styles from "./header.module.css";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <div className={styles.header}>
      <Link to="/">HOME</Link>
      <Link to="/profile">PROFILE</Link>
      <Link to="/chat">CHAT</Link>
    </div>
  );
}
