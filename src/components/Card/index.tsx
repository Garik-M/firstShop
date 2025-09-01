import { Data } from "pages/Shop/types";
import styles from "./Card.module.scss";
import { memo } from "react";
import { useNavigate } from "react-router-dom";
import { useAdded } from "Context/added/useAdded";

type Props = {
  data: Data;
};

const Card = memo(({ data }: Props) => {
  const navigate = useNavigate()
  const { added, setAdded } = useAdded();

  const handleAdd = () => {
    if(!localStorage.username){
      navigate("/login");
    } else{
      setAdded(true)
    }
  }

  return (
    <div className={styles.card}>
      <div className={styles.imgDiv}>
        <img src={data.thumbnail} fetchPriority="high" />
        <p className={styles.title}>
          {data.brand + " " + data.title.split(" ")[1] + " "}
          {data.title.split(" ")[2] !== undefined && data.title.split(" ")[2] !== "&" ? data.title.split(" ")[2] : ""}
        </p>
      </div>
      <div className={styles.buy}>
        <p className={styles.price}>${data.price}</p>
        <div className={styles.add} onClick={handleAdd}>+</div>
      </div>
    </div>
  );
});

export default Card;
