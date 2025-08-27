import { Data } from "pages/Shop/types";
import styles from "./Card.module.scss";

type Props = {
  data: Data;
};

const Card = ({ data }: Props) => {
  return (
    <div className={styles.card}>
      <div className={styles.imgDiv}>
        <img src={data.thumbnail} fetchPriority="high" />
        <p className={styles.title}>
          {data.brand + " " + data.title.split(" ")[1]}
        </p>
      </div>
      <div className={styles.buy}>
        <p className={styles.price}>${data.price}</p>
        <div className={styles.add}>+</div>
      </div>
    </div>
  );
};

export default Card;
