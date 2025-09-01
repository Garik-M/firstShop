import { useState } from "react";
import styles from "./Category.module.scss";
import { useNavigate } from "react-router-dom";

type Props = {
  type: string;
  img: string;
  color: string;
};
const Category = ({ type, img, color }: Props) => {
  const navigate = useNavigate();
  
  return (
    <div className={styles.container} style={{backgroundColor: color}}>
      <img src={img} alt="product" className={styles.img} fetchPriority="high"/>
      <p className={styles.tagline}>{type.toUpperCase()}</p>
      <button className={styles.btn} onClick={() => navigate(`/products/${type}`)}>Shop</button>
    </div>
  );
};

export default Category;
