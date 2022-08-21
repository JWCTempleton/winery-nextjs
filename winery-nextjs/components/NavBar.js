import ofvLogo from "../images/ofv_logo_white.png";
import Image from "next/image";
import Link from "next/link";

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
      <div className="nav-container">
        <Link href="/">
          <LogoImage />
        </Link>
        <ul>
          <Link href="/">
            <a>
              <li>Home</li>
            </a>
          </Link>
          <Link href="/wines">
            <a>
              <li>Our Wines</li>
            </a>
          </Link>
          <Link href="/about">
            <a>
              <li>About</li>
            </a>
          </Link>
          <Link href="/contact">
            <a>
              <li>Contact Us</li>
            </a>
          </Link>
          <Link href="/visit">
            <a>
              <li>Visit Us</li>
            </a>
          </Link>
          <Link href="/prop65">
            <a>
              <li>CA Prop 65</li>
            </a>
          </Link>
        </ul>
      </div>
    </nav>
  );
}
