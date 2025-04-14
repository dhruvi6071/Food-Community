import sql from 'better-sqlite3';

const db = sql('meals.db');

export async function getMeals() {

    // .run() is used for inserting data and .all() is used for fetching data. 
    await()
    return db.prepare('SELECt * FROM meals').all();
}