import styles from "./Main.module.scss";

import Card from "components/Card";
import { Data } from "pages/Shop/types";

type Props = {
  data: Data[];
  setData: React.Dispatch<React.SetStateAction<Data[] | undefined>>
}
const Main = ({ data  }: Props) => {
  return (
    <div className={styles.container}>
      {data.map((val, i) => (
        <Card key={i} data={val}/>
      ))}
    </div>
  );
};

export default Main;