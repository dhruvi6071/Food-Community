import Link from "next/link"
import classes from "./page.module.css";
import MealGrid from "@/components/meals/meals-grid";
export default function Meals(){
    return(
        <>
            <header className={classes.header}>
                <h1>
                    Delicious meals, created <span className={classes.highlight}>by YOU!</span>
                </h1>
                <p>
                    Choose your favorite reciepe and cook it yourself. 
                </p>
                <p className={classes.cta}>
                    <Link href="/meals/share">
                        Share your meals.
                    </Link>
                </p>
            </header>
            <main className={classes.main}>
                <MealGrid />
            </main>
        </>
    )
}