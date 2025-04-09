

import Link from "next/link";
import Logoimg from "../assets/logo.png";
import classes from "./main-header.module.css";
import MainHeaderBackground from "./main-header-background";
import NavLink from "./nav-link";

export default function MainHeader() {

  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <img src={Logoimg.src} alt="A plate with food in it."></img>
          NextLevel Food.
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
