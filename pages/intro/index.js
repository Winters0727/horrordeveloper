import Head from "next/head";
import styles from "../../styles/intro.module.css";

export default function Intro() {
  return (
    <>
      <Head>
        <title>Intro : 초대</title>
      </Head>
      <main>
        <div className={styles.warning}>what the hell...</div>
      </main>
    </>
  );
}
