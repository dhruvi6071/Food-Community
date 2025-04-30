import sql from 'better-sqlite3';

const db = sql('meals.db');

export async function getMeals() {

    // .run() is used for inserting data and .all() is used for fetching data. 
    await new Promise((resolve ) => setTimeout(resolve, 5000));

    throw new Error('Loading Meals failed');
    return db.prepare('SELECT * FROM meals').all();
}