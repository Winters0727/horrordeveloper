import Head from "next/head";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

import { useAudio } from "../hooks/audio";

export default function Home() {
  const router = useRouter();
  const [isPlay, toggle] = useAudio("assets/sounds/open_door.mp3");

  const onClick = (e) => {
    toggle();
    router.push("/intro");
  };

  return (
    <div>
      <Head>
        <title>Horror Developer - 어느 개발자의 저택</title>
      </Head>

      <main>
        <section className="message-container">
          <button className="submit-btn" onClick={onClick}>
            버튼
          </button>
        </section>
      </main>
      <footer className={styles.footer}>Footer</footer>
    </div>
  );
}
