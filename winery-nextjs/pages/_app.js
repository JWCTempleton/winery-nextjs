import "../styles/index.scss";
import NavBar from "../components/NavBar";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <div>
        <Component {...pageProps} />
      </div>
    </>
  );
}
