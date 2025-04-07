'use-client';

import Link from "next/link";
import Logoimg from "../assets/logo.png";
import classes from "./main-header.module.css";
import MainHeaderBackground from "./main-header-background";
import { usePathname } from "next/navigation";
 
export default function MainHeader(){
    const path = usePathname();

    return(
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
                        <Link href="/meals" className={path.startsWith('/meals') ? classes.active : undefined}> Meals</Link>
                    </li>
                    <li>
                        <Link href="/community" className={path.startsWith('/community') ? classes.active : undefined}>Community</Link>
                    </li>
                </ul>
            </nav>
        </header>
        </>
        
    );
} 