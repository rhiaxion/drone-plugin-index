import Link from "next/link";
import Image from "next/image";
import { useRouter } from 'next/router'
import styles from "../styles/Card.module.css";

const Card = ({ pluginData }) => {
  const router = useRouter()
  const { id, title, tags, logo } = pluginData;
  const href = `/plugins/${id}`;

  const handleClick = (e) => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <div className={styles.container} onClick={handleClick}>
      <div className={styles.pluginTitle}>
        <Link href={href}>
          <a>{title}</a>
        </Link>
      </div>
      {tags?.length && (
        <div className={styles.pillContainer}>
          {tags?.map((tag) => (
            <div key={tag} className={styles.pill}>
              {tag}
            </div>
          ))}
        </div>
      )}
      {logo && (
        <div className={styles.logo}>
          <Image
            src={`/logos/${logo}`}
            alt={`${logo}`}
            height="40px"
            width="40px"
          />
        </div>
      )}
      {/* TODO: HARDCODED - needs to be fixed */}
      {/* <div className={styles.infoContainer}>
        <div className={styles.downloads}>
          <Image
            src="/icons/download.svg"
            alt="download icon"
            height="16px"
            width="16px"
          />{" "}
          140 installs
        </div>
        <div className={styles.verified}>
          <Image
            src="/icons/tick.svg"
            alt="download icon"
            height="12px"
            width="12px"
          />{" "}
          verified
        </div>
      </div> */}
    </div>
  );
};

export default Card;