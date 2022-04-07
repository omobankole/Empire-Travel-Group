import classes from "./auth.module.css";

const Auth = ({ children }) => {
  return (
    <main className={classes.main}>
      <div>{children}</div>
    </main>
  );
};

export default Auth;
