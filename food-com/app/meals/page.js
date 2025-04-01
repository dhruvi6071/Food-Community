import Link from "next/link"
export default function Meals(){
    return(
        <main>
            <h1>Welcome to meals</h1>
            <p><Link href="/meals/meal-1">meal 1</Link></p>
        </main>
    )
}