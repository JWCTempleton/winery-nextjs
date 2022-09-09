import Image from "next/image";
import Link from "next/link";
import ofvLogo from "../images/ofv_logo_white.png";

export default function Home(wines) {
  const LogoImage = (props) => {
    return (
      <Image
        className="home-logo"
        src={ofvLogo}
        alt="ofv logo"
        height="150px"
        width="150px"
      />
    );
  };

  console.log(wines);
  return (
    <div className="home">
      <LogoImage />
      <h1 className="home-title">Olney Family Vineyards</h1>
      <Link href="/wines">
        <button className="home-button">Our Wines</button>
      </Link>
    </div>
  );
}
