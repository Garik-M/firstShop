import { useNavigate, useParams } from "react-router-dom";
import styles from "./Option.module.scss";

type Props = {
  str: string;
  categoryName: (str: string | undefined) => string;
};

const Option = ({ str, categoryName }: Props) => {
  const params = useParams();
  const navigate = useNavigate();
  const isActive = str === params.type ? styles.active : "";
  
  return (
    <div
      key={str}
      className={`${styles.optionBox} ${isActive}`}
      onClick={() => navigate(`/products/${str}`)}
    >
      {categoryName(str)}
    </div>
  );
};

export default Option;
