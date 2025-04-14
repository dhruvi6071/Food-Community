import { resolve } from "styled-jsx/css";
import classes from "./loading.module.css";

export default  function MealsLoadingPage() {
    
    return <p className={classes.loading}> Fetching data...</p>
}