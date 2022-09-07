import ofvLogo from "../images/ofv_logo_white.png";
import Image from "next/image";
import Link from "next/link";

export default function NavBar(props) {
  const LogoImage = () => {
    return (
      <Image
        className="home-logo"
        src={ofvLogo}
        alt="ofv logo"
        height={50}
        width={50}
      />
    );
  };
  console.log(props.wines);
  return (
    <nav className="navBar">
      <div className="nav-container">
        <Link href="/">
          <a>
            <LogoImage />
          </a>
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
