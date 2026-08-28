import Image from "next/image";
import styles from "./Avarta.module.css";

export default function Avarta({ profile }: { profile: string }) {
  return (
    <div className={styles.avarta}>
      <Image className={styles.icon} fill src={profile} alt="유저 프로필" />
    </div>
  );
}
