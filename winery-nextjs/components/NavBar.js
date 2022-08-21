import ofvLogo from "../images/ofv_logo_white.png";
import Image from "next/image";

export default function NavBar() {
  const LogoImage = (props) => {
    return (
      <Image
        className="home-logo"
        src={ofvLogo}
        alt="ofv logo"
        height="50px"
        width="50px"
      />
    );
  };
  return (
    <nav className="navBar">
      <div className="navBar-container">
        <LogoImage />
      </div>
    </nav>
  );
}
