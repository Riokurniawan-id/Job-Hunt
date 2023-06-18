import { Link } from "react-router-dom";

function Navbar() {
  const handleSignUpClick = () => {
    // tombol SignUp diklik
    console.log("Tombol Sign Up diklik");
  };

  const handleLoginClick = () => {
    // tombol Login diklik
    console.log("Tombol Login diklik");
  };
  return (
    <>
      <nav className="container"></nav>
    </>
  );
}

export default Navbar;
