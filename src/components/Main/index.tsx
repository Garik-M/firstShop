import styles from "./Main.module.scss";

import Card from "components/Card";
import { Data } from "pages/Shop/types";
import { useParams } from "react-router-dom";
import { ReactComponent as Arrow } from "../assets/SVG/arrow.svg";
import { useEffect, useRef, useState } from "react";
import { categories } from "utils/index";
import Option from "components/Option";

type Props = {
  data: Data[];
  setData: React.Dispatch<React.SetStateAction<Data[] | undefined>>;
};
const Main = ({ data }: Props) => {
  const params = useParams();

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (divRef.current && !divRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  
  const categoryName = (str: string | undefined) => {
    return str?.split("-").length !== 1
      ? str!.split("-")[0].slice(0, 1).toUpperCase() +
          str?.split("-")[0].slice(1) +
          " " +
          str?.split("-")[1].slice(0, 1).toUpperCase() +
          str?.split("-")[1].slice(1)
      : str.slice(0, 1).toUpperCase() + str.slice(1);
  };
  const options = categories.map((str) => (
    <Option str={str} categoryName={categoryName} key={str} />
  ));
  const cards = data.map((val, i) => <Card key={i} data={val} />);
  

  return (
    <div>
      <div className={styles.categories}>
        <div
          className={styles.category}
          ref={divRef}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <p className={styles.current}>{categoryName(params.type)}</p>
          <Arrow className={`${styles.arrow} ${isOpen ? styles.down : ""}`} />
          <div className={`${styles.dropdown} ${isOpen ? styles.open : ""}`}>
            {options}
          </div>
        </div>
      </div>
      <div className={styles.container}>{cards}</div>
    </div>
  );
};

export default Main;
