import Category from "components/Category";
import styles from "./Home.module.scss";
import Nav from "components/Nav";
import { categories, sources, colors } from "utils/index";


const Home = () => {

  return (
    <div className={styles.home}>
      <Nav />
      <div className={styles.grid_container}>
        {categories.map((category, i) => (
          <Category
            key={i}
            type={category}
            img={sources[i]}
            color={colors[i]}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
