import { Link, useNavigate } from "react-router-dom";
import styles from "./Nav.module.scss";
import { ReactComponent as Basket } from "../assets/SVG/basket.svg";
import { ReactComponent as LogOut } from "../assets/SVG/logout.svg";
import { useState } from "react";
import { useAdded } from "Context/added/useAdded";

const Nav = () => {
  const [img, setImg] = useState<string>(
    "https://cdn-icons-png.freepik.com/512/8742/8742495.png"
  );
  const { added, setAdded } = useAdded();
  const navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.setItem("login", "");
    navigate("/login");
  };
  const hasProfile = () => {
    if (!localStorage.login) {
      navigate("/login");
    } else {
      navigate("/profile");
    }
  };
  return (
    <nav>
      <div className={styles.bar}>
        <Link to="/">
          <img src="https://www.beatsbydre.com/content/dam/beats/global/logos/beats-logo-161616.png" />
        </Link>
        <Link to="/">Home</Link>
        <Link to="/products/all-types">Products</Link>
        <Link to="/login">Login</Link>
      </div>
      <div className={styles.bar}>
        <Link to="/">
          <div className={added ? styles.added : ""}>
            <Basket className={styles.basket} onClick={() => setAdded(false)} />
          </div>
        </Link>
        <div onClick={handleLogOut}>
          <LogOut className={styles.logOutSvg} />
        </div>
        <div className={styles.profile} onClick={hasProfile}>
          <div className={styles.circle}>
            <img src={img} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
