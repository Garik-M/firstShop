import { use, useState } from "react";
import styles from "./Login.module.scss";
import Nav from "components/Nav";
import Form from "components/Form";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [signUp, setSignUp] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [err, setErr] = useState<string>("");

  const navigate = useNavigate();

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const confirm = window.confirm(
      `Are you sure you want to delete 
             your last account and create another?`
    );
    const newAccount =
      !localStorage.login &&
      localStorage.username !== username &&
      localStorage.password !== password &&
      localStorage.email !== email;

    if (signUp) {
      if (newAccount) {
        if (confirm) {
          localStorage.setItem("username", username);
          localStorage.setItem("password", password);
          localStorage.setItem("email", email);
          localStorage.setItem("login", "true");
          setUsername("");
          setPassword("");
          setEmail("");
          navigate("/products/all-types");
        }
      } else {
        setErr("You already got an account!");
      }
    } else {
      if (
        localStorage.username === username &&
        localStorage.password === password &&
        !localStorage.login
      ) {
        navigate("/products/all-types");
        localStorage.setItem("login", "true");
      } else {
        setErr("Your'e logged in or You dont have an account");
      }
    }
  };
  return (
    <div>
      <div className={styles.nav}>
        <Nav />
      </div>
      <div className={styles.container}>
        <div className={styles.login}>
          <div className={styles.half}>
            <p className={styles.tagline}>Already have an Account ?</p>
            <button
              className={styles.btn}
              onClick={() => {
                setSignUp(false);
                setErr("");
              }}
            >
              Sign in
            </button>
          </div>
          <div className={`${styles.form} ${signUp ? styles.sign_up : ""}`}>
            <Form
              handleSubmit={handleSubmit}
              username={username}
              setUsername={setUsername}
              password={password}
              setPassword={setPassword}
              email={email}
              setEmail={setEmail}
              signUp={signUp}
              err={err}
            />
          </div>
          <div className={styles.half}>
            <p className={styles.tagline}>Don't have an Account ?</p>
            <button
              className={styles.btn}
              onClick={() => {
                setSignUp(true);
                setErr("");
              }}
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
