import classes from "./meals-grid.module.css";
import MealItem from "./meals-item";
export default function MealGrid({meals = []}){
    return (
        <>
            <ul className={classes.meals}>
                {meals.map((meal) => (<li key={meal.id}>

                    {/* This will pull out all properties from meal object and spread them as key-value pairs */}
                    <MealItem {...meal}/>
                </li>))}
            </ul>
        </>
    )
}