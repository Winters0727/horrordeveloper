import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  const prefix =
    process.env.NODE_ENV === "production"
      ? "https://winters0727.github.io/horror-developer"
      : "";

  return (
    <div className={styles.container}>
      <Head>
        <title>Deploy Test</title>
      </Head>

      <main className={styles.main}>Main</main>

      <footer className={styles.footer}>Footer</footer>
    </div>
  );
}
