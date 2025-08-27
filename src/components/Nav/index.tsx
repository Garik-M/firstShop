import { Link } from "react-router-dom";
import styles from "./Nav.module.scss";
import { Data } from "@pages/Shop/types";

const Nav = () => {
  return (
    <nav>
      <div className={styles.bar}>
        <Link to="/">
          <img src="https://www.beatsbydre.com/content/dam/beats/global/logos/beats-logo-161616.png" />
        </Link>
        <Link to="/">Home</Link>
        <Link to="/shop/all-types" >Shop</Link>
      </div>
      <div className={styles.bar}>
        <Link to="/login">Login</Link>
        <Link to="/">Basket</Link>
      </div>
    </nav>
  );
};

export default Nav;
