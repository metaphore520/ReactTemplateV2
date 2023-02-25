import Nav from "./Nav";

function Layout({ children }) {
  return (
    <>
      <Nav />
      <div>
        <div>{children}</div>
      </div>
    </>
  );
}

export default Layout;
