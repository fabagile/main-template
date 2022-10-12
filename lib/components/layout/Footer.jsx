import styles from "../../../styles/Home.module.css";
import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      {/* // <footer className={styles.footer}> */}
      {/* <div> */}
      <span>fabagile &copy; {new Date().getFullYear()}</span>
      {/* <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{" "}
        <span className={styles.logo}>
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </span>
      </a> */}
      {/* </div>
<div> */}

      <a href="https://github.com/fabagile">code source</a>
      {/* </div> */}
    </footer>
  );
}
