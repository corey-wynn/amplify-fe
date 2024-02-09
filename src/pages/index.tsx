"use client";
import styles from "./page.module.css";

export default function Home() {
  const hitBackend = async () => {
    const url: string | null = process.env.NEXT_PUBLIC_API_URL ? process.env.NEXT_PUBLIC_API_URL : null;
    if (url) {
      const res = await fetch(`${url}/route1`);
      const data = await res.json();
      console.log(data);
    }
  };
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>Hello</h1>

        <button onClick={hitBackend}>Testing</button>
      </div>
    </main>
  );
}
