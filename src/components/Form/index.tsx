import { Dispatch, SetStateAction } from "react";
import styles from "./Form.module.scss";

type FormProps = {
  handleSubmit: (evt: React.FormEvent<HTMLFormElement>) => void;
  username: string;
  setUsername: Dispatch<SetStateAction<string>>;
  password: string;
  setPassword: Dispatch<SetStateAction<string>>;
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  signUp: boolean;
  err: string;
};

const Form: React.FC<FormProps> = ({
  handleSubmit,
  username,
  setUsername,
  password,
  setPassword,
  email,
  setEmail,
  signUp,
  err,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <p className={styles.heading}>{signUp ? "Sign up" : "Sign in"}</p>
      <input
        type="text"
        placeholder="username.."
        className={styles.input}
        value={username}
        onChange={(e) => setUsername(e.currentTarget.value)}
        required
      />
      <input
        type="password"
        placeholder="password.."
        className={styles.input}
        value={password}
        onChange={(e) => setPassword(e.currentTarget.value)}
        required
      />
      {signUp ? (
        <input
          type="email"
          placeholder="email.."
          className={styles.input}
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
          required
        />
      ) : (
        ""
      )}
      <p className={styles.err}>{err}</p>
      <button type="submit" className={styles.submit}>
        LOGIN
      </button>
    </form>
  );
};

export default Form;
