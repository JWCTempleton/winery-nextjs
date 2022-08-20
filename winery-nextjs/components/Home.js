import Image from "next/image";
import ofvLogo from "../images/ofv_logo_white.png";

export default function Home() {
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

  return (
    <div className="home">
      <LogoImage />
      <h1 className="home-title">Olney Family Vineyards</h1>
    </div>
  );
}
