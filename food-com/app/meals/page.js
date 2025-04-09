import Link from "next/link"
import classes from "./page.module.css";
export default function Meals(){
    return(
        <>
            <header className={classes.header}>
                <h1>
                    Delicious meals, created <span className={classes.highlight}>by YOU!</span>
                </h1>
            </header>
            <main className={classes.main}></main>
        </>
    )
}