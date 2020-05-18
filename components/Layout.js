import Navbar from "./Navbar";

const Layout = (props) => {
  return (
    <div>
      <Navbar />
      {props.children}
      <style jsx global>{`
        body {
          font-family: "SF Pro Text", "SF Pro Icons", "Helvetica Neue",
            "Helvetica", "Arial", sans-serif;
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
};

export default Layout;
