import Head from "next/head";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

import { useAudio } from "../hooks/audio";

export default function Home() {
  const prefix =
    process.env.NODE_ENV === "production"
      ? "https://winters0727.github.io/horror-developer"
      : "";

  const router = useRouter();
  const [isPlay, toggle] = useAudio("assets/sounds/open_door.mp3");

  return (
    <div>
      <Head>
        <title>Horror Developer - 어느 개발자의 저택</title>
      </Head>

      <main>Main</main>
      <button
        className="submit-btn"
        onClick={(e) => {
          toggle();
          router.push("/intro");
        }}
      >
        버튼
      </button>
      <footer className={styles.footer}>Footer</footer>
    </div>
  );
}
