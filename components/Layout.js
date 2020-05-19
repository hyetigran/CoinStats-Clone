import Navbar from "./Navbar";
import styles from "./Layout.module.css";

const Layout = (props) => {
  return (
    <div className={styles.mainLayout}>
      <Navbar />
      {props.children}
      <style jsx global>{`
        body {
          font-family: "SF Pro Text", "SF Pro Icons", "Helvetica Neue",
            "Helvetica", "Arial", sans-serif;
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        h1,
        h2,
        h3,
        h4,
        p {
          color: #ffffff;
        }
        span {
          color: #8e8c8c;
        }
      `}</style>
    </div>
  );
};

export default Layout;
