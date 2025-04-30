// This file components are rendered by Next.js whenever an error occurs
// Te khali teni sathe rahela folder na page ni ke loading ke any js file ni j error handle akrse.

'use client';

export default function Error({error}) {
    return <main>
        <h1>An Error Occured !</h1>
        <p>Failed to fetch meal data</p>
    </main>
}