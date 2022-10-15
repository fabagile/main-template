import styles from "../../../styles/Home.module.css";
import Image from "next/image";

export default function Footer({color}) {
  const style = color ? `bg-${color}` : '';
  return (
    <footer className={style}>
      {/* // <footer className={styles.footer}> */}
      <div className={style}>
        fabagile &copy; {new Date().getFullYear()}
        
      </div>
<div className={style}>

      <a href="https://github.com/fabagile">code source</a>
</div>
      {/* </div> */}
    </footer>
  );
}
